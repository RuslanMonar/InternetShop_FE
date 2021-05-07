import React from 'react';
import '../../css/cart.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faMinus, faWindowClose, faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Loader from 'react-loader-spinner';
import CartContext from './../../contexts/CartContext';
import CartItem from './CartItem';



const Cart = () => {

    const { cartModal, setCartModal ,  CartLoader , cart , cartTotalPrice} = React.useContext(CartContext)
    
    return (
        <div className={'cartMain'}>
            {CartLoader ? (<Loader className={'loaderSpiner'} type="Oval" color="black" height={80} width={80} />) : (null)}
            <span className={'cartTitle'}>
                Корзина
            </span>
            <div className={'catItemList'}> 
            {cart ? (cart.map(item => <CartItem key={item.id} {...item} />)) : (null)}
                <div className={'CartMakeOrder'}>
                    <div className={'ContinueShopping'}>
                        <FontAwesomeIcon className={'closeCartItemIcon'} icon={faArrowAltCircleLeft} color="#5285cc" />
                        <span onClick={() => setCartModal(!cartModal)}>
                            Продовжити вибір товару
                    </span>
                    </div>
                    <span className={'CartTotalPrice'}>
                        Підсумок: {cartTotalPrice} ₴
                </span>
                    <button>Оформити заказ</button>
                </div>

            </div>
        </div>

    )
}
export default Cart