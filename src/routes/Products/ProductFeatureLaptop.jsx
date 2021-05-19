import React, { useEffect, useState } from 'react';
import '../../../src/css/productDetails.css';
import api from '../../modules/Auth/ApiAxios'


const FeatureLaptop = ({ProductDetails}) => {
    
    return ( <div className="DetailsItem">
    <p className="DetailsTitle">Details</p>
    <div className={'AttributesType'}>Екран</div>
    <div className="DetailsPart">
        <div className="DetailParametr">Діагональ екрану</div> 
        <div className="DetailValue">{ProductDetails.screen_diagonal} </div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Розширення екрану</div> 
        <div className="DetailValue">{ProductDetails.screen_resolution} </div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Частота оновлення екрану</div> 
        <div className="DetailValue"> {ProductDetails.screen_refresh_frequency}</div>
    </div>
    <div className="DetailsPart">
        <p className="DetailParametr">Тип матриці</p> 
        <p className="DetailValue">{ProductDetails.screen_type}</p>
    </div>
    <div className="DetailsPart">
        <p className="DetailParametr">Тип екрану</p> 
        <p className="DetailValue">{ProductDetails.display}</p>
    </div>
    <div className={'AttributesType'}>Процесор</div>
    <div className="DetailsPart">
        <div className="DetailParametr">Процесор</div> 
        <div className="DetailValue">{ProductDetails.cpu}</div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Кількість ядер</div> 
        <div className="DetailValue"> {ProductDetails.number_of_cores}</div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Частота процесора</div> 
        <div className="DetailValue">{ProductDetails.cpu_frequency} </div>
    </div>
    <div className={'AttributesType'}>Пам'ять</div>
    <div className="DetailsPart">
        <div className="DetailParametr">Внутрішня пам'ять</div> 
        <div className="DetailValue"> {ProductDetails.inner_memory}</div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Тип внутрішньої пам'яті</div> 
        <div className="DetailValue">{ProductDetails.inner_memory_type} </div>
    </div>
    <div className="DetailsPart">
        <p className="DetailParametr">Оперативна пам'ять</p> 
        <p className="DetailValue">{ProductDetails.ram}</p>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Тип оперативної пам'яті</div> 
        <div className="DetailValue"> {ProductDetails.ram_type}</div>
    </div>
    <div className={'AttributesType'}>Відеокарта</div>

    <div className="DetailsPart">
        <div className="DetailParametr">Відеокарта</div> 
        <div className="DetailValue"> {ProductDetails.video_card}</div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Пам'ять відеокарти</div> 
        <div className="DetailValue">{ProductDetails.video_card_memory} </div>
    </div>
    <div className={'AttributesType'}>Операційна система</div>
    
    <div className="DetailsPart">
        <div className="DetailParametr">Операційна система</div> 
        <div className="DetailValue">{ProductDetails.os} </div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Розкладка клавіатури</div> 
        <div className="DetailValue"> {ProductDetails.keyboard_language}</div>
    </div>
    <div className={'AttributesType'}>Інше</div>

   <div className="DetailsPart">
        <div className="DetailParametr">Дисковорд</div> 
        <div className="DetailValue">{ProductDetails.drive ? 'Є':'Немає'} </div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Матеріал корпусу</div> 
        <div className="DetailValue">{ProductDetails.body_material}</div>
    </div>
    
    <div className="DetailsPart">
        <div className="DetailParametr">Колір</div> 
        <div className="DetailValue"> {ProductDetails.color}</div>
    </div>
    <div className="DetailsPart">
        <p className="DetailParametr">Країна виробник</p> 
        <p className="DetailValue">{ProductDetails.producing_country}</p>
    </div>
    <div className="DetailsPart">
        <p className="DetailParametr">Гарантія</p> 
        <p className="DetailValue">{ProductDetails.warranty_period}</p>
    </div>
    <div className="DetailsPart">
        <p className="DetailParametr">Вага</p> 
        <p className="DetailValue">{ProductDetails.weight}</p>
    </div>
    
    
</div>
    )
}
export default FeatureLaptop