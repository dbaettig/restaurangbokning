import React, { Component } from 'react';

class Guest extends Component {
	state = {
		date: "",
		participants: "",
		response: {},
		buttonStyle: false,
		firstSitting: false,
		secondSitting: false,
		chosenSitting: "",
		showGuestForm: false,
		showConfirmation: false,
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
				this.setState({buttonStyle: true});
			})
			.catch(function() {
				alert("Something wnt wrong. Please try again!");
			});
		
	}

	countReservations = (time) => {
		this.setState({ response: time });
		let firstTime = time.filter(sitting => sitting.time === "06:00:00");
		let secondTime = time.filter(sitting => sitting.time === "09:00:00");

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
			.catch(function() {
				console.log("error");
			});
		this.setState({showConfirmation: true});
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}


	render() {
		let buttonStyle = 'hidden';
		this.state.buttonStyle ? buttonStyle = 'display' : buttonStyle = 'hidden';
		
		return (
			<div className="formWrapper">

				{this.state.showGuestForm ? (
					<div>
						{this.state.showConfirmation ? (
								<div>
									<p>Thank you for your reservation {this.state.firstName} {this.state.lastName}. You have booked {this.state.date}, at {this.state.chosenSitting} PM for {this.state.participants} people. </p>
									<button onClick={(event) => { window.location.assign("/"); }}>Ok</button>
								</div>
							 ):(
								<div>
								 	<div>
										<p>You have chosen {this.state.date}, at {this.state.chosenSitting} PM for {this.state.participants} people.</p>
										<p>By entering your personal information you agree that we can store data regarding your booking.</p>
								 	</div>

									<form method="POST" className="dateForm" onSubmit={this.postGuestAndReservation}>
										<input type="text" name="firstName" placeholder="first name" onChange={this.handleChange} />
										<input type="text" name="lastName" placeholder="last name" onChange={this.handleChange} />
										<input type="text" name="phone" placeholder="phone number" onChange={this.handleChange} />
										<input type="text" name="email" placeholder="email" onChange={this.handleChange} />
										<button type="submit">BOOK</button>
									</form>
								 	<button onClick={(event) => { window.location.assign("/"); }}>Cancel</button>
								</div>
							)}
					</div>
				) : (
						<div>
							<form method="POST" className="dateForm" onSubmit={this.fetchDate}>
								<input type="number" min="1" max="6" required name="participants" placeholder="2 People" onChange={this.handleChange} />
								<input type="date" name="date" onChange={this.handleChange} />
								<button type="submit" value="submit">SEARCH AVAILABILITY</button>
							</form>
					
							<div className={"timeButtons " + buttonStyle}>
								<p>Available sittings:</p>
								{this.state.firstSitting ? (
									<button name="chosenSitting" value="06:00:00" onClick={(event) => { this.handleChange(event); this.showGuestForm(); }}>
										06:00</button>
								) : (<p>There are no available tables at 06:00 PM.</p>)
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