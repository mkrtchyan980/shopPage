import React from "react";
import "../css/home.css";
import { NavLink } from "react-router-dom";
import End from "./End";

function Home() {
    return (
        <section>
            <div className="Home">
                <img
                    src="https://static.wixstatic.com/media/84770f_b5b78cd83b6342199b7370a2ba6b9e06.jpg/v1/fill/w_1433,h_879,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_b5b78cd83b6342199b7370a2ba6b9e06.jpg"
                    alt=""
                />
                <div className=" home-info">
                    <span>ОСЕНЬ И ЗИМА</span>
                    <button className="home-btn">
                        <NavLink to="/shop">В магазин</NavLink>
                    </button>
                </div>
                <div className="child">
                    <span>БЕСПЛАТНАЯ ДОСТАВКА ПО РОССИИ</span>
                </div>
            </div>
            <div className="cont">
                <div className="info">
                    <span>КРУГЛЫЙ ГОД</span>
                    <div className="line"></div>
                    <p>Обязательные вещи в вашем гардеробе</p>
                </div>
                <div className="image-cont">
                    <div className="image-child">
                        <img
                            src="https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_436,h_518,al_c,q_90,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.webp"
                            alt=""
                        />
                        <p>ЮБКА МИДИ</p>
                    </div>
                    <div className="image-child">
                        <img
                            src="https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_526,h_724,al_c,q_85,enc_auto/cda177_b5a795ade21b41d38cadd836824e6768.jpg"
                            alt=""
                        />
                        <NavLink to="#">СКИДКИ</NavLink>
                    </div>
                    <div className="image-child">
                        <img
                            src="https://static.wixstatic.com/media/84770f_9a81715dcb4b43fa936d243fcd90e2a9.png/v1/fill/w_436,h_518,al_c,q_90,usm_0.66_1.00_0.01/84770f_9a81715dcb4b43fa936d243fcd90e2a9.webp"
                            alt=""
                        />
                        <p>ВИНТАЖНЫЕ ОЧКИ</p>
                    </div>
                </div>
            </div>
            <End />
        </section>
    );
}

export default Home;
