import React, { useState } from "react";
import "../css/cart.css";

function MyCart({ item, removeToCart }) {
    const [count, setCount] = useState(1);

    function increment() {
        setCount((prevCount) => (prevCount += 1));
    }

    function decrement() {
        setCount(function (prevCount) {
            if (prevCount > 1) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 1);
            }
        });
    }

    return (
        <div className="cart-child">
            <img src={item.image} alt="" />
            <div className="cart-info-div">
                <div className="item-info">
                    <p>{item.title} </p>
                    <h4>{item.price}$</h4>
                </div>
                <div className="cart-info">
                    <button onClick={decrement}>-</button>
                    <h2>{count}</h2>
                    <button onClick={increment}>+</button>
                </div>
            </div>
            <div className="cart-price">
                <h1>{item.price * count} $</h1>
                <button onClick={() => removeToCart(item)}>X</button>
            </div>
        </div>
    );
}

export default MyCart;
