import React, { Component } from 'react';
import '../App.css';
import greendish from '../images/greendish.jpg'
import whitedish from '../images/whitedish.jpg'

class Contact extends Component {

	render() {
		return (
			<div className="contact">
				<h2>Say Hello!</h2>
				<p>
					The Greenery <br />
					Tulegatan 41 <br />
					113 53 Stockholm <br />
					08-123 95 99
				</p>

				<img src={greendish} />
				<img src={whitedish} />

			</div>
		)
	}
}

export default Contact;