import React, { Component } from 'react';

class Guest extends Component {

	render() {
		//Getting todays daye to use in the date picker in the guest form.
		let today = new Date().toJSON().slice(0, 10);
		let buttonStyle = 'hidden';
		this.props.state.buttonStyle ? buttonStyle = 'display' : buttonStyle = 'hidden';

		return (
			<div className="formWrapper">
				{this.props.state.showGuestForm ? (
					<div>
						{this.props.state.showConfirmation ? (
							<div>
								<p>Thank you for your reservation {this.props.state.firstName} {this.props.state.lastName}. You have booked {this.props.state.date}, at {this.props.state.chosenSitting} PM for {this.props.state.participants} people. </p>
								<button onClick={(event) => { window.location.assign("/"); }}>Ok</button>
							</div>
						) : (
								<div>
									<div>
										<p>You have chosen {this.props.state.date}, at {this.props.state.chosenSitting} PM for {this.props.state.participants} people.</p>
										<p>By entering your personal information you agree that we can store data regarding your booking.</p>
									</div>

									<form method="POST" className="dateForm" onSubmit={this.props.fetchGuestId}>
										<input type="text" required name="firstName" placeholder="first name" onChange={this.props.handleChange} />
										<input type="text" required name="lastName" placeholder="last name" onChange={this.props.handleChange} />
										<input type="text" required name="phone" placeholder="phone number" onChange={this.props.handleChange} />
										<input type="text" required name="email" placeholder="email" onChange={this.props.handleChange} />
										<button type="submit">Book</button>
									</form>
									<div className="cancelButtonWrapper">
										<button id="cancelButton" onClick={(event) => { window.location.assign("/"); }}>Cancel</button>
									</div>
								</div>
							)}
					</div>
				) : (
						<div>
							
							<form method="POST" className="dateForm" onSubmit={this.props.fetchDate}>
								<h2>Make a reservation</h2>
								<input type="number" min="1" max="6" required name="participants" placeholder="2 People" onChange={this.props.handleChange} />
								<input type="date" required min={today} name="date" onChange={this.props.handleChange} />
								<button type="submit" value="submit">Search Availability</button>
							</form>

							<div className={"timeButtons " + buttonStyle}>
								<p>Available sittings:</p>
								{this.props.state.firstSitting ? (
									<button name="chosenSitting" value="06:00" onClick={(event) => { this.props.handleChange(event); this.props.showGuestForm(); }}>
										06:00</button>
								) : (<p>There are no available tables at 06:00 PM.</p>)
								}
								{this.props.state.secondSitting ? (
									<button name="chosenSitting" value="09:00" onClick={(event) => { this.props.handleChange(event); this.props.showGuestForm(); }}>
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