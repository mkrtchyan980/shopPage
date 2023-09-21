import React from "react";
import "../css/Shop.css";

function ShopProduct({ product, addToCarts }) {
    return (
        <div className="shop-child">
            <img src={product.image} alt="" />
            <div className="shop-info">
                <p>{product.title}</p>
                <h4>{product.price} $</h4>
                <button onClick={() => addToCarts(product)}>Купить</button>
            </div>
        </div>
    );
}

export default ShopProduct;
