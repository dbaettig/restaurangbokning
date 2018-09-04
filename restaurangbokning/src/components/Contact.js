import React, { Component } from 'react';
import '../App.css';
import greendish from '../images/greendish.jpg'

class Contact extends Component {

	render() {
		return (
			<div className="contact">
				<h2>Please, contact us!</h2>
				<p>
					Our Restaurant
					Tulegatan 41
					113 53 STOCKHOLM
				</p>
				<p>
					08-123 95 99
				</p>
				<img src={greendish} />
			</div>
		)
	}
}

export default Contact;