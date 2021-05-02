import React from "react";
import "../../css/style.aboutUs.css";
const AboutUs = () => {
  return (
    <div>
      <p className="titleAboutUs"> Про Нас </p>
      <div className="container">
        <p className="AboutUsText">
          Інтернет магазнин <strong>Internetshop</strong> – це широкі можливості вибору товару для вашої зручності
          <p>
          Купуючи товари у нас, ви будете мати відмінні ціни і гарантію
            оригінальності товару.
          </p>
          Наш каталог, представлений в прайс-листі, щодня оновлюється,
          тому ми готові розглядати будь-яку Вашу прохання крім основного
          асортименту.
          <div className="AboutUsTextPropos">
            <div>

              <img src="https://zakupki.com.ua/wp-content/uploads/2020/01/Statya_25-1200x900.jpg"></img>{" "}
            </div>
            <div className="AboutUsTextakcia">
              PCSMART–магазин, который несет в себе огромные перспективы и
              совершает очередной рывок развития в разнообразных сферах. Мы
              объединили различные направления дистрибуции в рамках одной
              компании.
            </div>
          </div>
          <div>
            <div className="AboutUsTextakcia">
              <div className="AboutUsTextakciafirst">
                Акція у нашій компанії це не <b>Свято</b>!
                <p>
                Кожного дня у нас
                з'являються десятки нових акційних товарів . Знижки у нас можуть
                коливатись від 5% і аж до 95%.</p> Ми робимо все , щоб наші покупці
                могли собі дозволити придбати будь-який цікавий їм товар у
                незалежності від фінансових можливостей.{" "}
              </div>
              <div>
              <img src="https://images-cdn.cian.site/realty/journal/306275/345678651_8crJvi9.jpg"></img></div>
            </div>
          </div>
        </p>
        <div className="AboutUsProposition">
          <p className="titleAboutUs" id="titlePropos"> Ми пропонуємо вам: </p>
          <div className="AboutUsBLockpropos">
            <div className="Blockproposfirstrow">
              <div>
                <img src="img/AboutUs24hour.png"></img>
                  <p className="AboutUsImagedescription">
                    Якісна підтримка 24/7
                  </p>
                
              </div>
              <div> <img src="img/AboutUsDelivery.png"></img>
              <p className="AboutUsImagedescription">
                    Швидка доставка
                  </p> </div>
              <div> <img src="img/AboutUsDiplom.png"></img>
              <p className="AboutUsImagedescription">
                  Величезний досвід
                  </p></div>
            </div>
            <div className="Blockproposfirstrow">
              <div>
                <img src="img/AboutUsQuality.png"></img>
                  <p className="AboutUsImagedescription">
                    Якість вищого рівня
                  </p>
                
              </div>
              <div> <img src="img/AboutUsStaff.png"></img>
              <p className="AboutUsImagedescription">
                    Приємний персонал
                  </p> </div>
              <div> <img src="img/AboutUspacking.png"></img>
              <p className="AboutUsImagedescription">
                  Переробка упакувань
                  </p></div>
            </div>
          </div>
        </div>
        <p>Для нас немає різниці між маленькими клієнтами та великими компаніями . Ми відповідально підходимо до кожного замовлення і хочемо щоб кожен покупець залишився щасливим.</p>
       
        <div >
        <p className="titleAboutUs" > Наші партнери: </p>
        <div className="AboutUsCompany">
          <div className="Companyimg"> <img src="img/asus_logo_icon_168565.png"></img> </div>
          <div className="Companyimg"> <img src="img/lenovo_logo_icon_145112.png"></img></div>
          <div className="Companyimg"> <img src="img/xiaomi_logo_icon_144724.png"></img> </div>
        </div>
        <div className="AboutUsfinaltext">
          Чекаємо і готові завжди до співпраці з новими компаніями . <br></br> Отже , якщо ви маєте пропозицію ,яка нас зацікавить ласкаво просимо за номером у описі чи на пошту. 
          <p>Контактні дані</p>
          <img src="img/arrow-down_icon-icons.com_72377.png"></img>
       
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
