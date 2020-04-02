import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FunctionComponent = () => (
        <nav>
            <div className="header px1 nav-wrapper">
                <NavLink to="/" className="brand-logo">Прототип</NavLink>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Список дел</NavLink></li>
                    <li><NavLink to="/about">Информация</NavLink></li>
                </ul>
            </div>
        </nav>
)