import React from 'react';
import '../../css/productsGrid.css'

const Grid = () => {
    return (
        <div className={'GridContainer'}>
            <div className={'filterContainer'}>

            </div>
            <div className={'productsContainer'}>
                <div className={'productItem'}>
                    <img src="https://hotline.ua/img/tx/182/1821098365.jpg" />
                    <div className={'productItemInfo'}>
                        <span>Aple MacBook Pro  A23</span>
                        <span>51550 грн</span>
                    </div>
                </div>
                <div className={'productItem'}>
                    <img src="https://main-cdn.goods.ru/big1/hlr-system/97/10/35/90/62/3/100023876021b0.jpg" />
                    <div className={'productItemInfo'}>
                        <span>Aple MacBook Pro  A23</span>
                        <span>51550 грн</span>
                    </div>
                </div>
                <div className={'productItem'}>
                    <img src="https://images.samsung.com/is/image/samsung/p5/ru/smartphones/galaxy-s20/buy/s20fe/S20-FE_Navy_SKUimage_MO-img.jpg" />
                    <div className={'productItemInfo'}>
                        <span>Aple MacBook Pro  A23</span>
                        <span>51550 грн</span>
                    </div>
                </div>
                <div className={'productItem'}>
                    <img src="https://i.citrus.ua/imgcache/size_500/uploads/shop/8/0/804f6ec8af05a3124d3d5f74bbb015e0.jpg" />
                    <div className={'productItemInfo'}>
                        <span>Aple MacBook Pro  A23</span>
                        <span>51550 грн</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid