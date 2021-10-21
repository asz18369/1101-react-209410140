import React from "react";
import {Link} from 'react-router-dom'

import { ReactComponent as Logo } from "../assets/crown.svg";
import './Header_40.scss'

const Header_40 = () => {
    return (
        <div>
            <div className="header">
                <Link to="/" className="logo-container">
                    <Logo />
                </Link>
                <div className="options">
                    <Link to="./shop_40" className="option">Shop</Link>
                    <Link to="/contact_40" className="option">Contact</Link>
                    <Link to="/signin_40" className="option">Sign In</Link>
                    <div className="cart-icon" onclick="cartToggle()">
                        <img className="shopping-icon" src="./assets/shopping-bag.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header_40;