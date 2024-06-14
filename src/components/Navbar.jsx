import React, { useState, useRef } from 'react';

function Navbar() {
    const sidenavRef = useRef(null);

    const close = () => {
        if (sidenavRef.current) {
            sidenavRef.current.style.right = "-50%";
            sidenavRef.current.style.transition="2s";
        }
    };

    const open = () => {
        if (sidenavRef.current) {
            sidenavRef.current.style.right = "0";
            sidenavRef.current.style.transition="2s";
        }
    };

    return (
        <div>
            <div className="navbar">
                <div className="navbar__s1">
                    <h1 className="navbar__s1--title">Udemy</h1>
                </div>

                <div className="navbar__s2">
                    <i className="fa-solid fa-magnifying-glass" style={{ color: "#080808" }}></i>
                    <input type="text" placeholder="Search for anything here.Tech, Business, Art ..." />
                </div>

                <div className="navbar__s3">
                    <p>Courses</p>

                    <div className="mylearning">
                        <p>My Learning</p>
                        <div className="mylearning__popup">
                            <p>You did not purchase anything</p>
                        </div>
                    </div>

                    <i className="fa-solid fa-cart-shopping" style={{ color: "#000000" }}></i>
                    <i className="fa-solid fa-bell" style={{ color: "#000000" }}></i>
                    <i className="fa-solid fa-user" style={{ color: "#000000" }}></i>
                </div>

                <div className="navbar__s4">
                    <i id="menuicon" className="fa-solid fa-bars" style={{ color: "#000000" }} onClick={open}></i>
                </div>
            </div>

            <nav id="sidenav" ref={sidenavRef} style={{ right: "-50%" }}>
                <div>
                    <p id="closenav" onClick={close}>X</p>
                </div>
                <ul id="sidenav_list">
                    <li><a href="#course">Course</a></li>
                    <li><a href="#most popular">Most Popular</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
