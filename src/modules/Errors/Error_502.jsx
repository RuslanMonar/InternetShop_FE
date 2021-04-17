
import React from 'react';
import '../../css/errors/error.css'
import { history } from './../../index';
const Error_502 = () => {
    return (
        <div className={'errorPage'}>
            <h1>502</h1>
            <h2>Помилка шлюза.Провірте підключення до інтернету <b>:(</b></h2>
            <div className={"gears"}>
                <div className={"gear one"}>
                    <div className={"bar"}></div>
                    <div className={"bar"}></div>
                    <div className={"bar"}></div>
                </div>
                <div className={"gear two"}>
                    <div className={"bar"}></div>
                    <div className={"bar"}></div>
                    <div className={"bar"}></div>
                </div>
                <div className={"gear three"}>
                    <div className={"bar"}></div>
                    <div className={"bar"}></div>
                    <div className={"bar"}></div>
                </div>
                <button className={'GoHome'} onClick={() => history.push('/')}>Вернутися на головну сторінку</button>
            </div>

        </div>
    )
}

export default Error_502;