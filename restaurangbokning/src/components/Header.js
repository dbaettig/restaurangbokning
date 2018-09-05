import React, { Component } from 'react';
import '../App.css';
import Popup from 'reactjs-popup';
import {
    NavLink,
    Link
} from 'react-router-dom';




class Header extends Component {

    render() {
        return (
            <div>

                <div>
                    <ul>
                        <li> <NavLink activeClassName="linkIsActive" exact={true} to="/">Start</NavLink> </li>
                        <li> <NavLink activeClassName="linkIsActive" exact={true} to="/guest">Reservation</NavLink> </li>
                        <li> <NavLink activeClassName="linkIsActive" exact={true} to="/contact">Contact</NavLink> </li>
                        <li> <NavLink activeClassName="linkIsActive" to="/admin">Admin</NavLink> </li>
                    </ul>
                </div>

                <header>
                    <h1><Link to="/">The Greenery</Link></h1>
                </header>

            </div >

        )
    }
}

export default Header;