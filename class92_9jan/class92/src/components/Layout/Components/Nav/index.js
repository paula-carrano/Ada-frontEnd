import React from "react";

import "./nav.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <NavLink exact to="/" activeClassName="selected" className="nav-item px-2">Home</NavLink>
                        <NavLink to="/shop" activeClassName="selected" className="nav-item px-2">Compras</NavLink>
                        <NavLink to="/offers" activeClassName="selected" className="nav-item px-2">Ofertas</NavLink>
                        <NavLink to="/contact" activeClassName="selected" className="nav-item px-2">Contacto</NavLink>
                        <NavLink to="/login" activeClassName="selected" className="nav-item px-2">Login</NavLink>
                    </ul>
                </div>
            </div>
        </nav>)
};