import React, { Component } from 'react';

class Admin extends Component {
    state = {
        reservations: []
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
        let reservations = data.map((reservation) => <li key={reservation.id}>{reservation.date}{reservation.time}{reservation.participants}
        </li>);
        this.setState({ reservations: reservations })
        console.log(reservations)

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