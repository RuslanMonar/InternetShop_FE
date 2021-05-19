import React from 'react';
import Footer from '../../modules/Navigation/Footer';
import Header from '../../modules/Navigation/Header';
import Grid from './Grid';
import ProductDetails from './ProductDetails';

const CurrentProduct = (props) => {
   
    return (

        <div>
            <Header />
            <ProductDetails props={props}/>
            <Footer  />
        </div>
    )
}

export default CurrentProduct