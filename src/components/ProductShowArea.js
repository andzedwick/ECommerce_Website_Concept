import React from "react";
import ProductCard from "./ProductCard";

import './ProductShowArea.css';

export default function ProductShowArea(props) {
    const {globals, products} = props;

    let productCards = undefined;

    if (products.products != null) {
        productCards = products.products.map((obj) => (
            <ProductCard id={"product-card-show-area--" + obj.id} key={"product-card-show-area--" + obj.id} globals={globals} cardProps={obj} />
        ));
    } else {
        productCards = <ProductCard id={"product-card-show-area--" + products.id} key={"product-card-show-area--" + products.id} globals={globals} cardProps={products} />
    }

    return (
        <div
            id='product-show-area'
            className={globals.classPrefix}
        >
            {productCards}
        </div>
    );
}