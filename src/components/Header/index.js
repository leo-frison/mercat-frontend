import React from 'react';
import {Link} from 'react-router-dom';
import './index.css';

const Header = (props) => {
    return (
        <div className="header">
            <h1>
                Mercat Tienda
            </h1>
            <button className="headerButton">
                <Link to="/cart">Ver resumen de compra</Link>
            </button>
        </div>
    );
};

export default Header;