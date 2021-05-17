

import React, { useEffect, useState } from 'react';
import classes from '../../../src/css/CardItem.css';
import FeaturePhone from '../DetailsProduct/ProductFeaturePhone';
import FeatureLaptop from '../DetailsProduct/ProductFeatureLaptop';
import FeatureTablet from '../DetailsProduct/ProductFeatureTablet';

import api from '../../modules/Auth/ApiAxios'


const FeatureProduct= ({id,type}) => {
    let typeProduct;
    if(type==='phone'){
        return ( 
            <FeaturePhone></FeaturePhone>
    )}
    if(type==='laptop'){
            return(
            
            <FeatureLaptop></FeatureLaptop>)
        }
    if(type==='tablet'){
            return(
            <FeatureTablet></FeatureTablet>)
        }
    }
    
export default FeatureProduct