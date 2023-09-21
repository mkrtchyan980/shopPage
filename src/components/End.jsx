import React from "react";
import "../css/end.css";

function End() {
    return (
        <section className="end-cont">
            <div className="link-cont">
                <p>БУДЕМ НА СВЯЗИ</p>
                <div className="link-child">
                    <a href="https://vk.com">
                        <img
                            src="https://static.wixstatic.com/media/7f7f31e5b76844cc9f8af5c826c0b407.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7f7f31e5b76844cc9f8af5c826c0b407.png"
                            alt=""
                        />
                    </a>
                    <a href="https://www.facebook.com/">
                        <img
                            src="https://static.wixstatic.com/media/4f857b2e8a316c4e1ed16717a3d4ec8c.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4f857b2e8a316c4e1ed16717a3d4ec8c.png"
                            alt=""
                        />
                    </a>
                    <a href="https://twitter.com/">
                        <img
                            src="https://static.wixstatic.com/media/89b1d2497b29ccbb7d37be1ec6ef0052.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/89b1d2497b29ccbb7d37be1ec6ef0052.png"
                            alt=""
                        />
                    </a>
                    <a href="https://twitter.com/">
                        <img
                            src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png"
                            alt=""
                        />
                    </a>
                </div>
            </div>
            <div className="input-cont">
                <p>ДАВАЙТЕ ДРУЖИТЬ</p>
                <div className="input-child">
                    <input type="email" placeholder="Добавьте эл. почту*" />
                    <button>OK</button>
                </div>
            </div>
            <div className="help-info-cont">
                <p>НУЖНА ПОМОЩЬ?</p>
                <span>+7 (495) 000-00-00</span>
                <a href="#">info@mysite.ru</a>
            </div>
        </section>
    );
}

export default End;
