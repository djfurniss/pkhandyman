import React from "react";
import './styles/Header.css';
import logo from './utils/p&k-logo.jpeg';

export default function Header(){
    return(
        <div id="Header" className="row">
            <img src={logo} alt="logo"/>
            <div id="text-container" className="row">
                    <h1>P&K Handyman Services</h1>
                    <div className="row">
                        <p>Home</p>
                        <p>Services</p>
                        <p>Get a Quote</p>
                    </div>
            </div>
        </div>
    )
};