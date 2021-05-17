import React, { useEffect, useState } from 'react';
import classes from '../../../src/css/CardItem.css';
import Slider from 'react-slick';
import api from '../../modules/Auth/ApiAxios'
import "slick-carousel/slick/slick.css";
import FeatureProduct from '../DetailsProduct/ProductFeature';



const CardItem = ({ id }) => {
    const [card, setCard] = useState({});
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    let data = { id: id }
    const GetProductsList = () => {
        api().post("/api/products", data).then(result => {

            setProductList(result.data.products)
            return result.data.products
        })
    }

    const [ProductsList, setProductList] = useState([]);
    console.log(ProductsList)


    useState(() => GetProductsList());


    return (



        <div className="container">


            {ProductsList.map((item) => {
                if (item.id === id) {
                    return (<div key={id}  >



                        <div className="inner_line">
                            <p className="elements_of_inner">Головна</p>
                            <p className="elements_of_inner">Каталог товарів</p>
                            <p className="elements_of_inner">{item.productable_type}</p>
                            <p >{item.product_name}</p>



                        </div>



                        <div className="ProductCart">
                            <div className="ProductImage">

                                <Slider className="FirstSlider" asNavFor={nav2}

                                    infinite={true}
                                    arrows={false}
                                    lazyLoad={true}
                                    fade={true}
                                    speed={0}
                                    ref={(slider1) => setNav1(slider1)}>
                                    <div className="Imageconteiner"> <img src={item.front_image}></img></div>
                                    <div className="Imageconteiner"> <img src={item.front_image}></img></div>
                                    <div className="Imageconteiner"> <img src={item.front_image}></img></div>
                                    <div className="Imageconteiner"> <img src={item.front_image}></img></div>
                                    <div className="Imageconteiner"> <img src={item.front_image}></img></div>
                                    <div className="Imageconteiner"> <img src={item.front_image}></img></div>

                                </Slider>
                                <Slider className="SecondSlider"
                                    asNavFor={nav1}
                                    arrows={false}
                                    ref={(slider2) => setNav2(slider2)}
                                    speed={10}

                                    lazyLoad={true}
                                    infinite={true}

                                    focusOnSelect={true}
                                    slidesToShow={3}
                                >
                                    <div className="LowerImageConteiner"> <img src={item.front_image}></img></div>
                                    <div className="LowerImageConteiner"> <img src={item.front_image}></img></div>
                                    <div className="LowerImageConteiner"> <img src={item.front_image}></img></div>
                                    <div className="LowerImageConteiner"> <img src={item.front_image}></img></div>
                                    <div className="LowerImageConteiner"> <img src={item.front_image}></img></div>
                                    <div className="LowerImageConteiner"> <img src={item.front_image}></img></div>

                                </Slider>

                                <p className="TextAboutItem">Працюйте, вчіться або грайте день у день з потужним і тонким ноутбуком Redmibook 14". У нього є все необхідне, щоб стати вашим незамінним помічником. Завдяки продуктивній начинці цей портативний лептоп легко справляється з будь-якими повсякденними завданнями, а яскравий 14-дюймовий екран з роздільною здатністю Full HD і стереодинаміки з підтримкою DTS просто створені для мультимедійних розваг. І все це упаковано у витончений металевий корпус, який виглядає дуже стильно.</p>

                            </div>
                            <div className="ProductDetail">
                                <p className="ProductTitle">{item.product_name}</p>
                                <div className="Buyproduct"><p className="ProductPrice">{item.price} $</p>

                                    <div className="ProductBuyButtons">
                                        <div className="BuyButtonBasket"><img className="ProducttextbasketImage" src="img/371979-ffffff.png"></img> <p className="Producttextbasket">  Додати в корзину</p> </div>
                                        <div className="BuyButtonPaypal"> <p>Купити зараз</p>   <img src="img/paypal.png"></img> </div>

                                    </div>

                                </div>

                                <div className="ProductComunication">
                                    <div className="ProductComunicationFirstRow">
                                        <div className="FirstELement"> <img className="ComunicationIcon" src="img/HavingInMarket.png"></img>Кредит 15 місяців,аванс 0% </div>
                                        <div><img className="ComunicationIcon" src="img/dostavka.png"></img>Безкоштовна доставка  </div>

                                    </div>
                                    <div className="ProductComunicationSecondRow">
                                        <div className="FirstELement NumberPhone" > <img className="ComunicationIcon" src="img/AboutUs24hour.png"></img> +380976890956</div>
                                        <div> <img className="ComunicationIcon EmailIcon" src="img/email.png"></img> Напишіть нам на наш Email</div>


                                    </div>

                                </div>
                                

                                <div> <FeatureProduct id={3} type='phone'></FeatureProduct></div>



                            </div>

                        </div>
                       

                    </div>)
                }
            }
            )





            }


        </div>

    )
}
export default CardItem