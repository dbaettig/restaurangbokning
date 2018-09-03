import React, { Component } from 'react';
import '../App.css';
import menu from '../images/menu.png'

class ImageModal extends Component {

    state = {
        showModal: false
    };


    setModalState = () => {
        this.setState({
            showModal: true
        });
    }



    render() {
        return (
            <div>
                <div className="modal">
                    <img src={menu} alt={"menu"} onClick={this.setModalState} />
                </div>
            </div>

        )
    }
}
export default ImageModal;