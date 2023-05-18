import React from 'react';

import star from '../resources/star.png';
import './ProductCard.css';

export default function ProductCard(props) {
    const {globals, cardProps} = props;
    const stars = Array.from({length: Math.trunc(cardProps.rating)}, (_, i) => <img key={'product-card--rating-star-' + i} id='product-card--rating-star' className={'product-card--rating-star' + globals.classPrefix} src={star} alt='star rating' />);
    const price = parseFloat(cardProps.price).toFixed(2);
    const prevPrice = (price / (100 - cardProps.discountPercentage) * 100).toFixed(2);

    return (
        <div
            id='product-card'
            className={globals.classPrefix}
        >
            <div
                id='product-card--thumbnail-container'
                className={globals.classPrefix}
            >
                <img
                    id='product-card--thumbnail-background'
                    className={globals.classPrefix}
                    src={cardProps.thumbnail}
                    alt='thumbnail'
                />
                <img
                    id='product-card--thumbnail'
                    className={globals.classPrefix}
                    src={cardProps.thumbnail}
                    alt='thumbnail'
                />
            </div>
            <p
                id='product-card--title'
                className={globals.classPrefix}
            >
                <b>{cardProps.title === undefined ? '...' : cardProps.title}</b>
            </p>
            <p
                id='product-card--brand'
                className={globals.classPrefix}
            >
                <i><b>{cardProps.brand === undefined ? '...' : cardProps.brand}</b></i>
            </p>
            <p
                id='product-card--description'
                className={globals.classPrefix}
            >
                {cardProps.description === undefined ? '...' : cardProps.description}
            </p>
            <p
                id='product-card--stock'
                className={globals.classPrefix}
            >
                {cardProps.stock === undefined || cardProps.stock === '0' ? 'Out of Stock' : 'In Stock (' + cardProps.stock + ')'}
            </p>
            <div id='product-card--rating' className={globals.classPrefix}>
                <div id='product-card--rating-star-container' className={globals.classPrefix}>
                    {stars}
                </div>
                <p
                    id='product-card--rating-description'
                    className={globals.classPrefix}
                >
                    {cardProps.rating === undefined ? '...' : cardProps.rating}
                </p>
            </div>
            <div id='product-card--price-container'>
                <p
                    id='product-card--price'
                    className={globals.classPrefix}
                >
                    <b>{cardProps.price === undefined ? '$...' : '$' + price}</b>
                </p>
                <p
                    id='product-card--price-discount'
                    className={globals.classPrefix}
                >
                    &nbsp;&nbsp;<s><b>{'$' + prevPrice}</b></s>
                    &nbsp;&nbsp;<i>{cardProps.discountPercentage !== '0.00' && cardProps.discountPercentage !== undefined ? '(-' + cardProps.discountPercentage + '%)' : ''}</i>
                </p>
            </div>
            
        </div>
    );
}