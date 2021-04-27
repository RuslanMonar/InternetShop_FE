import React, { useEffect,useState } from 'react';
import classes from '../../../src/css/CardItem.css';



export const CardItem = ({id}) => {
    const [card, setCard] = useState({});
    
    const loadItem= () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
                .then(({product_name,price,front_image}) =>
                    setCard({
                        product_name:product_name,
                        price:price,
                        front_image:front_image

                    })

                );
                
    }
   

    useEffect(() => {
     loadItem()
    },[])
    

    return (
        <div className="Card" >
            <div className="CardImageConteiner">
                <img className="CardImage" src={card.front_image}></img>
            </div>
            <div className="CardDescription">
                <div className="CardText">{card.product_name}</div>
                <div className="CardPrice">{card.price}</div>
            </div>
        </div>
    )
}
export default CardItem