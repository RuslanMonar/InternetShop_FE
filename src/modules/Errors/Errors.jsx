
import React from 'react';
import '../../css/errors/error.css'
import { history } from './../../index';


export const NetworkError = () => {
    return (
        <div className={'errorPage'}>
            <h1>NetworkError</h1>
            <h2>Можливо сервер не запущений <b>:(</b></h2>
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


export const Error_502 = () => {
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

export const Error_500 = () => {
    return (
        <div className={'errorPage'}>
            <h1>500</h1>
            <h2>Внутрішня помилка сервера <b>:(</b></h2>
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

export const Error_404 = () => {
    return (
        <div className={'errorPage'}>
            <h1>400 / 404</h1>
            <h2>Сторінку не найдено <b>:(</b></h2>
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

export const Error_401 = () => {
    return (
        <div className={'errorPage'}>
            <h1>401</h1>
            <h2>Не ідентифікований користувач <b>:(</b></h2>
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