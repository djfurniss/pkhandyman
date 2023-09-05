import React from "react";
import './styles/Header.css';
import logo from './utils/p&k-logo.jpeg';

export default function Header(){
    return(
        <div id="Header">
            {/* <h2>header</h2> */}
            <img src={logo} alt="logo"/>
        </div>
    )
};