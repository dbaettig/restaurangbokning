import React, { Component } from 'react';
import '../App.css';

class ErrorMessage extends Component {
	
    render() {
        return (
            <div className="errorMessage">
                <p>Oops something went wrong!</p>
				<button onClick={(event) => window.location.assign("/")}>Ok</button>
            </div>
        )
    }
    
}


export default ErrorMessage;