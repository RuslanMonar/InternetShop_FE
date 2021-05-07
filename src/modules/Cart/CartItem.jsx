import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faMinus, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import api from './../Auth/ApiAxios';
import CartContext from './../../contexts/CartContext';
import React from 'react';

const CartItem = ({ id, quantity, total_price, products }) => {

    const { delteItemFromCart, setCart, setCartLoader, setCartTotalPrice, IncreaseQuantity, DecreaseQuantity, ChangeQuantityValue } = React.useContext(CartContext)

    const CartFunctions = { setCart, setCartLoader, setCartTotalPrice }
    const [localQuanity, setLocalQuantity] = React.useState(quantity);
    const [listener, setListener] = React.useState(false);
    const [CartFirstLoad, setCartFirstLoad] = React.useState(true);

    const ref = React.useRef(null);

    const QuantityChange = () => {
        if (!listener) {
            document.addEventListener('click', handleClickOutside, true);
            setListener(true);
        }
    }

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            document.removeEventListener('click', handleClickOutside, true);
            setListener(false);
            ChangeQuantityValue(id, localQuanity, CartFunctions);

        }
    };

    React.useEffect(() => {
        setLocalQuantity(quantity)
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
            setListener(false);
        }
    }, [quantity]);

    React.useEffect(() => {
        if (!CartFirstLoad) {

            QuantityChange();
        }
        else {

            setCartFirstLoad(!CartFirstLoad);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
            setListener(false);
        }
    }, [localQuanity]);


    return (
        <div className={'cartItem'}>
            <FontAwesomeIcon onClick={() => delteItemFromCart(id, CartFunctions)} className={'closeCartItemIcon'} icon={faWindowClose} width="17px" color="red" />
            <div className={'cartItemImage'}>
                <img src={products[0].front_image} alt="" />
            </div>
            <div className={'cartItemContent'}>
                <span className={'cartItemTitle'}>
                    {products[0].product_name}
                </span>
                <div className={'QuantityInput'}>
                    <FontAwesomeIcon onClick={() => DecreaseQuantity(id, CartFunctions)} className={'qantityIcons'} icon={faMinus} color="#5285cc" />
                    <input ref={ref} onChange={e => setLocalQuantity(parseInt(e.target.value))} type="number" value={localQuanity} defaultValue="1" />
                    <FontAwesomeIcon onClick={() => IncreaseQuantity(id, CartFunctions)} className={'qantityIcons'} icon={faPlus} width="12px" color="#5285cc" />
                </div>
                <span className={'cartItemPrice'}>
                    {total_price}₴
                </span>
            </div>
        </div>
    )
}

export default CartItem;