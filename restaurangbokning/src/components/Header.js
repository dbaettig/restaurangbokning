import React, { Component } from 'react';
import '../App.css';

class Header extends Component {

    render() {
        return (

            <div>
                <button className="adminButton" onClick={this.props.openAdmin}>{this.props.admin ? "Guest" : "Admin"}</button>
                <header><h2>BOKA BORD</h2>
                </header>
            </div>
        )

    }
}

export default Header;