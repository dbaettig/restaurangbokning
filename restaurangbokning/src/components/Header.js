import React, { Component } from 'react';
import '../App.css';
import adminLogo from '../images/adminLogo.svg'

class Header extends Component {

    render() {
        return (

            <div>
                <button className="adminButton" onClick={this.props.openAdmin}>{this.props.admin ? "Guest" : "Admin"}</button>
                <header><h1> The Greenery </h1>
                </header>
            </div>
        )

    }
}

export default Header;