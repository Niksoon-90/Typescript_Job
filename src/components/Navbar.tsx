import React from "react";

export const Navbar: React.FunctionComponent = () => (
        <nav>
            <div className=" cyan lighten-2 px1 nav-wrapper">
                <a href="/" className="brand-logo">Дела</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">Список дел</a></li>
                    <li><a href="/">Информация</a></li>
                </ul>
            </div>
        </nav>
)