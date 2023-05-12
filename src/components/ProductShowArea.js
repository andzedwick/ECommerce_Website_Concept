import React from "react";
import ProductCard from "./ProductCard";

import './ProductShowArea.css';

export default function ProductShowArea(props) {
    const {globals, products} = props;

    const productCards = products.map((product) => {
        return <ProductCard globals={globals} cardProps={product} />;
    });

    return (
        <div
            id='product-show-area'
            className={globals.classPrefix}
        >
            <ProductCard globals={globals} cardProps={products} />
            {productCards}
        </div>
    );
}