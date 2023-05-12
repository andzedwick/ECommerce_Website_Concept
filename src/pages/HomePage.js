import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar/Navbar";
import ProductShowArea from "../components/ProductShowArea";

import './HomePage.css';

export default function HomePage(props) {
    const {globals} = props;

    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://dummyjson.com/products/55')
            .then(response => response.json())
            .then(dt => setData(dt));
    }, []);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(dt => console.log(dt));
    }, []);

    console.log(data);

    return (
        <div
            id='homePage'
            className={globals.classPrefix}
        >
            <Navbar 
                globals={globals}
            />
            <div
                id='homePage--content'
                className={globals.classPrefix}
            >
                <ProductShowArea
                    globals={globals}
                    products={data}
                />
            </div>
        </div>
    );
}