import React from "react";
import "../css/addresses.css";
import End from "./End";

function Addresses() {
    return (
        <section className="Addresses">
            <div className="addresses-cont">
                <div className="addresses-parent">
                    <h2>АДРЕСА МАГАЗИНОВ </h2>
                    <p>Ждем вас в торговых центрах:</p>
                </div>
                <div className="addresses-child">
                    <h4>Блюз</h4>
                    <p>ул. Арбат, 1а, Москва, Россия</p>
                    <p>Телефон: +7 (495) 000-00-00</p>
                    <div className="addresses-info">
                        <span>ПН–СБ: 10:00–17:00</span>
                        <p>ВС: выходной</p>
                    </div>
                </div>
                <div className="line"></div>
                <div className="addresses-child">
                    <h4>Ева</h4>
                    <p>ул. Арбат, 1а, Москва, Россия</p>
                    <p>Телефон: +7 (495) 000-00-00</p>
                    <div className="addresses-info">
                        <span>ПН–СБ: 10:00–17:00</span>
                        <p>ВС: выходной</p>
                    </div>
                </div>
            </div>
            <End />
        </section>
    );
}

export default Addresses;
