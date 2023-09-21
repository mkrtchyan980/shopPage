import React from "react";
import "../css/help.css";
import End from "./End";

function HelpForBuyers() {
    return (
        <section className="HelpForBuyers">
            <div className="help-cont">
                <h1>ПОМОЩЬ ПОКУПАТЕЛЯМ</h1>
                <span>
                    Это текст. Нажмите один раз и выберите «Редактировать текст»
                    или просто кликните дважды, чтобы добавить свой текст и
                    настроить шрифт. Вы можете переместить его в любое место на
                    странице. Расскажите посетителям сайта о себе.
                </span>
            </div>
            <div className="help-infos">
                <div className="help-info">
                    <div className="question-cont">
                        <p>Хотите задать вопрос? </p>
                        <p>С удовольствием ответим!</p>
                    </div>
                    <div className="num-cont">
                        <h5>Звоните</h5>
                        <p>+7 (495) 000-00-00</p>
                        <p>или пишите по адресу:</p>
                        <p>info@mysite.ru</p>
                    </div>
                </div>
                <div className="inp-cont">
                    <input type="text" placeholder="Имя" />
                    <input type="email" placeholder="Эл. почта" />
                    <input type="tel" placeholder="Телефон" />
                    <textarea placeholder="Добавьте сообщение..."></textarea>
                    <div className="btn">
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
            <div className="return-policy">
                <h1>ПОЛИТИКА ВОЗВРАТА</h1>
                <span>
                    Это текст. Нажмите один раз и выберите «Редактировать текст»
                    или просто кликните дважды, чтобы добавить свой текст и
                    настроить шрифт. Вы можете переместить его в любое место на
                    странице. Расскажите посетителям сайта о себе.
                </span>
            </div>
            <div className="FAQ">
                <h1>FAQ</h1>
                <div className="FAQ-cont">
                    <div className="FAQ-child">
                        <h3>Как сделать заказ?</h3>
                        <p>
                            Это текст. Нажмите один раз и выберите
                            «Редактировать текст» или просто кликните дважды,
                            чтобы добавить свой текст и настроить шрифт.
                        </p>
                        <h3>Оплата товаров</h3>
                        <p>
                            Это текст. Нажмите один раз и выберите
                            «Редактировать текст» или просто кликните дважды,
                            чтобы добавить свой текст и настроить шрифт.
                        </p>
                        <h3>Возврат товара и денег</h3>
                        <p>
                            Это текст. Нажмите один раз и выберите
                            «Редактировать текст» или просто кликните дважды,
                            чтобы добавить свой текст и настроить шрифт. Вы
                            можете переместить его в любое место на странице.
                        </p>
                    </div>
                    <div className="FAQ-child">
                        <h3>Политика конфиденциальности</h3>
                        <p>
                            Это текст. Нажмите один раз и выберите
                            «Редактировать текст» или просто кликните дважды,
                            чтобы добавить свой текст и настроить шрифт. Вы
                            можете переместить его в любое место на странице.
                        </p>
                        <h3>Как связаться с нашим курьером?</h3>
                        <p>
                            Это текст. Нажмите один раз и выберите
                            «Редактировать текст» или просто кликните дважды,
                            чтобы добавить свой текст и настроить шрифт.
                        </p>
                        <h3>Варианты доставки</h3>
                        <p>
                            Это текст. Нажмите один раз и выберите
                            «Редактировать текст» или просто кликните дважды,
                            чтобы добавить свой текст и настроить шрифт.
                        </p>
                    </div>
                </div>
            </div>
            <End />
        </section>
    );
}

export default HelpForBuyers;
