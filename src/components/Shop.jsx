import React, { useEffect, useState } from "react";
import ShopProduct from "./ShopProduct";
import "../css/Shop.css";
import End from "./End";
import { addToCart } from "../redux/item";
import { useDispatch } from "react-redux";

function Shop() {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();
    const addToCarts = (product) => {
        dispatch(addToCart(product));
    };

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((product) => setProducts(product));
    });

    return (
        <section className="Shop">
            <h1>МАГАЗИН</h1>
            <div className="shop-cont">
                {products.map((product) => {
                    return (
                        <ShopProduct
                            key={product.id}
                            product={product}
                            addToCarts={addToCarts}
                        />
                    );
                })}
            </div>
            <End />
        </section>
    );
}

export default Shop;
