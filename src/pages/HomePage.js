import React, {useEffect, useState} from "react";
import Navbar from "../components/navbar/Navbar";
import ProductShowArea from "../components/ProductShowArea";

import './HomePage.css';

export default function HomePage(props) {
    const {globals} = props;

    const [data, setData] = useState({});
    const [searchTerm, setSearchTerm] = useState("");

    // Used to handle searches
    const onSearch = (searchString) => {
        if (searchString !== searchTerm) {
            setSearchTerm(searchString);
        }
    }

    // Handles getting product data whenever the searchTerm chagnes
    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
            .then(response => response.json())
            .then(dt => setData(dt));
    }, [searchTerm]);

    return (
        <div
            id='homePage'
            className={globals.classPrefix}
        >
            <Navbar 
                globals={globals}
                onSearch={onSearch}
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