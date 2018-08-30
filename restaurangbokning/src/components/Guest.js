import React, { Component } from 'react';

class Guest extends Component {
	state = {
		date: "",
		participants: "",
		buttonStyle: false,
		firstSitting: false,
		secondSitting: false,
		chosenSitting: "",
		showGuestForm: false,
		showConfirmation: false,
		guestId: "",
		firstName: "",
		lastName: "",
		phone: "",
		email: ""
	}

	fetchDate = (event) => {
		event.preventDefault();
		this.props.handleLoader();
		let formValues = JSON.stringify(this.state);
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
				this.props.handleLoader();
				this.countReservations(time);
				this.setState({buttonStyle: true});
			})
			.catch(error => this.props.handleErrorMessage());
	}

	countReservations = (time) => {
		let firstTime = time.filter(sitting => sitting.time === "06:00");
		let secondTime = time.filter(sitting => sitting.time === "09:00");

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

	fetchGuestId = (event) => {
		event.preventDefault();
		this.props.handleLoader();
		let formValues = JSON.stringify(this.state);
		fetch('http://localhost:8888/fetchGuestId.php?formData=' + formValues, {
			method: 'GET',
			headers:
			{
				'Accept': 'application/json',
				'Content-type': 'text/plain',
			}
		})
		.then((response) => response.json())
		.then((guestId) => {
			this.props.handleLoader();
			this.checkIfIdExists(guestId);
		})
        .catch(error => this.props.handleErrorMessage());
	}

	checkIfIdExists = (guestId) => {
		console.log('check if id');
		if(guestId.length === 0){
			this.postGuestAndReservation();
		}
		else {
			this.setState({guestId: guestId[0].id});
			this.postReservation();
		}
	}

	postReservation = () => {
		this.props.handleLoader();
		let formValues = JSON.stringify(this.state);
		console.log('user existed');
		fetch('http://localhost:8888/postReservation.php?formData=' + formValues, {
			method: 'GET',
			headers:
			{
				'Accept': 'application/json',
				'Content-type': 'text/plain',
			}
		})
			.then((response) => {
				this.props.handleLoader();
			})
			.catch(error => this.props.handleErrorMessage());
		this.setState({showConfirmation: true});
	}

	postGuestAndReservation = () => {
		this.props.handleLoader();
		let formValues = JSON.stringify(this.state);
		fetch('http://localhost:8888/postGuestAndReservation.php?formData=' + formValues, {
			method: 'GET',
			headers:
			{
				'Accept': 'application/json',
				'Content-type': 'text/plain',
			}
		})
			.then((response) => {
				this.props.handleLoader();
			})
			.catch(error => this.props.handleErrorMessage());
		this.setState({showConfirmation: true});
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}


	render() {
		//Getting todays daye to use in the date picker in the guestform.
		let today = new Date().toJSON().slice(0,10);
		
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

									<form method="POST" className="dateForm" onSubmit={this.fetchGuestId}>
										<input type="text" required name="firstName" placeholder="first name" onChange={this.handleChange} />
										<input type="text" required name="lastName" placeholder="last name" onChange={this.handleChange} />
										<input type="text" required name="phone" placeholder="phone number" onChange={this.handleChange} />
										<input type="text" required name="email" placeholder="email" onChange={this.handleChange} />
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
								<input type="date" required min={today} name="date" onChange={this.handleChange} />
								<button type="submit" value="submit">SEARCH AVAILABILITY</button>
							</form>
					
							<div className={"timeButtons " + buttonStyle}>
								<p>Available sittings:</p>
								{this.state.firstSitting ? (
									<button name="chosenSitting" value="06:00" onClick={(event) => { this.handleChange(event); this.showGuestForm(); }}>
										06:00</button>
								) : (<p>There are no available tables at 06:00 PM.</p>)
								}
								{this.state.secondSitting ? (
									<button name="chosenSitting" value="09:00" onClick={(event) => { this.handleChange(event); this.showGuestForm(); }}>
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