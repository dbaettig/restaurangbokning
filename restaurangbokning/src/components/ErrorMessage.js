import React, { Component } from 'react';
import '../App.css';

class ErrorMessage extends Component {
	
    render() {
        return (
            <div className="errorMessage">
                <p>Oops something went wrong!</p>
            </div>
        )
    }
}

export default ErrorMessage;