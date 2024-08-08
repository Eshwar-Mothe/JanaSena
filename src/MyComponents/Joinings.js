import React from 'react'
import './Reg.css'
import './home.css'
import { Link } from 'react';

export const Joinings = () => {
    return (
        <>
            <div id="background-main">
                <div class="logo">
                    <aside>
                        <img
                            src="https://1000logos.net/wp-content/uploads/2022/12/Jana-Sena-Logo.png"
                            alt="logo"
                        />
                    </aside>
                </div>
                <div class="nav-bar">
                    <Link to="/">Home </Link><span> | </span>
                    <Link to="/registration.html">Joinings</Link><span> | </span>
                    <Link to="/">Activities </Link><span> | </span>
                    <Link to="/">About &nbsp;</Link>
                </div>
            </div>
            <h1 class="head">Telanagana State JanaSena Party Membership Program</h1>
            <p class="select">Select Your District</p>

            <div class="flex-container">
                {/*  */}
            </div>
        </>
    )
};
