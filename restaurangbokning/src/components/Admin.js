import React, { Component } from 'react';
import ChangeReservationForm from './ChangeReservationForm';
import ChangeGuestForm from './ChangeGuestForm';


class Admin extends Component {
    state = {
        changeReservationForm: false,
		changeGuestForm: false,
		reservations: [],
        reservationId: "",
        participants: "",
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		id: ""
		
    }

    componentDidMount() {
        this.fetchReservationsAndGuest();
    }

    fetchReservationsAndGuest = () => {
        this.props.handleLoader();
        
        fetch('http://localhost:8888/fetchReservationsAndGuest.php')
            .then((response) => response.json())
            .then((data) => {
                this.props.handleLoader();
                this.displayReservations(data);
            })
            .catch(error => this.props.handleErrorMessage());
    }

    displayReservations = (data) => {
        let reservations = data.map((reservation) =>
            <div key={reservation.resId}>
                Datum: {reservation.date} {reservation.time} {reservation.participants} {reservation.firstName} ID: {reservation.resId}
                <button name={reservation.resId} onClick={this.deleteReservation}>Delete</button>
                <button name={reservation.resId} onClick={() => {this.openChangeReservationForm(reservation)}}>Change reservation</button> 
				<button onClick={() => {this.openChangeGuestForm(reservation)}}>Change guest info</button> 
            </div>
        );
        this.setState({ reservations: reservations })
    }

    // Form for changing a booking in admin 
    openChangeReservationForm = (reservation) => {
        this.setState({
            changeReservationForm: true
        });
		 this.props.setStateForChangeReservation(reservation.participants, reservation.date, reservation.time, reservation.resId)
    }
	
	 openChangeGuestForm = (reservation) => {
        this.setState({
            changeGuestForm: true,
			reservation: reservation,
			firstName: reservation.firstName,
			lastName: reservation.lastName,
			phone: reservation.phone,
			email: reservation.email,
			id: reservation.id
        });
		 console.log(this.state);
		 
    }

    closeChangeReservationForm = (event) => {
        event.preventDefault();
        this.setState({
            changeReservationForm: false
        });
    }
	closeChangeGuestForm = (event) => {
        event.preventDefault();
        this.setState({
            changeGuestForm: false
        });
		console.log(this.state);
    }

 
	changeGuest = (event) => {
		console.log(this.state);
        event.preventDefault();
		let formValues = JSON.stringify(this.state);
		fetch('http://localhost:8888/changeGuest.php?formData=' + formValues, {
			method: 'GET',
			headers:
			{
				'Accept': 'application/json',
				'Content-type': 'text/plain',
			}
		})
			.then((response) => {
				console.log(response);
				window.location.assign("/admin");
			})
			.catch(error => this.props.handleErrorMessage());
	//Redirect back to admin page.	
    }

    deleteReservation = (event) => {
        fetch('http://localhost:8888/deleteReservation.php?formData=' + event.target.name, {
            method: 'GET',
            headers:
            {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        })
        .catch(error => this.props.handleErrorMessage());
		window.location.assign("/admin");
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
			
			
			{this.state.changeReservationForm && <ChangeReservationForm appState={this.props.appState} handleChange={this.props.handleChange} changeReservation={this.props.changeReservation} closeChangeReservationForm={this.closeChangeReservationForm} />}
			
			{this.state.changeGuestForm && <ChangeGuestForm handleChange={this.handleChange} state={this.state} closeChangeGuestForm={this.closeChangeGuestForm} changeGuest={this.changeGuest}/>}
			
			{!this.state.changeReservationForm && !this.state.changeGuestForm && <div className="displayBookings">
                        {this.state.reservations}
             </div>}
			
				{/* if(this.state.changeReservationForm){
					<ChangeReservationForm handleChange={this.handleChange} changeReservation={this.changeReservation} closeChangeReservationForm={this.closeChangeReservationForm}/>
				} else if(this.state.changeGuestForm){
				 	<ChangeGuestForm handleChange={this.handleChange} closeChangeGuestForm={this.closeChangeGuestForm}/>
				}
			}
		
			
                {this.state.changeReservationForm ? 
					<ChangeReservationForm handleChange={this.handleChange} changeReservation={this.changeReservation} closeChangeReservationForm={this.closeChangeReservationForm}/> :
                    <div className="displayBookings">
                        {this.state.reservations}
                    </div>
                */ }
			
			
			
            </div>
        );
    }
}

export default Admin;