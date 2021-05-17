

import React, { useEffect, useState } from 'react';
import '../../../src/css/productDetails.css';
import FeaturePhone from './ProductFeaturePhone';
import FeatureLaptop from './ProductFeatureLaptop';
import FeatureTablet from './ProductFeatureTablet';



const FeatureProduct = ( {type , ProductDetails} ) => {
    if (type === 'Phone' && ProductDetails) {
        return (
            <FeaturePhone ProductDetails={ProductDetails}></FeaturePhone>
        )
    }
    if (type === 'Laptop' && ProductDetails) {
        return (

            <FeatureLaptop ProductDetails={ProductDetails}></FeatureLaptop>)
    }
    if (type === 'Tablet' && ProductDetails) {
        return (
            <FeatureTablet ProductDetails={ProductDetails}></FeatureTablet>)
    }
    else{

        return (
            <div></div>
        )
    }
}

export default FeatureProduct