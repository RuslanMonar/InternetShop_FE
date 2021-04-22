import React from 'react';
import '../../css/productsGrid.css'

const PhonesFilter = ({ insertParam, filterByParams }) => {
    return (
        <div className={'FilterCheckbox'}>

            <div className={'CurrentCheckbox'}>
                <span>Виробник</span>
                <label> <input onChange={() => insertParam('manufacturer', 'Apple')} type="checkbox" />Apple</label>
                <label> <input onChange={() => insertParam('manufacturer', 'Xiaomi')} type="checkbox" />Xiaomi</label>
                <label> <input onChange={() => insertParam('manufacturer', 'Samsung')} type="checkbox" />Samsung</label>
                <label> <input onChange={() => insertParam('manufacturer', 'LG')} type="checkbox" />LG</label>
                <label> <input onChange={() => insertParam('manufacturer', 'Huawei')} type="checkbox" />Huawei</label>
                <label> <input onChange={() => insertParam('manufacturer', 'Lenovo')} type="checkbox" />Lenovo</label>
                <label> <input onChange={() => insertParam('manufacturer', 'Google')} type="checkbox" />Google</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Тип екрану</span>
                <label> <input onChange={() => insertParam('screen_type', 'OLED')} type="checkbox" />OLED</label>
                <label> <input onChange={() => insertParam('screen_type', 'AMOLED')} type="checkbox" />AMOLED</label>
                <label> <input onChange={() => insertParam('screen_type', 'Super AMOLED')} type="checkbox" />Super AMOLED</label>
                <label> <input onChange={() => insertParam('screen_type', 'IPS')} type="checkbox" />IPS</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Діагональ екрану</span>
                <label> <input onChange={() => insertParam('screen_diagonal', [1, 3.9],'Interval')} type="checkbox" />До 4"</label>
                <label> <input onChange={() => insertParam('screen_diagonal', [4, 5.9],'Interval')} type="checkbox" />4" - 4.9"</label>
                <label> <input onChange={() => insertParam('screen_diagonal', [6, 6.4],'Interval')} type="checkbox" />6" - 6.5"</label>
                <label> <input onChange={() => insertParam('screen_diagonal', [6.5, 6.9],'Interval')} type="checkbox" />6.5" - 6.9"</label>
                <label> <input onChange={() => insertParam('screen_diagonal', [7, 100],'Interval')} type="checkbox" />7" і більше</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Оперативна пам'ять</span>
                <label> <input onChange={() => insertParam('ram', 2)} type="checkbox" />2 Гб</label>
                <label> <input onChange={() => insertParam('ram', 3)} type="checkbox" />3 Гб</label>
                <label> <input onChange={() => insertParam('ram', 4)} type="checkbox" />4 Гб</label>
                <label> <input onChange={() => insertParam('ram', 6)} type="checkbox" />6 Гб</label>
                <label> <input onChange={() => insertParam('ram', [8, 50] , 'Interval')} type="checkbox" />8 Гб і быльше</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Внутрішня Пам'ять</span>
                <label> <input onChange={() => insertParam('inner_memory', 8)} type="checkbox" />8 Гб</label>
                <label> <input onChange={() => insertParam('inner_memory', 16)} type="checkbox" />16 Гб</label>
                <label> <input onChange={() => insertParam('inner_memory', 32)} type="checkbox" />32 Гб</label>
                <label> <input onChange={() => insertParam('inner_memory', 64)} type="checkbox" />64 Гб</label>
                <label> <input onChange={() => insertParam('inner_memory', 128)} type="checkbox" />128 Гб</label>
                <label> <input onChange={() => insertParam('inner_memory', 256)} type="checkbox" />256 Гб</label>
                <label> <input onChange={() => insertParam('inner_memory', 512)} type="checkbox" />512 Гб</label>
            </div>



            <div className={'CurrentCheckbox'}>
                <span>Частота обновлення екрану</span>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 60)} type="checkbox" />60 Гц</label>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 90)} type="checkbox" />90 Гц</label>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 120)} type="checkbox" />120 Гц</label>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 144)} type="checkbox" />144 Гц</label>
            </div>



            {/* <div className={'CurrentCheckbox'}>
                <span>Передня камера</span>
                <label> <input onChange={() => insertParam('back_camera', [1,6])} type="checkbox" />6 Мп і менше</label>
                <label> <input onChange={() => insertParam('back_camera', [8,12])} type="checkbox" />8 - 11 Мп</label>
                <label> <input onChange={() => insertParam('back_camera', [12,15])} type="checkbox" />12 - 15 Мп</label>
                <label> <input onChange={() => insertParam('back_camera', [16,20])} type="checkbox" />16 - 20 Мп</label>
                <label> <input onChange={() => insertParam('back_camera', [21,40])} type="checkbox" />21 - 40 Мп </label>
                <label> <input onChange={() => insertParam('back_camera', [41,70])} type="checkbox" />41 - 70 Мп </label>
                <label> <input onChange={() => insertParam('back_camera', [71,100])} type="checkbox" />71 - 100 Мп </label>
                <label> <input onChange={() => insertParam('back_camera', [100,150])} type="checkbox" />100 - 150 Мп </label>
            </div> */}

            <div className={'CurrentCheckbox'}>
                <span>Передня камера</span>
                <label> <input onChange={() => insertParam('back_camera', [1, 6],'Interval')} type="checkbox" />6 Мп і менше</label>
                <label> <input onChange={() => insertParam('back_camera', [8, 12],'Interval')} type="checkbox" />8 - 11 Мп</label>
                <label> <input onChange={() => insertParam('back_camera', [12, 15],'Interval')} type="checkbox" />12 - 15 Мп</label>
                <label> <input onChange={() => insertParam('back_camera', [16, 20],'Interval')} type="checkbox" />16 - 20 Мп</label>
                <label> <input onChange={() => insertParam('back_camera', [21, 40],'Interval')} type="checkbox" />21 - 40 Мп </label>
                <label> <input onChange={() => insertParam('back_camera', [41, 70],'Interval')} type="checkbox" />41 - 70 Мп </label>
                <label> <input onChange={() => insertParam('back_camera', [71, 100],'Interval')} type="checkbox" />71 - 100 Мп </label>
                <label> <input onChange={() => insertParam('back_camera', [100, 150],'Interval')} type="checkbox" />100 - 150 Мп </label>
            </div>


            <div className={'CurrentCheckbox'}>
                <span>Ємність аккумулятура</span>
                <label> <input onChange={() => insertParam('battery_capacity', [100, 1999],'Interval')} type="checkbox" />До 2000 мА·год</label>
                <label> <input onChange={() => insertParam('battery_capacity', [2000, 2999],'Interval')} type="checkbox" />2000 - 2999 мА·год</label>
                <label> <input onChange={() => insertParam('battery_capacity', [3000, 3999],'Interval')} type="checkbox" />3000 - 3999 мА·год</label>
                <label> <input onChange={() => insertParam('battery_capacity', [4000, 15000],'Interval')} type="checkbox" />4000 мА·год і більше</label>
            </div>



            <div className={'CurrentCheckbox'}>
                <span>Технології</span>
                <label> <input onChange={() => insertParam('face_scaner', 1)} type="checkbox" />Сканер лиця</label>
                <label> <input onChange={() => insertParam('finger_scaner', 1)} type="checkbox" />Сканер пальця</label>
                <label> <input onChange={() => insertParam('operating_system', 'Android')} type="checkbox" />Android</label>
                <label> <input onChange={() => insertParam('operating_system', 'IOS')} type="checkbox" />IOS</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Матеріал корпуса</span>
                <label> <input onChange={() => insertParam('body_material', 'Нержавіючий метал')} type="checkbox" />Нержавіючий метал</label>
                <label> <input onChange={() => insertParam('body_material', 'Метал')} type="checkbox" />Метал</label>
                <label> <input onChange={() => insertParam('body_material', 'Пластик')} type="checkbox" />Пластик</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Колір</span>
                <label> <input onChange={() => insertParam('color', 'Чорний')} type="checkbox" />Чорний</label>
                <label> <input onChange={() => insertParam('color', 'Голубий')} type="checkbox" />Голубий</label>
                <label> <input onChange={() => insertParam('color', 'Червоний')} type="checkbox" />Червоний</label>
                <label> <input onChange={() => insertParam('color', 'Зелений')} type="checkbox" />Зелений</label>
                <label> <input onChange={() => insertParam('color', 'Фіолетовий')} type="checkbox" />Фіолетовий</label>
                <label> <input onChange={() => insertParam('color', 'Жовтий')} type="checkbox" />Жовтий</label>
                <label> <input onChange={() => insertParam('color', 'Білий')} type="checkbox" />Білий</label>
                <label> <input onChange={() => insertParam('color', 'Оранжевий')} type="checkbox" />Оранжевий</label>
                <label> <input onChange={() => insertParam('color', 'Синій')} type="checkbox" />Синій</label>
                <label> <input onChange={() => insertParam('color', 'Рожевий')} type="checkbox" />Рожевий</label>
            </div>


            <button className={'FilterSubmit'} onClick={() => filterByParams('Phone')}>Прийняти зміни</button>

        </div>
    )
}

export default PhonesFilter;