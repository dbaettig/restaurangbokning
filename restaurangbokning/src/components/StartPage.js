import React, { Component } from 'react';
import '../App.css';

class StartPage extends Component {

    render() {
        return (
            <div>
                <h1>This is the startpage</h1>
				<p>
					OPENING HOURS<br/>
					Monday - Thursday 6pm-11pm
					<br/>
					Friday - Sunday 6pm-12pm
					<br/>
					Closed for most major holidays
				</p>
            </div>
        )
    }
}

export default StartPage;