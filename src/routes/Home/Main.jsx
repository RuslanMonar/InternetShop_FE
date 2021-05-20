import React from 'react';

import ProductItem from '../Products/ProductItem'
import Slider from 'react-slick';
import classes from '../../css/MainPage.css';
import { Link } from 'react-router-dom';
import api from './../../modules/Auth/ApiAxios';



function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "block", color: 'White',
        position: 'absolute',
        top: '50%',
        left: '50px',
        zIndex: '1',
        width: '30px',




      }}

      onClick={onClick}
    >  <img className="imageLeftSwipe" src="https://image.flaticon.com/icons/png/512/51/51577.png"></img> </div>
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "block", color: 'White',

        zIndex: '1',
        width: '30px',
        top: '50%',
        right: '50px',
        position: 'absolute'





      }}

      onClick={onClick}
    >  <img className="imagerightSwipe" src="https://image.flaticon.com/icons/png/512/51/51577.png"></img> </div>
  );
}
const MainPage = () => {

  const [PopularProducts, setPopularProducts] = React.useState([]);


  const GetPopularProducts = () => {
    api().post("/api/popular-products").then(result => {
      setPopularProducts(result.data.products);
    })
  }



  React.useEffect(() => {
    GetPopularProducts();
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <div className="SliderTypeProductcontainer">
        <Slider className="Slider"
          infinite={true}
          arrows={true}
          lazyLoad={true}
          dots={true}
          prevArrow={<SamplePrevArrow></SamplePrevArrow>}
          nextArrow={<SampleNextArrow></SampleNextArrow>}



          appendDots={

            dots => (

              <div>
                <ul style={{
                  marginLeft: "43%",
                  display: 'flex',
                }}> {dots} </ul>
              </div>
            )
          }
          customPaging={function (i) {

            return (

              <div
                style={{
                  width: "10px",
                  background: 'black',
                  borderRadius: '50%',
                  height: '10px'

                }}
              >
              </div>
            )
          }}
          fade={true}
          speed={0}>
          <div className="TypeOfProduct">

            <img src="https://cdn.comfy.ua/media/x/brending-bannera/1160x520_Apple_ua_1.jpg"></img>
          </div>
          <div className="TypeOfProduct" >


            <img src="https://cdn.comfy.ua/media/x/brending-bannera/1160x520_ua_7.jpg"></img>
          </div>

          <div className="TypeOfProduct">

            <img src="https://cdn.comfy.ua/media/x/brending-bannera/1160x520_huawei_ua.jpg"></img></div>


        </Slider>

      </div>
      <div className={'categoryTitle'}>Категорії</div>
      <div className={'MainCategories'}>
        <div className={'CategoryItem'}>
          <Link to={{ pathname: '/products', state: { type: 'Phone' } }}>
            <div>
              <img src="https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/2/3/234234234_4_2_1.jpg" alt="" />
            </div>
            <span>Телефони</span>
          </Link>
        </div>
        <div className={'CategoryItem'}>
          <Link to={{ pathname: '/products', state: { type: 'Tablet' } }}>
            <div>
              <img src="https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/f/i/file_1711_7.jpg" alt="" />
            </div>
            <span>Планшети</span>
          </Link>
        </div>
        <div className={'CategoryItem'}>
          <Link to={{ pathname: '/products', state: { type: 'Laptop' } }}>
            <div>
              <img src="https://i.allo.ua/media/catalog/product/cache/3/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwru_macbook-air_q121_spacegray_pdp-image-1_1.jpg" alt="" />
            </div>
            <span>Планшети</span>
          </Link>
        </div>
      </div>
      <div className={'categoryTitle'}>Популярні продукти</div>
      <div className={'PopularProducts'}>
        {PopularProducts ? (PopularProducts.map(item => <ProductItem key={item.id} {...item} />)) : (null)}
      </div>
    </div>
  )
}

export default MainPage
