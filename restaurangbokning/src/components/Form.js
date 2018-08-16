import React, { Component } from 'react';

class Form extends Component {
	state = {
		participants: ""
	}

	handleSubmit = (event) => {
		event.preventDefault();
		/*let fromState = {
			participants: this.state.participants
		}*/
		let formValues = JSON.stringify(this.state)

		console.log(formValues);

		fetch('http://localhost:8888/postReservations.php?formData=' + formValues,{
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
		this.setState({[event.target.name]: event.target.value})
	}
	
	
	
	render () {
		return (
		<div>
			<form method="POST" className="form" onSubmit={this.handleSubmit}>
				<input type="number" min="1" max="6" name="participants" onChange={this.handleChange}/>
				<button type="submit" value="heg">hej</button>
			</form>
		</div>)
	}
}
export default Form;