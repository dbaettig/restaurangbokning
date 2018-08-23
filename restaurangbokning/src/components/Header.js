import React, { Component } from 'react';
import '../App.css';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

class Header extends Component {

    render() {
        return (

            <div>
                <div>
					<ul>
					  <li> <Link to="/admin">ADMIN</Link> </li>
					  <li> <Link to="/guest">GUEST</Link> </li>
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