import React from 'react'
import { NavLink } from 'react-router-dom';
import {useSelector} from "react-redux";
import './Header.css'
import {Link} from "react-router-dom";

export default function Header() {

    const {totalQuantities} = useSelector(state => state.Cartreducer)

  return (

<div className="header">
            <Link to="/">
                <img src="../image/amazon-logo-main.png" className="header-logo" />
            </Link>
            <div className="header-nav">
                <div className=" header-option-main">
                    <span className="header-option-one">Deliver to</span>
                    <span className="header-option-two">
                      <i class="fa fa-map-marker" aria-hidden="true"></i> India</span>
                </div>
                </div>

            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>

            <div className="header-nav">
                <Link to='/login'>
                <div className=" header-option-main">
                    <span className="header-option-one">Hello, Guest</span>
                    <span className="header-option-two">Sign In</span>
                </div>
                </Link>   
                <div className="header-option">
                    <span className="header-option-one">Returns</span>
                    <span className="header-option-two"> & Orders</span>
                </div>

                <div className="header-option">
                    <span className="header-option-one">Your</span>
                    <span className="header-option-two">Prime</span>
                </div>
            </div>

            <Link to="/Cart" className="link">
                <div className="header-option-basket">

                <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                <span className="header-option-two header-basket-count">{totalQuantities}</span>
                </div>
            </Link>
        </div>
  )
}
