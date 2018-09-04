import React, { Component } from 'react';
import '../App.css';

class ErrorMessage extends Component {
	
    render() {
        return (
            <div className="errorMessage">
                <p>Oops something went wrong!</p>
				<button onClick={() => {window.location.reload(true); }}>Ok</button>
            </div>
        )
    }   
}

export default ErrorMessage;