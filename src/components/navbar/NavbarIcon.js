import React, {useState} from "react";
import './NavbarIcon.css';

export default function NavbarIcon(props) {
    const {id, globals, imageIcon, handleHover, handleClick} = props;

    // States
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    // Dynamic class names
    var classPrefixCart = globals.classPrefix;

    // Setting up dynamic class names
    if (active) {
        classPrefixCart += '-active';
    } else if (hover) {
        classPrefixCart += '-hover';
    }

    // Child click and hover handlers
    const handleChildClick = (event) => {
        handleClick(id, event);
    };

    const handleChildHover = (isHovering) => {
        if (isHovering) {
            handleHover(id, true);
            setHover(true);
        } else {
            handleHover(id, false);
            setHover(false);
        }
    };

    return (
        <div
            id='navbar--icon'
            className={classPrefixCart}
            onClick={handleChildClick}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            onMouseEnter={() => handleChildHover(true)}
            onMouseLeave={() => {
                handleChildHover(false);
                setActive(false);
            }}
        >
            <img
                id='navbar--icon-img'
                className={globals.classPrefix}
                src={imageIcon}
                alt='cart'
                onDragStart={(e) => {
                    e.preventDefault();
                }}
            />
            {props.children}
        </div>
    );
}