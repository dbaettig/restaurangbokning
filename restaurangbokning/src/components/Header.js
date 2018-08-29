import React, { Component } from 'react';
import '../App.css';
import {
  NavLink
} from 'react-router-dom';
import ReactLoading from 'react-loading';

class Header extends Component {


    render() {
        return (

            <div>
                <div>
					<ul>
                        <li> <NavLink activeClassName="linkIsActive" exact={true} to="/">GUEST</NavLink> </li>
                        <li> <NavLink activeClassName="linkIsActive" to="/admin">ADMIN</NavLink> </li>
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