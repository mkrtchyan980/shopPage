import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyCart from "./MyCart";
import { deleteToCart } from "../redux/item";
import "../css/cart.css";
import End from "./End";

function Cart() {
    const state = useSelector((state) => state.items);

    const dispatch = useDispatch();

    const removeToCart = (item) => {
        dispatch(deleteToCart(item));
    };

    const totalPrice = () => {
        return state.reduce((total, item) => total + item.price, 0);
    };
    return (
        <section className="Cart">
            <div className="cart-cont">
                <h2>Моя корзина</h2>
                {state.map((item) => {
                    return (
                        <MyCart
                            key={item.id}
                            item={item}
                            removeToCart={removeToCart}
                        />
                    );
                })}
            </div>

            <div className="button">
                <button
                    onClick={() => {
                        showAlert();
                    }}
                >
                    Оформить заказ
                </button>
            </div>
            <End />
        </section>
    );
}

const showAlert = () => {
    alert("Мы временно не принимаем онлайн-заказы");
};

export default Cart;
