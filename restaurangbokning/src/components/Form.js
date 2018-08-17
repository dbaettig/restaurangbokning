import React, { Component } from 'react';

class Form extends Component {
	state = {
		participants: "",
		guestId: "",
		date: "",
		time: "",
		name: "",
		phone: "",
		email: ""
	}

	fetchDate = (event) => {
		event.preventDefault();
		fetch('http://localhost:8888/fetchDate.php?date=' + this.state.date)
		  .then((response) => response.json())
		  .then((response) => {
			console.log(response);


		  })
	  }

	handleSubmit = (event) => {
		event.preventDefault();

		let formValues = JSON.stringify(this.state);


		console.log(formValues);

		fetch('http://localhost:8888/postReservations.php?formData=' + formValues, {
			method: 'GET',
			headers:
			{
				'Accept': 'application/json',
				'Content-type': 'application/json',
			}
		})
			.then((response) => {
				console.log(response);
			})
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}



	render() {
		return (
			<div>
				<form method="GET" className="form" onSubmit={this.fetchDate}>
					<input type="number" min="1" max="6" name="participants" onChange={this.handleChange} />
					<input type="date" name="date" onChange={this.handleChange} />
					<button type="submit" value="submit">Submit</button>
				</form>
			</div>)
	}
}
export default Form;