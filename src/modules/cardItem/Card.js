import { React } from 'react';
import classes from '../../../src/css/CardItem.css';








export const CardItem = (photo,price,text) => {
    return (
        <div className="Card">
            <div className="CardImageConteiner">
                <img className="CardImage" src=""></img>
            </div>
            <div className="CardDescription">
                <div className="CardText">Phone Lenovo 64 GB   green</div>
                <div className="CardPrice">956 $</div>
            </div>
        </div>
    )
}
export default CardItem