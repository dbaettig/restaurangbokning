import React, { Component } from 'react';

class Admin extends Component {
    state = {
        reservations: [],
        reservationId: "",
		changeReservationForm: false
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
		/*const urls = [
   'http://localhost:8888/fetchReservations.php',
   'http://localhost:8888/fetchGuest.php'
  ];

  // use map() to perform a fetch and handle the response for each url
  Promise.all(urls.map(url =>
   fetch(url)
   .then((response) => response.json())
  ))
  .then(data => {
   // do something with the data
   console.log(data)
  })*/

    }


    displayReservations = (data) => {
        let reservations = data.map((reservation) => <div key={reservation.id}> Datum: {reservation.date} {reservation.time}
            {reservation.participants} {reservation.firstName}
            <button name={reservation.id} onClick={this.deleteReservation}>Delete</button>
			<button name={reservation.id} onClick={this.changeReservation}>Change</button></div>);

        this.setState({ reservations: reservations })
    }
	
	changeReservation = (event) => {
		this.setState({reservationId: event.target.name});
		
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
        window.location.reload(true)

    }

    render() {
		let styling = 'hidden';
		{this.state.changeReservationForm ? (styling += "display") : (styling = 'hidden')}
        return (
			<div>
			<form method="POST" className={styling}>
				<input type="number" min="1" max="6" name="participants" placeholder="2 People" onChange={this.handleChange} />
				<input type="date" name="date" onChange={this.handleChange} />
				<button type="submit" value="submit">BOOK</button>
			</form>
			
            <div className="displayBookings">

                {this.state.reservations}

            </div>
			</div>

        );
    }


}


export default Admin;