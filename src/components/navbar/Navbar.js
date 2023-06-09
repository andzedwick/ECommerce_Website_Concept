import React, {useState} from 'react';
import SearchBar from './SearchBar';
import NavbarIcon from './NavbarIcon';
import NavbarProfileHover from './NavbarProfileHover';
import CategoryDropdown from './CategoryDropdown';

import './Navbar.css';

import logo from '../../logo.svg';
import cartIcon   from '../../resources/cart-icon-blue.png';
import profileIcon from '../../resources/profile-icon-blue.png';

export default function Navbar(props) {
    const {globals, onSearch} = props;

    const [profileHover, setProfileHover] = useState(false);

    // Called whenever a search occurs
    function handleClick(searchString) {
        onSearch(searchString);
    }

    // Called by NavbarIcon when the icon is hovered on
    function handleHover(id, isHover) {
        if (id === '2') {
            setProfileHover(isHover);
        }
    }

    return (
        <div id='navbar' className={globals.classPrefix}>
            <nav id='navbar--main' className={globals.classPrefix}>
                <img
                    id='navbar--logo'
                    className={globals.classPrefix}
                    src={logo}
                    alt='logo'
                    onDragStart={(e) => {
                        e.preventDefault();
                    }}
                />
                <button
                    id='navbar--browse'
                    className={globals.classPrefix}
                >
                    Browse
                </button>
                <SearchBar
                    globals={globals}
                    handleClick={handleClick}
                />
                <div id='navbar--right-container' className={globals.classPrefix}>
                    <NavbarIcon
                        id='1'
                        globals={globals}
                        imageIcon={cartIcon}
                        handleHover={handleHover}
                        handleClick={handleClick}
                    />
                    <NavbarIcon
                        id='2'
                        globals={globals}
                        imageIcon={profileIcon}
                        handleHover={handleHover}
                        handleClick={handleClick}
                    >
                        {(profileHover) && <NavbarProfileHover
                                                globals={globals}
                                            />}
                    </NavbarIcon>
                    
                </div>
            </nav>
            <div id='navbar--filter' className={globals.classPrefix}>
                <CategoryDropdown globals={globals} />
            </div>
        </div>
    );
}