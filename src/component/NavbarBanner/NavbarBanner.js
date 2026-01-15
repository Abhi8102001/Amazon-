import React from 'react';
import './NavbarBanner.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';

const NavbarBanner = () => {
    return (
        <div className="navbarbanner">
            <div className="navbarbanneroptionsleft">

                <Link to="/products" className="optionsnavbarbanner">
                    <MenuOutlinedIcon sx={{ fontSize: 24, color: "white" }} />
                    <div className="alloptionsnavbarbanner">All</div>
                </Link>

                <Link to="/products" className="optionsnavbarbanner">
                    <div className="alloptionsnavbarbanner">Fresh</div>
                </Link>

                <Link to="/products" className="optionsnavbarbanner">
                    <div className="alloptionsnavbarbanner">MX Player</div>
                </Link>

                <Link to="/products" className="optionsnavbarbanner">
                    <div className="alloptionsnavbarbanner">Sell</div>
                </Link>

                <Link to="/products" className="optionsnavbarbanner">
                    <div className="alloptionsnavbarbanner">Bestsellers</div>
                </Link>

                <Link to="/products" className="optionsnavbarbanner">
                    <div className="alloptionsnavbarbanner">Mobiles</div>
                </Link>

                <Link to="/products" className="optionsnavbarbanner">
                    <div className="alloptionsnavbarbanner">Today's Deals</div>
                </Link>

                <Link to="/products" className="optionsnavbarbanner">
                    <div className="alloptionsnavbarbanner">Customer Service</div>
                </Link>

                <Link to="/products" className="optionsnavbarbanner">
                    <div className="alloptionsnavbarbanner">Prime</div>
                </Link>

                <Link to="/products" className="optionsnavbarbanner">
                    <div className="alloptionsnavbarbanner">New Releases</div>
                </Link>

                <Link to="/products" className="optionsnavbarbanner">
                    <div className="alloptionsnavbarbanner">Amazon Pay</div>
                </Link>

                <Link to="/products" className="optionsnavbarbanner">
                    <div className="alloptionsnavbarbanner">Fashion</div>
                </Link>

                <Link to="/products" className="optionsnavbarbanner">
                    <div className="alloptionsnavbarbanner">Electronics</div>
                </Link>

                <Link to="/products" className="optionsnavbarbanner">
                    <div className="alloptionsnavbarbanner">Home & Kitchen</div>
                </Link>

                <Link to="/products" className="optionsnavbarbanner">
                    <div className="alloptionsnavbarbanner">Books</div>
                </Link>

            </div>

            <div className="navbarbannerrightside"></div>
        </div>
    );
};

export default NavbarBanner;
