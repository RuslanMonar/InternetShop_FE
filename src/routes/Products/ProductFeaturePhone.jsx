import React, { useEffect, useState } from 'react';
import '../../../src/css/productDetails.css';


const FeaturePhone= ({ProductDetails}) => {

    return ( <div className="DetailsItem">
    <p className="DetailsTitle">Характеристики</p>
    <div className={'AttributesType'}>Зв'язок</div>
    <div className="DetailsPart">
        <div className="DetailParametr">Тип зв'язку</div> 
        <div className="DetailValue"> {ProductDetails.communication_standart}</div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Число Sim cart</div> 
        <div className="DetailValue"> {ProductDetails.number_of_sim}</div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Тип Sim cart</div> 
        <div className="DetailValue">  {ProductDetails.sim_type}</div>
    </div>
    <div className={'AttributesType'}>Екран</div>
    <div className="DetailsPart">
        <div className="DetailParametr">Діагональ екрану</div> 
        <div className="DetailValue">  {ProductDetails.screen_diagonal}</div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Розширення екрану</div> 
        <div className="DetailValue">  {ProductDetails.screen_resolution}</div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Частота оновлення екрану</div> 
        <div className="DetailValue">  {ProductDetails.screen_refresh_frequency}</div>
    </div>
    <div className="DetailsPart">
        <p className="DetailParametr">Тип матриці</p> 
        <p className="DetailValue"> {ProductDetails.screen_type}</p>
    </div>
    <div className={'AttributesType'}>Процесор</div>
    <div className="DetailsPart">
        <div className="DetailParametr">Процесор</div> 
        <div className="DetailValue">  {ProductDetails.cpu}</div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Кількість ядер</div> 
        <div className="DetailValue">  {ProductDetails.number_of_cores}</div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Частота процесора</div> 
        <div className="DetailValue">  {ProductDetails.cpu_frequency}</div>
    </div>
    <div className={'AttributesType'}>Пам'ять</div>
    <div className="DetailsPart">
        <div className="DetailParametr">Внутрішня пам'ять</div> 
        <div className="DetailValue">  {ProductDetails.inner_memory}</div>
    </div>
    <div className="DetailsPart">
        <p className="DetailParametr">Оперативна пам'ять</p> 
        <p className="DetailValue"> {ProductDetails.ram}</p>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Слоти під карту пам'яті</div> 
        <div className="DetailValue"> {ProductDetails.memory_card_slot ? 'Є':'Нема'}</div>
    </div>
    <div className={'AttributesType'}>Камера</div>
    <div className="DetailsPart">
        <div className="DetailParametr">Фронтальна камера</div> 
        <div className="DetailValue">  {ProductDetails.front_camera}</div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Основна камера</div> 
        <div className="DetailValue"> {ProductDetails.back_camera} </div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Розширення зйомки відео</div> 
        <div className="DetailValue">  {ProductDetails.camera_video_resoulion}</div>
    </div>
    <div className={'AttributesType'}>Операційна система</div>
    <div className="DetailsPart">
        <div className="DetailParametr">Операційна система</div> 
        <div className="DetailValue">  {ProductDetails.operating_system}</div>
    </div>
    <div className="DetailsPart">
        <p className="DetailParametr">Тип зарядки</p> 
        <p className="DetailValue"> {ProductDetails.charging_type}</p>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Матеріал корпусу</div> 
        <div className="DetailValue">  {ProductDetails.body_material}</div>
    </div>
    <div className={'AttributesType'}>Сканери</div>
    <div className="DetailsPart">
        <div className="DetailParametr">Сканер обличчя</div> 
        <div className="DetailValue">  {ProductDetails.face_scaner ? 'Є':'Нема'}</div>
    </div>
    <div className="DetailsPart">
        <div className="DetailParametr">Сканер відбитку</div> 
        <div className="DetailValue">  {ProductDetails.finger_scaner ? 'Є':'Нема'}</div>
    </div>
    <div className={'AttributesType'}>Батарея</div>
    <div className="DetailsPart">
        <div className="DetailParametr">Ємкість батареї</div> 
        <div className="DetailValue">  {ProductDetails.battery_capacity}</div>
    </div>
    <div className={'AttributesType'}>Додатково</div>
    <div className="DetailsPart">
        <div className="DetailParametr">Колір</div> 
        <div className="DetailValue">  {ProductDetails.color}</div>
    </div>
    <div className="DetailsPart">
        <p className="DetailParametr">Вага</p> 
        <p className="DetailValue"> {ProductDetails.weight}</p>
    </div>
    <div className="DetailsPart">
        <p className="DetailParametr">Країна виробник</p> 
        <p className="DetailValue"> {ProductDetails.producing_country}</p>
    </div>
    <div className="DetailsPart">
        <p className="DetailParametr">Гарантія</p> 
        <p className="DetailValue"> {ProductDetails.warranty_period}</p>
    </div>
</div>
    )
}
export default FeaturePhone