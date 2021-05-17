import React, { useEffect, useState } from 'react';
import '../../../src/css/productDetails.css';
import Slider from 'react-slick';
import StarRatings from 'react-star-ratings';
import "slick-carousel/slick/slick.css";
import api from './../../modules/Auth/ApiAxios';
import FeatureProduct from './FeatureProduct';
import CartContext from './../../contexts/CartContext';
import Loader from "react-loader-spinner";
import AuthContext from './../../contexts/AuthContext';



const ProductDetails = ({ props }) => {
    var Link = require('react-router-dom').Link
    const [card, setCard] = useState({});
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const [images, setImages] = React.useState([])
    const [ProductDetails, setProductDetais] = React.useState([]);
    const [ProductMainInfo, setProductMainInfo] = React.useState([]);
    const [CategoryType, setCategoryType] = React.useState([]);
    const { cartModal, setCartModal, setCartLoader, cart, setCart, loadCart, setCartTotalPrice, CountProductInCart, setProductsInCart, ActiveLoader, setActiveLoader } = React.useContext(CartContext)
    const { isLoggedIn, RegisterVisible, setRegisterVisible, } = React.useContext(AuthContext)
    const [total_price , setTotalPrice] = React.useState(0);;

    const GetDetails = (id, productable_id, productable_type) => {
        setActiveLoader(true)
        let data = { id, productable_id, productable_type }
        api().post("/api/product-details", data).then(result => {
            setTotalPrice(result.data.product.price);
            result.data.product.price = result.data.product.price.toLocaleString();
            switch (result.data.product.productable_type) {
                case 'Phone':
                    setCategoryType('Телефони');
                    break;
                case 'Tablet':
                    setCategoryType('Планшети');
                    break;
                case 'Laptop':
                    setCategoryType('Ноутбуки');
                    break;
                default:
                    setCategoryType('Невідомо');
                    break;
            }
            setProductMainInfo(result.data.product);
            setImages(result.data.images);
            setProductDetais(result.data.productDetails);
            setActiveLoader(false);
        })
    }


    useEffect(() => {
        let product_id = props.location.state.id;
        let product_productable_id = props.location.state.productable_id;
        let product_productable_type = props.location.state.productable_type;

        GetDetails(product_id, product_productable_id, product_productable_type)
    }, [])


    const addToCart = () => {
        if (isLoggedIn) {
            setCartModal(!cartModal);
            setCartLoader(true);
            addToCartBackend();
            CountProductInCart(setProductsInCart);
            loadCart(setCart, setCartLoader, setCartTotalPrice);
        }
        else {
            setRegisterVisible(!RegisterVisible);
        }
    }

    const addToCartBackend = () => {
        let quantity = 1;
        let id = ProductMainInfo.id;
        let data = { id, quantity, total_price }
            api().get('/sanctum/csrf-cookie').then(response => {
                api().post("/api/add-to-cart", data).then(result => {
                })
            });
    }

    return (
        <div className="container">
            {ActiveLoader ? (<Loader className={'loaderSpinerProductDetails'} type="Oval" color="black" height={200} width={200} />) : (null)}
            <div className="inner_line">
                <p className="elements_of_inner">Інтернет магазин</p>
                <p className="elements_of_inner">Каталог товарів</p>
                <p className="elements_of_inner">{CategoryType}</p>
                <p >{ProductMainInfo.product_name}</p>
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
                    <p className="ProductTitle">{ProductMainInfo.product_name}</p>
                    <div className="Buyproduct">
                        <div className='ProductRatingDetails'>
                            <p className="ProductPrice">{ProductMainInfo.price} ₴</p>
                            <span className={'rating_name'}>Рейтинг :  </span>
                            <StarRatings
                                rating={ProductMainInfo.rating}
                                starRatedColor="orange"
                                numberOfStars={5}
                                starDimension="17px"
                                starSpacing="3px"
                                starEmptyColor="gray"
                                name='rating'
                            />
                            <span className={'rating_digit'}> {ProductMainInfo.rating} </span>

                        </div>

                        <div className="ProductBuyButtons">
                            <div onClick={() => addToCart()} className="BuyButtonBasket"><img className="ProducttextbasketImage" src="img/371979-ffffff.png"></img> <p className="Producttextbasket">  Додати в корзину</p> </div>

                        </div>
                    </div>

                    <div className="ProductComunication">
                        <div className="ProductComunicationFirstRow">
                            <div className="FirstELement"> <img className="ComunicationIcon" src="img/HavingInMarket.png"></img> У наявності</div>
                            <div><img className="ComunicationIcon" src="img/AboutUsDelivery.png"></img> Доставка: Нова пошта</div>


                        </div>
                        <div className="ProductComunicationSecondRow">
                            <div className="FirstELement NumberPhone" > <img className="ComunicationIcon" src="img/AboutUs24hour.png"></img> +380976890956</div>
                            <div> <img className="ComunicationIcon EmailIcon" src="img/email.png"></img> InternetShop@gmail.com</div>
                        </div>
                        <div className="ProductComunicationSecondRow">
                            <div><img className="ComunicationIcon" src="img/guarantee.png"></img> Гарантія (в місяцях) : {ProductDetails.length > 0 ? ProductDetails[0].warranty_period : null} </div>
                        </div>

                    </div>
                    <div> <FeatureProduct type={ProductMainInfo.productable_type} ProductDetails={ProductDetails.length > 0 ? ProductDetails[0] : null}></FeatureProduct></div>


                </div>

            </div>

        </div>

    )
}
export default ProductDetails

