import React from "react";
import "../css/header.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const state = useSelector((state) => state.items);
    return (
        <div>
            <header>
                <nav>
                    <div className="logo">
                        <NavLink href="/">ВАЛЕНТИНА</NavLink>
                    </div>
                    <ul>
                        <li className="menu-list">
                            <NavLink to="/home">Главная</NavLink>
                        </li>
                        <li className="burger-icons">
                            <NavLink to="/home">
                                <ion-icon name="home-outline"></ion-icon>
                            </NavLink>
                        </li>
                        <li className="menu-list">
                            <NavLink to="/shop">Магазин</NavLink>
                        </li>
                        <li className="burger-icons">
                            <NavLink to="/shop">
                                <ion-icon name="bag-handle-outline"></ion-icon>
                            </NavLink>
                        </li>
                        <li className="menu-list">
                            <NavLink to="/help">Помощь покупателям</NavLink>
                        </li>
                        <li className="burger-icons">
                            <NavLink to="/help">
                                <ion-icon name="information-circle-outline"></ion-icon>
                            </NavLink>
                        </li>
                        <li className="menu-list">
                            <NavLink to="/addresses">Адреса</NavLink>
                        </li>
                        <li className="burger-icons">
                            <NavLink to="/addresses">
                                <ion-icon name="location-outline"></ion-icon>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">
                                <ion-icon name="cart-outline"></ion-icon>
                                <span>{state.length}</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
