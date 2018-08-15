import React, { Component } from 'react';

class Form extends Component {
	state = {
		participants: ""
	}
	

	handleSubmit = (event) => {
		event.preventDefault();
		fetch('fetchReservations.php',{
			method: 'POST',
			body: new FormData(this.state.participants) 
		})
	}
	
	handleChange = (event) => {
		this.setState({[event.target.participants]: event.target.value})
	}
	
	
	
	render () {
		return (
		<div>
			<form method="POST" className="form" onSubmit={this.handleSubmit}>
				<input type="number" name="participants" value={this.state.participants} onChange={this.handleChange} />
				<button type="submit" value="hej"/>
			</form>
		</div>)
	}
}
export default Form;