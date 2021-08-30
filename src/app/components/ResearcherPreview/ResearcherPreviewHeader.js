import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/ProductHeader.css';

export default function ReseachercherPreviewHeader() {
    return (
        <div>
            <div className="productHeaderWrapper">
                <div>
                    <NavLink exact activeClassName="active-class" className="menu-list" to="/">Product Details</NavLink>
                </div>
                <div>
                    <NavLink exact activeClassName="active-class" className="menu-list" to="/">Review Survey</NavLink>
                </div>
                <div>
                    <NavLink exact activeClassName="active-class" className="menu-list" to="/">Review Prototype</NavLink>
                </div>
            </div>
        </div>
    )
}
