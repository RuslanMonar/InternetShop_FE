import React from 'react';
import '../../css/productsGrid.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";



const Grid = () => {
    return (
        <div className={'GridContainer'}>
            <div className={'filterForDbContainer'}>
            </div>

            <div className={'productsContainer'}>
                <div className={'productItem'}>
                    <div className={'productItemImg'} >
                        <img src="https://i.allo.ua/media/catalog/product/cache/1/image/425x295/602f0fa2c1f0d1ba5e241f914e856ff9/u/0/u0371709_big_3.jpg" />
                    </div>
                    <div className={'productItemInfo'}>
                        <span>Aple MacBook Pro  A23</span>
                        <div className={'buyBox'}>
                            <span>51 550 ₴</span>
                            <div className={'shoppingCartIcon'}>
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" color="white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'productItem'}>
                    <div className={'productItemImg'}>
                        <img src="https://i.allo.ua/media/catalog/product/cache/3/image/425x295/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_11_pro_max_g_2_2_1.jpg" />
                    </div>
                    <div className={'productItemInfo'}>
                        <span>Aple MacBook Pro  A23</span>
                        <div className={'buyBox'}>
                            <span>51 550 ₴</span>
                            <div className={'shoppingCartIcon'}>
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" color="white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'productItem'}>
                    <div className={'productItemImg'}>
                        <img src="https://i.allo.ua/media/catalog/product/cache/1/image/468x468/602f0fa2c1f0d1ba5e241f914e856ff9/4/2/42-alu-space-sport-black-nc-gallery2_geo_ru_1_1.jpg" />
                    </div>
                    <div className={'productItemInfo'}>
                        <span>Aple MacBook Pro  A23</span>
                        <div className={'buyBox'}>
                            <span>51 550 ₴</span>
                            <div className={'shoppingCartIcon'}>
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" color="white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'productItem'}>
                    <div className={'productItemImg'} >
                        <img src="https://i.citrus.ua/imgcache/size_500/uploads/shop/8/0/804f6ec8af05a3124d3d5f74bbb015e0.jpg" />
                    </div>
                    <div className={'productItemInfo'}>
                        <span>Aple MacBook Pro  A23</span>
                        <div className={'buyBox'}>
                            <span>51 550 ₴</span>
                            <div className={'shoppingCartIcon'}>
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" color="white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'productItem'}>
                    <div className={'productItemImg'}>
                        <img src="https://pcshop.ua/image/cache/catalog/tovar/1164420-1024x768.jpg" />
                    </div>
                    <div className={'productItemInfo'}>
                        <span>Aple MacBook Pro  A23</span>
                        <div className={'buyBox'}>
                            <span>51 550 ₴</span>
                            <div className={'shoppingCartIcon'}>
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" color="white" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'productItem'}>
                    <div className={'productItemImg'}>
                        <img src="https://hotline.ua/img/tx/211/2113157695.jpg" />
                    </div>
                    <div className={'productItemInfo'}>
                        <span>Aple MacBook Pro  A23</span>
                        <div className={'buyBox'}>
                            <span>51 550 ₴</span>
                            <div className={'shoppingCartIcon'}>
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" color="white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grid