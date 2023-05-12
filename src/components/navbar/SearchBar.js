import React, {useState} from 'react';
import './SearchBar.css';
import searchIcon from '../../resources/search-icon.png';

export default function SearchBar(props) {
    const {globals, handleClick} = props;

    // States
    const [searchHover, setSearchHover] = useState(false);
    const [searchActive, setSearchActive] = useState(false)

    // Dynamic class names
    var classPrefixSearchBarIconContainer = globals.classPrefix;

    // Component-based dynamic styles
    const searchBarIconStyle = {
        transform: `scale(${searchActive ? '0.9' : '1.0'}) translateY(-50%)`
    }

    // Setting up dynamic class names
    if (searchActive) {
        classPrefixSearchBarIconContainer += '-active';
    } else if (searchHover) {
        classPrefixSearchBarIconContainer += '-hover';
    }

    return (
        <div id='search--container' className={globals.classPrefix}>
            <input id='search--box' className={globals.classPrefix} type='text' maxLength={128} placeholder='Search' />
            <div
                id='search--icon-container'
                className={classPrefixSearchBarIconContainer}
                onClick={handleClick}
                onMouseDown={() => setSearchActive(true)}
                onMouseUp={() => setSearchActive(false)}
                onMouseEnter={() => setSearchHover(true)}
                onMouseLeave={() => {
                    setSearchHover(false);
                    setSearchActive(false);
                }}
            >
                <img
                    id='search--icon'
                    className={globals.classPrefix}
                    style={searchBarIconStyle}
                    src={searchIcon}
                    alt='search'
                    onDragStart={(e) => {
                        e.preventDefault();
                    }}
                />
            </div>
        </div>
    );

}