import React from 'react';
import '../../css/productsGrid.css'

const LaptopFilter = ({ insertParam, filterByParams }) => {
    return (
        <div className={'FilterCheckbox'}>

            <div className={'CurrentCheckbox'}>
                <span>Виробник</span>
                <label> <input onChange={() => insertParam('manufacturer', 'Apple')} type="checkbox" />Apple</label>
                <label> <input onChange={() => insertParam('manufacturer', 'Xiaomi')} type="checkbox" />Xiaomi</label>
                <label> <input onChange={() => insertParam('manufacturer', 'Dell')} type="checkbox" />Dell</label>
                <label> <input onChange={() => insertParam('manufacturer', 'HP')} type="checkbox" />HP</label>
                <label> <input onChange={() => insertParam('manufacturer', 'Asus')} type="checkbox" />Asus</label>
                <label> <input onChange={() => insertParam('manufacturer', 'Lenovo')} type="checkbox" />Lenovo</label>
                <label> <input onChange={() => insertParam('manufacturer', 'Acer')} type="checkbox" />Acer</label>
            </div>



            <div className={'CurrentCheckbox'}>
                <span>Дисплей</span>
                <label> <input onChange={() => insertParam('display', 'Глянцевий екран')} type="checkbox" />Глянцевий екран</label>
                <label> <input onChange={() => insertParam('display', 'Матовий екран')} type="checkbox" />Матовий екран</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Тип матриці</span>
                <label> <input onChange={() => insertParam('screen_type', 'OLED')} type="checkbox" />OLED</label>
                <label> <input onChange={() => insertParam('screen_type', 'AMOLED')} type="checkbox" />AMOLED</label>
                <label> <input onChange={() => insertParam('screen_type', 'Super AMOLED')} type="checkbox" />Super AMOLED</label>
                <label> <input onChange={() => insertParam('screen_type', 'IPS')} type="checkbox" />IPS</label>
                <label> <input onChange={() => insertParam('screen_type', 'Retina')} type="checkbox" />Retina</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Діагональ екрану</span>
                <label> <input onChange={() => insertParam('screen_diagonal', [10, 12.9],'Interval')} type="checkbox" />10-12"</label>
                <label> <input onChange={() => insertParam('screen_diagonal', [13.1, 13.9],'Interval')} type="checkbox" />13"</label>
                <label> <input onChange={() => insertParam('screen_diagonal', [14, 14.9],'Interval')} type="checkbox" />14"</label>
                <label> <input onChange={() => insertParam('screen_diagonal', [15, 15.9],'Interval')} type="checkbox" />15"</label>
                <label> <input onChange={() => insertParam('screen_diagonal', [16, 16.9],'Interval')} type="checkbox" />16" </label>
                <label> <input onChange={() => insertParam('screen_diagonal', [17, 17.9],'Interval')} type="checkbox" />17"</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Частота обновлення екрану</span>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 60)} type="checkbox" />60 Гц</label>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 90)} type="checkbox" />90 Гц</label>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 120)} type="checkbox" />120 Гц</label>
                <label> <input onChange={() => insertParam('screen_refresh_frequency', 144)} type="checkbox" />144 Гц</label>
            </div>


            <div className={'CurrentCheckbox'}>
                <span>Відеокарта</span>
                <label> <input onChange={() => insertParam('video_card', 'NVIDIA' , 'likeSearch')} type="checkbox" />NVIDIA GeForce</label>
                <label> <input onChange={() => insertParam('video_card', 'AMD Radeon', 'likeSearch')} type="checkbox" />AMD Radeon</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Процесор</span>
                <label> <input onChange={() => insertParam('cpu', 'Apple' , 'likeSearch')} type="checkbox" />Apple</label>
                <label> <input onChange={() => insertParam('cpu', 'Intel Core i3' , 'likeSearch')} type="checkbox" />Intel Core i3 </label>
                <label> <input onChange={() => insertParam('cpu', 'Intel Core i5' , 'likeSearch')} type="checkbox" />Intel Core i5 </label>
                <label> <input onChange={() => insertParam('cpu', 'Intel Core i7', 'likeSearch')} type="checkbox" />Intel Core i7</label>
                <label> <input onChange={() => insertParam('cpu', 'Intel Pentium' , 'likeSearch')} type="checkbox" />Intel Pentium</label>
                <label> <input onChange={() => insertParam('cpu', 'AMD Ryzen 3' , 'likeSearch')} type="checkbox" />AMD Ryzen 3 </label>
                <label> <input onChange={() => insertParam('cpu', 'AMD Ryzen 5' , 'likeSearch')} type="checkbox" />AMD Ryzen 5 </label>
                <label> <input onChange={() => insertParam('cpu', 'AMD Ryzen 7' , 'likeSearch')} type="checkbox" />AMD Ryzen 7 </label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Кількість ядер</span>
                <label> <input onChange={() => insertParam('number_of_cores', 2, )} type="checkbox" />2 ядра</label>
                <label> <input onChange={() => insertParam('number_of_cores', 4, )} type="checkbox" />4 ядра</label>
                <label> <input onChange={() => insertParam('number_of_cores', 6, )} type="checkbox" />6 ядер</label>
                <label> <input onChange={() => insertParam('number_of_cores', 8, )} type="checkbox" />8 ядер</label>
            </div>


            <div className={'CurrentCheckbox'}>
                <span>Оперативна пам'ять</span>
                <label> <input onChange={() => insertParam('ram', 2)} type="checkbox" />2 Гб</label>
                <label> <input onChange={() => insertParam('ram', 3)} type="checkbox" />3 Гб</label>
                <label> <input onChange={() => insertParam('ram', 4)} type="checkbox" />4 Гб</label>
                <label> <input onChange={() => insertParam('ram', 6)} type="checkbox" />6 Гб</label>
                <label> <input onChange={() => insertParam('ram', 8)} type="checkbox" />8 Гб</label>
                <label> <input onChange={() => insertParam('ram', 10)} type="checkbox" />10 Гб</label>
                <label> <input onChange={() => insertParam('ram', 12)} type="checkbox" />12 Гб</label>
                <label> <input onChange={() => insertParam('ram', 16)} type="checkbox" />16 Гб</label>
                <label> <input onChange={() => insertParam('ram', [24, 1000],'Interval')} type="checkbox" />14 Гб і быльше</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Тип накопичувача</span>
                <label> <input onChange={() => insertParam('inner_memory_type', 'HDD')} type="checkbox" />HDD</label>
                <label> <input onChange={() => insertParam('inner_memory_type', 'SSD')} type="checkbox" />SSD</label>
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Внутрішня Пам'ять</span>
                <label> <input onChange={() => insertParam('inner_memory', 120, )} type="checkbox" />120 Гб</label>
                <label> <input onChange={() => insertParam('inner_memory', 128, )} type="checkbox" />128 Гб</label>
                <label> <input onChange={() => insertParam('inner_memory', 256, )} type="checkbox" />256 Гб</label>
                <label> <input onChange={() => insertParam('inner_memory', 512, )} type="checkbox" />512 Гб</label>
                <label> <input onChange={() => insertParam('inner_memory', 1000, )} type="checkbox" />1 ТБ</label>
                <label> <input onChange={() => insertParam('inner_memory', 2000, )} type="checkbox" />2 ТБ</label>
            </div>


            <div className={'CurrentCheckbox'}>
                <span>Матеріал корпуса</span>
                <label> <input onChange={() => insertParam('body_material', 'Нержавіючий метал')} type="checkbox" />Нержавіючий метал</label>
                <label> <input onChange={() => insertParam('body_material', 'Метал')} type="checkbox" />Метал</label>
                <label> <input onChange={() => insertParam('body_material', 'Пластик')} type="checkbox" />Пластик</label>
                <label> <input onChange={() => insertParam('body_material', 'Алюміній')} type="checkbox" />Алюміній</label>
                <label> <input onChange={() => insertParam('body_material', 'Пластик + метал')} type="checkbox" />Пластик + метал</label>
                
            </div>

            <div className={'CurrentCheckbox'}>
                <span>Колір</span>
                <label> <input onChange={() => insertParam('color', 'Чорний')} type="checkbox" />Чорний</label>
                <label> <input onChange={() => insertParam('color', 'Срібний')} type="checkbox" />Срібний</label>
                <label> <input onChange={() => insertParam('color', 'Білий')} type="checkbox" />Білий</label>
                <label> <input onChange={() => insertParam('color', 'Червоно-чорний')} type="checkbox" />Червоно-чорний</label>
            </div>


            <button className={'FilterSubmit'} onClick={() => filterByParams('Laptop')}>Прийняти зміни</button>

        </div>
    )
}

export default LaptopFilter;