import React, { Component } from 'react';

class Admin extends Component {
    state = {
        reservations: [],
        reservationId: ""
    }


    componentDidMount() {
        this.fetchReservations();
    }

    fetchReservations = () => {
        fetch('http://localhost:8888/fetchReservations.php')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.displayReservations(data);
            })
    }


    displayReservations = (data) => {
        let reservations = data.map((reservation) => <li key={reservation.id}>{reservation.date}{reservation.time}
            {reservation.participants}
            <button name={reservation.id} onClick={this.deleteReservation}>Delete</button></li>);

        this.setState({ reservations: reservations })
    }

    deleteReservation = (event) => {
        console.log(event.target);

        fetch('http://localhost:8888/deleteReservation.php?formData=' + event.target.name, {
            method: 'GET',
            headers:
            {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            }
        })

    }

    render() {

        return (
            <div>
                <ul>{this.state.reservations}</ul>

            </div>

        );
    }


}


export default Admin;