import React, { Component } from 'react';

class Admin extends Component {
    state = {
        changeReservationForm: false,
        reservations: [],
        reservationId: "",
        participants: ""
    }

    componentDidMount() {
        this.fetchReservations();

    }

    fetchReservations = () => {
        fetch('http://localhost:8888/fetchReservations.php')
            .then((response) => response.json())
            .then((data) => {
                this.displayReservations(data);
            })

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

    // pop up div form for changing a booking in admin 
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

        fetch('http://localhost:8888/updateReservation.php?formData=' + formValues, {
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

        this.closeChangeForm(event);
        this.fetchReservations();
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

        window.location.reload(true)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        let styling = 'hidden';
        this.state.changeReservationForm ? styling += "display" : styling = 'hidden';

        return (
            <div>
                <form className={'changeForm ' + styling}>
                    <input type="number" min="1" max="6" name="participants" placeholder="2 People" onChange={this.handleChange} />
                    <button type="submit" value="submit" onClick={this.changeReservation}>Change</button>
                    <button onClick={this.closeChangeForm}>Cancel</button>
                </form>

                <div className="displayBookings">
                    {this.state.reservations}
                </div>
            </div>

        );
    }

}


export default Admin;