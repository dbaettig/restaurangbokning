import React, { Component } from 'react';
import '../App.css';
import adminLogo from '../images/adminLogo.svg'

class Header extends Component {

    render() {
        return (

            <div>
                <button className="adminButton" onClick={this.props.openAdmin}>{this.props.admin ? <img src={adminLogo} alt={"adminLogo"}></img> : <img src={adminLogo} alt={"adminLogo"}></img>}</button>
                <header><h2>[ Green is the new Black ]</h2>
                </header>
            </div>
        )

    }
}

export default Header;