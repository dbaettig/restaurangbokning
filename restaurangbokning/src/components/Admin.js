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
                console.log(data);
            })
            .catch(error => {this.handleErrorMessage(); this.handleLoader();});
    }

    displayReservations = (data) => {
		let sortedData = data.sort((a, b) => {
    					let dateA = new Date(a.date), dateB = new Date(b.date);
						return dateA - dateB;
						});
        let reservations = sortedData.map((reservation) =>
            <div key={reservation.resId}>
                {reservation.date} {reservation.time} {reservation.participants} people <br /> {reservation.firstName} {reservation.lastName}
                <button name={reservation.resId} onClick={this.deleteReservation}>Delete reservation</button>
                <button name={reservation.resId} onClick={() => {this.openChangeReservationForm(reservation)}}>Change reservation</button> 
				<button onClick={() => {this.openChangeGuestForm(reservation)}}>Change guest</button> 
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
    }

	changeGuest = (event) => {
        event.preventDefault();
		let postData = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			phone: this.state.phone,
			email: this.state.email,
			id: this.state.id
		}
		let formValues = JSON.stringify(postData);
		fetch('http://localhost:8888/changeGuest.php?formData=' + formValues, {
			method: 'GET',
			headers:
			{
				'Accept': 'application/json',
				'Content-type': 'text/plain',
			}
		})
			.then((response) => {
				window.location.assign("/admin");
			})
			.catch(error => this.props.handleErrorMessage());	
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
				{this.state.changeReservationForm && <ChangeReservationForm 
				 appState={this.props.appState} 
				 handleChange={this.props.handleChange}
				 fetchDate={this.props.fetchDate}
				 changeReservation={this.props.changeReservation} closeChangeReservationForm={this.closeChangeReservationForm}
				 showButtonForChangeRes={this.props.showButtonForChangeRes} />}

				{this.state.changeGuestForm && <ChangeGuestForm handleChange={this.handleChange} state={this.state} closeChangeGuestForm={this.closeChangeGuestForm} changeGuest={this.changeGuest}/>}

				{!this.state.changeReservationForm && !this.state.changeGuestForm && <div className="displayBookings">
							{this.state.reservations}
				 </div>}
            </div>
        );
    }
}

export default Admin;