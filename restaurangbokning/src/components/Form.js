import React, { Component } from 'react';

class Form extends Component {
	state = {
		date: "",
		response: {},
		firstTime: false,
		secondTime: false
	}

	fetchDate = (event) => {
		event.preventDefault();
		let formValues = JSON.stringify(this.state);
		
		console.log(formValues);

		fetch('http://localhost:8888/fetchDate.php?formData=' + formValues, {
			method: 'GET',
			headers:
			{
				'Accept': 'application/json',
				'Content-type': 'application/json',
			}
		})
		.then((response) => response.json())
		.then((time) => {
				//this.setState({response: time});
				//this.countReservations(this.state.response);
				this.countReservations(time);
			})
	  }

	handleSubmit = (event) => {
		event.preventDefault();

		let formValues = JSON.stringify(this.state);


		console.log(formValues);

		fetch('http://localhost:8888/postReservations.php?formData=53634' + formValues, {
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

	countReservations = (time) => {
		this.setState({response: time});
		console.log(this.state.response);
		//filtrera till 2 olika arrayer
		let firstTime = time.filter(sitting => sitting.time === "18:00:00");
		let secondTime = time.filter(sitting => sitting.time === "21:00:00");
		console.log(firstTime.length);
		console.log(secondTime.length);

		//räkna dom olika arrayerna


		//sätt state true eller false

	}



	render() {
		return (
			<div>
				<form method="POST" className="form" onSubmit={this.fetchDate}>
					<input type="number" min="1" max="6" name="participants" onChange={this.handleChange} />
					<input type="date" name="date" onChange={this.handleChange} />
					<button type="submit" value="submit">Submit</button>
				</form>
				<p>{this.state.date}</p>
			<p>hej</p>
			</div>)
	}
}
export default Form;