import React, { Component } from 'react';
import menu from '../images/menu.png'
import '../App.css';


class Menu extends Component {

    state = {
        menu: false
    }

    handleSize = (event) => {
        this.setState({
            menu: !this.state.menu
        });
    }

    render() {
        let menuSize = 'displaySmall';
        this.state.menu ? menuSize = "displayBig" : menuSize = 'displaySmall';
        return (

            <div>
                <div className={menuSize}>
                    <img src={menu} alt={"menu"} onClick={this.handleSize} />
                </div>
            </div >
        )

    }
}

export default Menu;