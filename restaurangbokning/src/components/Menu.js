import React, { Component } from 'react';
import menu from '../images/menu.png'
import '../App.css';


class Menu extends Component {

    render() {
        return (

            <div>
                <div className="menu">
                    <img src={menu} alt={"menu"} />
                </div>
            </div>
        )

    }
}

export default Menu;