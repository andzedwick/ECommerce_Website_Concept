import React, {useState, useEffect, useRef} from "react";

import './CategoryDropdown.css';

export default function CategoryDropdown(props) {
    const {globals} = props;
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const dropdownOpenRef = useRef(null);

    // Get the possible categories
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(res => {
                setCategories(res);
            });
    }, []);

    // Handles a selection or deselction of a category
    const handleSelectChange = (event) => {
        const {value, checked} = event.target;

        if (checked) {
            setSelectedCategories((prev) => [...prev, value])
        } else {
            setSelectedCategories((prev) => prev.filter((category) => category !== value));
        }
    };

    // Handles opening the dropdown
    const handleDropdownClick = () => {
        setIsOpen((prev) => !prev);
    }

    // Handle a generic click
    const handleGenericClick = (event) => {
        if (dropdownRef.current && dropdownOpenRef.current && !dropdownRef.current.contains(event.target) && !dropdownOpenRef.current.contains(event.target) && isOpen) {
            setIsOpen(false);
        }
    };

    // Clears selection list of categories
    const clearCategories = () => {
        setSelectedCategories([]);
    };

    // Selects all out of the list of categories
    const selectAllCategories = () => {
        setSelectedCategories(categories);
    };

    // Returns a dropdown list of categories
    const getCategories = () => {
        return categories.map((category) => (
            <label key={category} className={globals.classPrefix + '--category-label'}>
                <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={handleSelectChange}
                    
                />
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
        ));
    };

    // Add event listener for clicking 
    useEffect(() => {
        document.addEventListener('click', handleGenericClick);

        return () => {
            document.removeEventListener('click',  handleGenericClick);
        };
    });

    return (
        <div id='dropdown' className={globals.classPrefix}>
            <div id='dropdown--open-list' className={globals.classPrefix} ref={dropdownOpenRef} onClick={handleDropdownClick}>
                Category Filter
            </div>
            
            {isOpen && (
                <div id='dropdown--category-select' className={globals.classPrefix} ref={dropdownRef}>
                    <div
                        id='dropdown--category-select-select-all'
                        className={globals.classPrefix + '--category-label'}
                        onClick={selectAllCategories}
                    >
                        Select All
                    </div>
                    <div
                        id='dropdown--category-select-clear'
                        className={globals.classPrefix + '--category-label'}
                        onClick={clearCategories}
                    >
                        Clear Filter
                    </div>
                    {getCategories()}
                </div>
            )}
        </div>
    );
}