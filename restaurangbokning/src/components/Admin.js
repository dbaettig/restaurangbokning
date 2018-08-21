import React, { Component } from 'react';

class Admin extends Component {
    state = {
        reservations: [],
        reservationId: "",
        changeReservationForm: false,
        participants: ""
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
        console.log(data);
        let reservations = data.map((reservation) => <div key={reservation.resId}> Datum: {reservation.date} {reservation.time}
            {reservation.participants} {reservation.firstName} ID: {reservation.resId}
            <button name={reservation.resId} onClick={this.deleteReservation}>Delete</button>
			<button name={reservation.resId} onClick={this.openChangeForm}>Change</button></div>);

        this.setState({ reservations: reservations })
    }
	
	openChangeForm = (event) => {
        this.setState({reservationId: event.target.name});
        this.setState({changeReservationForm: true});

	}

    changeReservation = (event) => {
        event.preventDefault();
        
        let formValues = JSON.stringify(this.state);
        
        console.log(this.state);
        
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

	handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state.participants);

	}

    render() {
		let styling = 'hidden';
		{this.state.changeReservationForm ? (styling += "display") : (styling = 'hidden')}
        return (
			<div>
			<form method="POST" className={'changeForm ' +  styling}>
				<input type="number" min="1" max="6" name="participants" placeholder="2 People" onChange={this.handleChange} />
				<button type="submit" value="submit" onClick={this.changeReservation}>Change</button>
			</form>
			
            <div className="displayBookings">

                {this.state.reservations}

            </div>
			</div>

        );
    }


}


export default Admin;