import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import './App.css';

export default function App() {
    // eslint-disable-next-line
    const [darkTheme, setDarkTheme] = useState(false);
    const constants = {
        DARK_THEME_CLASS_NAME: 'dark-theme',
        LIGHT_THEME_CLASS_NAME: 'light-theme',
    }
    const classPrefix = darkTheme ? constants.DARK_THEME_CLASS_NAME : constants.LIGHT_THEME_CLASS_NAME;

    var globals = {
        darkTheme: darkTheme,
        setDarkTheme: setDarkTheme,
        constants: constants,
        classPrefix: classPrefix
    }

    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<HomePage globals={globals} />} />
            </Routes>
        </Router>
    );
}