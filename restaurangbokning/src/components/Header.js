import React, { Component } from 'react';
import '../App.css';
import {
  NavLink
} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <div>
                <div>
					<ul>
						<li> <NavLink activeClassName="linkIsActive" exact={true} to="/">Start</NavLink> </li>
                        <li> <NavLink activeClassName="linkIsActive" exact={true} to="/guest">Make a reservation</NavLink> </li>
						<li> <NavLink activeClassName="linkIsActive" exact={true} to="/contact">Contact</NavLink> </li>
                        <li> <NavLink activeClassName="linkIsActive" to="/admin">Admin</NavLink> </li>
					</ul>
				</div>
                <header>
                    <h2>BOKA BORD</h2>
                </header>   

            </div>
        )
    }
}

export default Header;