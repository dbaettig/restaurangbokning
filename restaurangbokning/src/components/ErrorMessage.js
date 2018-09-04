import React, { Component } from 'react';
import '../App.css';
import grumpy from '../images/grumpyError.png'
class ErrorMessage extends Component {

    render() {
        return (
            <div className="errorMessage">
                <img src={grumpy} alt="errormessage"></img>
                <p>There was an error</p>
                <button onClick={() => { window.location.reload(true); }}>Ok</button>
            </div>
        )
    }
}

export default ErrorMessage;