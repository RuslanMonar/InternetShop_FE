import React from 'react';
import Header from './../../modules/Navigation/Header';
import '../../css/productsGrid.css'

const Grid = () => {
    return (
        <div className={'GridContainer'}>
            <div className={'filterContainer'}>

            </div>
            <div className={'productsContainer'}>
                <div className={'productItem'}>
                    <img src="https://hotline.ua/img/tx/182/1821098365.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Grid