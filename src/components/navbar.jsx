import React, { Component } from 'react';

// SFC
const NavBar = ({totalCounters}) => {
    //bootstrap navbar 😎

    //can't use LS Hooks bcase sfc

    console.log('NavBar - Rendered!');

    return (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Shopping Cart Concept <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </div>
    </nav>
    
    );
};

export default NavBar;