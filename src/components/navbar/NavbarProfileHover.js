import React from 'react';
import './NavbarProfileHover.css';

export default function NavbarProfileHover(props) {
    const {globals} = props;

    return (
        <div
            id='navbar--profile-hover'
            className={globals.classPrefix}
        >
            <div
                id='navbar--profile-hover-triangle-container'
                className={globals.classPrefix}
            >
                <div
                    id='navbar--profile-hover-triangle'
                    className={globals.classPrefix}
                ></div>
            </div>

            <div
                id='navbar--profile-hover-container'
                className={globals.classPrefix}
            >
                <div className='navbar--profile-hover-container-hr' />
                <table><tbody>
                    <tr><td><a>Account</a></td></tr>
                    <tr><td><a>Wishlist</a></td></tr>
                    <tr><td><a>Orders</a></td></tr>
                    <tr><td><a>Cart</a></td></tr>
                    <tr><td><a>Logout</a></td></tr>
                </tbody></table>
                <div className='navbar--profile-hover-container-hr' />
            </div>
        </div>
    );
}