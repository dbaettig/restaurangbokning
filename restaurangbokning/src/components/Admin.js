import React, { Component } from 'react';
import ChangeReservationForm from './ChangeReservationForm';


class Admin extends Component {
    state = {
        changeReservationForm: false,
        reservations: [],
        reservationId: "",
        participants: ""
    }

    componentDidMount() {
        this.fetchReservationsAndGuest();
    }

    fetchReservationsAndGuest = () => {
        fetch('http://localhost:8888/fetchReservationsAndGuest.php')
            .then((response) => response.json())
            .then((data) => {
                this.displayReservations(data);
            })
            .catch(error => this.props.openErrorMessage());
    }

    displayReservations = (data) => {
        let reservations = data.map((reservation) =>
            <div key={reservation.resId}>
                Datum: {reservation.date} {reservation.time}{reservation.participants} {reservation.firstName} ID: {reservation.resId}
                <button name={reservation.resId} onClick={this.deleteReservation}>Delete</button>
                <button name={reservation.resId} onClick={this.openChangeForm}>Change</button> 
            </div>
        );
        this.setState({ reservations: reservations })
    }

    // Form for changing a booking in admin 
    openChangeForm = (event) => {
        this.setState({
            reservationId: event.target.name,
            changeReservationForm: true
        });
    }

    closeChangeForm = (event) => {
        event.preventDefault();
        this.setState({
            changeReservationForm: false
        });
    }

    changeReservation = (event) => {
        event.preventDefault();
        let formValues = JSON.stringify(this.state);
        fetch('http://localhost:8888/changesReservation.php?formData=' + formValues, {
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
            .catch(error => this.props.openErrorMessage());
		//Redirect back to admin page.
        window.location.assign("/admin");
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
        .catch(error => this.props.openErrorMessage());
		window.location.assign("/admin");
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                {this.state.changeReservationForm ? 
					<ChangeReservationForm handleChange={this.handleChange} changeReservation={this.changeReservation} closeChangeForm={this.closeChangeForm}/> :
                    <div className="displayBookings">
                        {this.state.reservations}
                    </div>
                }
            </div>
        );
    }
}

export default Admin;