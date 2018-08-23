import React, { Component } from 'react';

class Guest extends Component {
	state = {
		date: "",
		participants: "",
		response: {},
		firstSitting: false,
		secondSitting: false,
		chosenSitting: "",
		showGuestForm: false,
		firstName: "",
		lastName: "",
		phone: "",
		email: ""
	}

	fetchDate = (event) => {
		event.preventDefault();
		let formValues = JSON.stringify(this.state);
		console.log(this.state);

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
				this.countReservations(time);
			})
	}

	countReservations = (time) => {
		this.setState({ response: time });
		let firstTime = time.filter(sitting => sitting.time === "18:00:00");
		let secondTime = time.filter(sitting => sitting.time === "21:00:00");

		if (firstTime.length < 15) {
			this.setState({
				firstSitting: true
			})
		}
		if (secondTime.length < 15) {
			this.setState({
				secondSitting: true
			})
		}
	}

	showGuestForm = (event) => {
		this.setState({
			showGuestForm: true
		})
	}

	postGuestAndReservation = (event) => {
		event.preventDefault();
		let formValues = JSON.stringify(this.state);
		console.log(formValues);
		fetch('http://localhost:8888/postGuestAndReservation.php?formData=' + formValues, {
			method: 'GET',
			headers:
			{
				'Accept': 'application/json',
				'Content-type': 'text/plain',
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
			<div className="formWrapper">

				{this.state.showGuestForm ? (
					<div>
						<p>You have chosen {this.state.date}, at {this.state.chosenSitting} PM for {this.state.participants} people.</p>
						<form method="POST" className="dateForm" onSubmit={this.postGuestAndReservation}>
							<input type="text" name="firstName" placeholder="first name" onChange={this.handleChange} />
							<input type="text" name="lastName" placeholder="last name" onChange={this.handleChange} />
							<input type="text" name="phone" placeholder="phone number" onChange={this.handleChange} />
							<input type="text" name="email" placeholder="email" onChange={this.handleChange} />
							<button type="submit">BOOK</button>
							<button onClick={(event) => { window.location.reload(); }}>Cancel</button>
						</form>
					</div>
				) : (
						<div>
							<form method="POST" className="dateForm" onSubmit={this.fetchDate}>
								<input type="number" min="1" max="6" required name="participants" placeholder="2 People" onChange={this.handleChange} />
								<input type="date" name="date" onChange={this.handleChange} />
								<button type="submit" value="submit">SEARCH AVAILABILITY</button>
							</form>

							<div className="timeButtons">
								<p>Available sittings:</p>
								{this.state.firstSitting ? (
									<button name="chosenSitting" value="06:00:00" onClick={(event) => { this.handleChange(event); this.showGuestForm(); }}>
										06:00</button>


								) : (
										<p>There are no available tables at 06:00 PM.</p>)
								}
								{this.state.secondSitting ? (
									<button name="chosenSitting" value="09:00:00" onClick={(event) => { this.handleChange(event); this.showGuestForm(); }}>
										09:00</button>


								) :
									(<p>There are no available tables at 09:00 PM.</p>)
								}
							</div>

						</div>
					)}

			</div>
		);
	}
}

export default Guest;