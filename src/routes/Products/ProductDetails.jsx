import React, { useEffect, useState } from 'react';
import '../../../src/css/productDetails.css';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import api from './../../modules/Auth/ApiAxios';


function Detaills(props) {
    return (<div className="DetailsItem">
        <p className="DetailsTitle">Details</p>
        <div className="DetailsPart">
            <div className="DetailParametr">Display</div>
            <div className="DetailValue"> </div>
        </div>
        <div className="DetailsPart">
            <div className="DetailParametr">Display</div>
            <div className="DetailValue"> </div>
        </div>
        <div className="DetailsPart">
            <div className="DetailParametr">Display</div>
            <div className="DetailValue"> </div>
        </div>
        <div className="DetailsPart">
            <div className="DetailParametr">Display</div>
            <div className="DetailValue"> </div>
        </div>
        <div className="DetailsPart">
            <p className="DetailParametr">Display</p>
            <p className="DetailValue">Screen</p>
        </div>



    </div>);
}

const ProductDetails = ({ id }) => {
    const [card, setCard] = useState({});
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const [images , setImages] = React.useState([])

    const loadItem = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then(({ name, price, front_image }) =>
                setCard({
                    id: id,
                    name: name,
                    price: price,
                    front_image: front_image

                })

            );

    }

    const GetDetails = (id) => {
        let data = {id}
        api().post("/api/product-details" , data).then(result => {
            setImages(result.data.productDetails);
        })
    }


    useEffect(() => {
        GetDetails(4)
    }, [])

    var item = {
        value1: 'kiko',
        value2: 'lol'
    }

    return (
        <div className="container">
            <button onClick={() => GetDetails(1)}> Load product data </button>
            <div className="inner_line">
                <p className="elements_of_inner">Головна</p>
                <p className="elements_of_inner">Каталог товарів</p>
                <p className="elements_of_inner">Ноутбук</p>
                <p >Ноутбук назва</p>
            </div>

            <div className="ProductCart">
                <div className="ProductImage">

                    <Slider className="FirstSlider" asNavFor={nav2}
                        infinite={true}
                        arrows={false}
                        lazyLoad={false}
                        fade={false}
                        speed={0}
                        ref={(slider1) => setNav1(slider1)}
                        >

                        {
                            images.map(item => {
                                console.log(item.path_image);
                                return (
                                    <div className="MainImage"> <img src={item.path_image}></img></div>
                                )
                            })
                        }

                    </Slider>
                    <Slider className="SecondSlider"
                        asNavFor={nav1}
                        arrows={false}
                        ref={(slider2) => setNav2(slider2)}
                        speed={10}

                        lazyLoad={false}
                        infinite={false}

                        focusOnSelect={true}
                        slidesToShow={3}
                    >
                        {
                            images.map(item => {
                                console.log(item.path_image);
                                return (
                                    <div className="Imageconteiner"> <img src={item.path_image}></img></div>
                                )
                            })
                        }
                    </Slider>

                    <p className="TextAboutItem">

                    </p>

                </div>
                <div className="ProductDetail">
                    <p className="ProductTitle">Compukter Lenovo 126gb 4 ram </p>
                    <div className="Buyproduct"><p className="ProductPrice">999$</p>

                        <div className="ProductBuyButtons">
                            <div className="BuyButtonBasket"><img className="ProducttextbasketImage" src="img/371979-ffffff.png"></img> <p className="Producttextbasket">  Додати в корзину</p> </div>
                            <div className="BuyButtonPaypal"> <p>Купити зараз</p>   <img src="img/paypal.png"></img> </div>

                        </div>

                    </div>

                    <div className="ProductComunication">
                        <div className="ProductComunicationFirstRow">
                            <div className="FirstELement"> <img className="ComunicationIcon" src="img/HavingInMarket.png"></img> Доступний</div>
                            <div><img className="ComunicationIcon" src="img/info.png"></img>  Додаткова інформація</div>

                        </div>
                        <div className="ProductComunicationSecondRow">
                            <div className="FirstELement NumberPhone" > <img className="ComunicationIcon" src="img/AboutUs24hour.png"></img> +380976890956</div>
                            <div> <img className="ComunicationIcon EmailIcon" src="img/email.png"></img> Напишіть нам на нас Email</div>


                        </div>

                    </div>
                    <Detaills />


                </div>

            </div>

        </div>

    )
}
export default ProductDetails

