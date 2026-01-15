import React from 'react';
import './Navbarbelt.css';
import amazonlogo from '../../../Assets/amazonlogo.jpg';
import india from '../../../Assets/indian.jpg';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

const Navbarbelt = () => {

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="navbarbelt">
      {/* LEFT SECTION */}
      <div className="leftnavbelt">
        {/* LOGO */}
        <Link to={'/'} className="leftnavbeltlogo">
          <img
            className="amazonlogoNavbar"
            src={amazonlogo}
            alt="amazon logo"
          />
          <span className="navbar_inlogo">.in</span>
        </Link>

        {/* LOCATION */}
        <div className="navbarbeltlocation">
          <div className="navbarbeltlocationimg">
            <LocationOnOutlinedIcon
              className="navbarbeltlocationimgicon"
              sx={{ fontSize: 22 }}
            />
          </div>

          <div className="navbarbeltlocationplace">
            <div className="navbarbeltlocationtop">
              Delivering to Agra 282007
            </div>
            <div className="navbarbeltlocationbottom">
              Update location
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH BOX */}
      <div className="navbarbeltsearchbox">
        <div className="navbarbeltsearchdiv">
          <div className="navbarbeltsearchboxall">
            <div className="navbarbeltsearchboxalltext">All</div>
            <ArrowDropDownOutlinedIcon sx={{ fontSize: 20 }} />
          </div>

          <input
            type="text"
            className="navbarbeltinputsearchbox"
            placeholder="Search Amazon.in"
          />

          <div className="searchiconnavbarbelt">
            <SearchIcon
              className="searchiconnavbarbelticon"
              sx={{ fontSize: 26 }}
            />
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="rightsidenavbelt">
        {/*LAGUAGE*/ }
        <div className="indianflagcode">
          <img
            src={india}
            alt="India flag"
            className="indiaflag"
          />
          <div className="indiacodenavbarbelt">
            EN
            <ArrowDropDownOutlinedIcon
              className="indiacodenavbarbeltdrop"
              sx={{ fontSize: 16, marginTop: 1, marginLeft:-0.4}}
            />
          </div>
           {/* HELLO / ACCOUNT */}
          <div className ="hellosigninnavbaebelt">
            <div className="hellotopnavbarbelt">Hello,User</div>
            <div className="indiacodenavbarbelt">Accounts & Lists</div>
          </div>
        </div>
          {/* RETURNS */}
        <div className="hellosigninnavbaebelt">
          <div className="hellotopnavbarbelt">Returns</div>
          <div className="indiacodenavbarbelt">& Orders</div>
        </div>
        
        <div className="hellosigninnavbaebelt">
          <span className="cartitemnumbernavbarbelt">{cartItems.length}</span>
          <Link to={'/cart'} className="hellotopnavbarbelt">
            <ShoppingCartOutlinedIcon/>
            <span className="carttitle">Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbarbelt;
