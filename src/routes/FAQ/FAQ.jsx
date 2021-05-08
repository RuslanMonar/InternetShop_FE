import React from 'react';
import '../../css/faq.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";



const FAQ = () => {
    const [AnswerVisible1, setAnswerVisible1] = React.useState(false)
    const [AnswerVisible2, setAnswerVisible2] = React.useState(false)
    const [AnswerVisible3, setAnswerVisible3] = React.useState(false)
    const [AnswerVisible4, setAnswerVisible4] = React.useState(false)
    const [AnswerVisible5, setAnswerVisible5] = React.useState(false)
    const [AnswerVisible6, setAnswerVisible6] = React.useState(false)
    const [AnswerVisible7, setAnswerVisible7] = React.useState(false)
    const [AnswerVisible8, setAnswerVisible8] = React.useState(false)
    const [AnswerVisible9, setAnswerVisible9] = React.useState(false)

    return (
        <div className={'faqMainContent'}>
            <div className={'faqImg'}>
                <img src="/img/faq.png" alt="" />
            </div>
            <div onClick={() => setAnswerVisible1(!AnswerVisible1)} className={'questionDiv'}>
                <div className={'faqTitle'}>
                    <span>Ціна товару на сайті і в фізичному магазині різна. Кому вірити?</span>
                    <FontAwesomeIcon icon={faArrowDown} color="black" />
                </div>
                <div className={'faqAnswer ' + (AnswerVisible1 ? ' showAnswer' : 'hideAnswer')}>
                    Інтернет-магазин «InternetShop» продає товари за цінами вказаними на сайті. Салони «Алло» мають інший спосіб ціноутворення, тому і ціни в «офлайнових» магазинах інші.
                </div>
            </div>
            <div onClick={() => setAnswerVisible2(!AnswerVisible2)} className={'questionDiv'}>
                <div className={'faqTitle'}>
                    <span>У яких банках можна оформити кредит на ваші товари і як?</span>
                    <FontAwesomeIcon icon={faArrowDown} color="black" />
                </div>
                <div className={'faqAnswer ' + (AnswerVisible2 ? ' showAnswer' : 'hideAnswer')}>
                    Інтернет-магазин працює з Укрсиббанком і ОТП банком, а також Приватбанком (Оплата частинами). Оформити кредит можна через онлайн заявку на сайті.
                </div>
            </div>
            <div onClick={() => setAnswerVisible3(!AnswerVisible3)} className={'questionDiv'}>
                <div className={'faqTitle'}>
                    <span>Чи співпрацюєте ви з сервісними центрами?</span>
                    <FontAwesomeIcon icon={faArrowDown} color="black" />
                </div>
                <div className={'faqAnswer ' + (AnswerVisible3 ? ' showAnswer' : 'hideAnswer')}>
                    Для гарантійного обслуговування товару, придбаного в нашому інтернет-магазині, Ви можете звернутися безпосередньо в офіційний сервісний центр виробника або до філії інтернет-магазину.
                </div>
            </div>
            <div onClick={() => setAnswerVisible4(!AnswerVisible4)} className={'questionDiv'}>
                <div className={'faqTitle'}>
                    <span>Чи працюєте ви за безготівковим розрахунком і чи є платником ПДВ?</span>
                    <FontAwesomeIcon icon={faArrowDown} color="black" />
                </div>
                <div className={'faqAnswer ' + (AnswerVisible4 ? ' showAnswer' : 'hideAnswer')}>
                    Ціни на сайті вказані з урахуванням ПДВ. Оплата за безготівковим розрахунком можлива за рахунком-фактурою через будь-яке відділення банку (для юр. і фіз. осіб) або пластиковими картами Visa, MasterCard безпосередньо через наш сайт.
                </div>
            </div>
            <div onClick={() => setAnswerVisible5(!AnswerVisible5)} className={'questionDiv'}>
                <div className={'faqTitle'}>
                    <span>В які міста є у вас доставка?</span>
                    <FontAwesomeIcon icon={faArrowDown} color="black" />
                </div>
                <div className={'faqAnswer ' + (AnswerVisible5 ? ' showAnswer' : 'hideAnswer')}>
                    Інтернет-магазин Алло працює по всій території України. Оплата можлива як за безготівковим розрахунком, картами Visa / Master Card, так і готівкою за фактом доставки замовлення (оплата кур'єру перевізника). Термін доставки замовленого товару – від 1 до 3 днів
                </div>
            </div>
            <div onClick={() => setAnswerVisible6(!AnswerVisible6)} className={'questionDiv'}>
                <div className={'faqTitle'}>
                    <span>Які умови доставки великогабаритних вантажів?</span>
                    <FontAwesomeIcon icon={faArrowDown} color="black" />
                </div>
                <div className={'faqAnswer ' + (AnswerVisible6 ? ' showAnswer' : 'hideAnswer')}>
                    Доставка великогабаритного вантажу провадиться до під'їзду вашого будинку. При необхідності ви можете замовити додаткові послуги: "Підйом товару на поверх" (Вартість послуги 30 грн / поверх) і "Адресна доставка "Нова пошта" (вартість послуги становить 140 грн). Вартість адресної доставки "Нова пошта" інших категорій товарів уточнюйте у менеджера.
                </div>
            </div>
            <div onClick={() => setAnswerVisible7(!AnswerVisible7)} className={'questionDiv'}>
                <div className={'faqTitle'}>
                    <span>Чи можу я купити товар безпосередньо в вашому офісі?</span>
                    <FontAwesomeIcon icon={faArrowDown} color="black" />
                </div>
                <div className={'faqAnswer ' + (AnswerVisible7 ? ' showAnswer' : 'hideAnswer')}>
                    Ви можете придбати товар, приїхавши безпосередньо в наші офіс в Києві. Зателефонуйте нам заздалегідь по телефону 0-800-300-100, щоб ми привезли товар в офіс для видачі Вам.
                </div>
            </div>
            <div onClick={() => setAnswerVisible8(!AnswerVisible8)} className={'questionDiv'}>
                <div className={'faqTitle'}>
                    <span>Що робити, якщо товар мені не привезли або він виявився пошкодженим?</span>
                    <FontAwesomeIcon icon={faArrowDown} color="black" />
                </div>
                <div className={'faqAnswer ' + (AnswerVisible8 ? ' showAnswer' : 'hideAnswer')}>
                    Перед відправкою товар перевіряється і страхується на повну вартість. При отриманні товару ви можете його перевірити на наявність пошкоджень і на місці пред'явити претензії службі доставки. Служба відшкодовує завдані збитки, якщо їх було завдано з її вини. Якщо товар по витікання чотирьох днів з моменту замовлення (і оплати рахунки-фактури в разі безготівкового замовлення або оплати картами Visa і Master card) вам не привезли – зателефонуйте в службу доставки по телефону 0(800) 500-609, назвіть номер і дату замовлення. Якщо вам не вдасться з'ясувати причини затримки товару у служби доставки – зателефонуйте нам по телефону 0 (800) 300-100, ми постараємося вам допомогти.
                </div>
            </div>
            <div onClick={() => setAnswerVisible9(!AnswerVisible9)} className={'questionDiv'}>
                <div className={'faqTitle'}>
                    <span>Чи можу я обміняти або повернути куплений товар?</span>
                    <FontAwesomeIcon icon={faArrowDown} color="black" />
                </div>
                <div className={'faqAnswer ' + (AnswerVisible9 ? ' showAnswer' : 'hideAnswer')}>
                Обмін і повернення товару, купленого в інтернет-магазині АЛЛО, здійснюється відповідно до «Закону про захист прав споживачів». З подробицями обміну і повернення товару Ви можете ознайомитися на сторінці "Гарантія та сервісні центри". Обмін і повернення товару відбувається при попередньому погодженні по телефону 0 (800) 300-100. Товари сертифіковані і мають офіційну гарантію виробника. Термін гарантійного обслуговування вказується на сторінці товару.
                </div>
            </div>
        </div>
    )
}

export default FAQ