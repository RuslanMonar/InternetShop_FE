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
                <label> <input onChange={() => insertParam('screen_type', 'IPS')} type="checkbox" />IPS</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Оперативна пам'ять</span>
                <label> <input onChange={() => insertParam('ram', 4)} type="checkbox" />4 Гб</label>
                <label> <input onChange={() => insertParam('ram', 6)} type="checkbox" />6 Гб</label>
                <label> <input onChange={() => insertParam('ram', 8)} type="checkbox" />8 Гб</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Внутрішня Пам'ять</span>
                <label> <input onChange={() => insertParam('inner_memory', 256)} type="checkbox" />256 Гб</label>
                <label> <input onChange={() => insertParam('inner_memory', 64)} type="checkbox" />64 Гб</label>
                <label> <input onChange={() => insertParam('inner_memory', 32)} type="checkbox" />32 Гб</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Частота обновлення екрану</span>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 60)} type="checkbox" />60 Гц</label>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 90)} type="checkbox" />90 Гц</label>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 120)} type="checkbox" />120 Гц</label>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 144)} type="checkbox" />144 Гц</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Частота обновлення екрану</span>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 60)} type="checkbox" />60 Гц</label>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 90)} type="checkbox" />90 Гц</label>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 120)} type="checkbox" />120 Гц</label>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 144)} type="checkbox" />144 Гц</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Фронтальна камера</span>
                <label> <input onChange={() => insertParam('front_camera', [1,6])} type="checkbox" />До 6 Мп</label>
                <label> <input onChange={() => insertParam('front_camera', [7,8])} type="checkbox" />7 - 8 Мп</label>
                <label> <input onChange={() => insertParam('front_camera', [9,11])} type="checkbox" />9 - 11 Мп</label>
                <label> <input onChange={() => insertParam('front_camera', [12,16])} type="checkbox" />12 - 16 Мп</label>
                <label> <input onChange={() => insertParam('front_camera', [17,20])} type="checkbox" />17 - 20 Мп</label>
                <label> <input onChange={() => insertParam('front_camera', [21,50])} type="checkbox" />Більше 20 Мп</label>
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