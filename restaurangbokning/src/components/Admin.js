import React, { Component } from 'react';
import {
    Link,
    Route
} from 'react-router-dom';
import ChangeReservationForm from './ChangeReservationForm';


class Admin extends Component {
    state = {
        changeReservationForm: false,
        reservations: [],
        reservationId: "",
        participants: ""
    }

    componentDidMount() {
        this.fetchReservations();
        console.log('hej')

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
        console.log('close');
        this.setState({
            changeReservationForm: false
        });
        //this.fetchReservations();
    }

    changeReservation = (event) => {
        event.preventDefault();
        console.log('skicka ändringar');
        let formValues = JSON.stringify(this.state);

        fetch('http://localhost:8888/updateReservation.php?formData=' + formValues, {
            method: 'GET',
            headers:
            {
                'Accept': 'application/json',
                'Content-type': 'text/plain',
            }
        })
            .then((response) => {
                console.log("hejsan");
			
            })

        //sedn to /admin url
    }

    deleteReservation = (event) => {
        console.log('delete');
        fetch('http://localhost:8888/deleteReservation.php?formData=' + event.target.name, {
            method: 'GET',
            headers:
            {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        })


    }

    handleChange = (event) => {
        console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {

        return (
            <div>
                {this.state.changeReservationForm ? <ChangeReservationForm handleChange={this.handleChange} changeReservation={this.changeReservation} closeChangeForm={this.closeChangeForm} /> :

                    <div className="displayBookings">

                        {this.state.reservations}
                    </div>

                }
                {/* <Route path="/admin" component={Admin} />
                    <Link to="/admin">ADMIN</Link> */}
            </div>

        );
    }

}


export default Admin;