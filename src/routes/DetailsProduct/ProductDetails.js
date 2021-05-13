import React, { useEffect,useState } from 'react';
import classes from '../../../src/css/CardItem.css';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";


function Detaills(props) {
    return(  <div className="DetailsItem">
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

const CardItem = ({id}) => {
    const [card, setCard] = useState({});
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const loadItem= () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
                .then(({name,price,front_image}) =>
                    setCard({
                        id:id,
                        name:name,
                        price:price,
                        front_image:front_image

                    })
            
                );
              
    }
    

    useEffect(() => {
     loadItem()
    },[])
    
    var item={value1:'kiko',
        value2:'lol'}
   
    return (
       <div className="container">
        
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
        lazyLoad={true}
        fade={true}
        speed={0}
         ref={(slider1) => setNav1(slider1)}>
           <div className="Imageconteiner"> <img src="https://3dnews.ru/assets/external/illustrations/2018/11/26/978705/sm.intro.800.jpg"></img></div>
           <div className="Imageconteiner"> <img src="https://3dnews.ru/assets/external/illustrations/2021/01/12/1029889/0.jpg"></img></div>
           <div className="Imageconteiner"> <img src="https://3dnews.ru/assets/external/illustrations/2020/08/24/1018925/intro.jpg"></img></div>
           <div className="Imageconteiner"> <img src="https://3dnews.ru/assets/external/illustrations/2018/11/26/978705/sm.intro.800.jpg"></img></div>
           <div className="Imageconteiner"> <img src="https://3dnews.ru/assets/external/illustrations/2021/01/12/1029889/0.jpg"></img></div>
           <div className="Imageconteiner"> <img src="https://3dnews.ru/assets/external/illustrations/2020/08/24/1018925/intro.jpg"></img></div>
         
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
            <div className="LowerImageConteiner"> <img src="https://3dnews.ru/assets/external/illustrations/2018/11/26/978705/sm.intro.800.jpg"></img></div>
           <div className="LowerImageConteiner"> <img src="https://3dnews.ru/assets/external/illustrations/2021/01/12/1029889/0.jpg"></img></div>
           <div className="LowerImageConteiner"> <img src="https://3dnews.ru/assets/external/illustrations/2020/08/24/1018925/intro.jpg"></img></div>
           <div className="LowerImageConteiner"> <img src="https://3dnews.ru/assets/external/illustrations/2018/11/26/978705/sm.intro.800.jpg"></img></div>
           <div className="LowerImageConteiner"> <img src="https://3dnews.ru/assets/external/illustrations/2021/01/12/1029889/0.jpg"></img></div>
           <div className="LowerImageConteiner"> <img src="https://3dnews.ru/assets/external/illustrations/2020/08/24/1018925/intro.jpg"></img></div>
           
        </Slider>
        
            <p className="TextAboutItem">Працюйте, вчіться або грайте день у день з потужним і тонким ноутбуком Redmibook 14". У нього є все необхідне, щоб стати вашим незамінним помічником. Завдяки продуктивній начинці цей портативний лептоп легко справляється з будь-якими повсякденними завданнями, а яскравий 14-дюймовий екран з роздільною здатністю Full HD і стереодинаміки з підтримкою DTS просто створені для мультимедійних розваг. І все це упаковано у витончений металевий корпус, який виглядає дуже стильно.</p>
                
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
export default CardItem