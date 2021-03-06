import React, { Component } from 'react';
import '../App.css';

class ChangeReservationForm extends Component {

	render() {
		let buttonStyle = 'hidden';
		this.props.appState.buttonStyle ? buttonStyle = 'display' : buttonStyle = 'hidden';
		let today = new Date().toJSON().slice(0, 10);

        return (
            <div className="wrapper">
				<div className="formWrapper">
					{this.props.appState.showButtonForChangeRes ? (
						<div className="changeRes">		
							<p>Change the reservation to {this.props.appState.participants} people at {this.props.appState.chosenSitting} pm on {this.props.appState.date}.</p>
							<button onClick={this.props.changeReservation}>Change</button>
						</div>
					) : (
						<div>
							<form method="POST" className="dateForm" onSubmit={this.props.fetchDate}>
								<h2>Change reservation</h2>
								<p>
									Your previous reservation:<br />
									{this.props.appState.participants} people
									for {this.props.appState.date} at {this.props.appState.chosenSitting} pm.
								</p>
								<p>Change reservation:</p>
								<input type="number" min="1" max="6" name="participants" placeholder={this.props.appState.participants} onChange={this.props.handleChange} />
								<input type="date" required min={today} placeholder={this.props.appState.date} name="date" onChange={this.props.handleChange} />
								<button type="submit" value="submit">Search Availability</button><br />
								<button onClick={() => {window.location.assign("/admin");}}>Cancel</button>
							</form>

							<div className={"timeButtons " + buttonStyle}>
								<p>Available sittings:</p>
								{this.props.appState.firstSitting ? (
									<button name="chosenSitting" value="06:00" onClick={(event) => { this.props.handleChange(event); this.props.showButtonForChangeRes(); }}>
										06:00</button>
								) : (<p>There are no available tables at 06:00 PM.</p>)
								}
								{this.props.appState.secondSitting ? (
									<button name="chosenSitting" value="09:00" onClick={(event) => { this.props.handleChange(event); this.props.showButtonForChangeRes(); }}>
										09:00</button>
								) :
									(<p>There are no available tables at 09:00 PM.</p>)
								}
							</div>
						</div>
						)}
				</div>	
			</div>
        )
    }

}

export default ChangeReservationForm;