import React, { Component } from 'react';
import '../App.css';
import Form from './Form';


class App extends Component {
  state = {
    reservations: [],
    guest: []
  }

  componentDidMount() {
    /** 
     * When Component is "ready", call the function 
     * that will fetch the data and store it in state
     */
    this.fetchReservations();
    this.fetchGuest();

  }


  fetchReservations = () => {
    fetch('http://localhost:8888/fetchReservations.php')
      .then((response) => response.json())
      .then((reservations) => {
        console.log(reservations);
        this.setState({ reservations: reservations[0] });

      })
  }
  fetchGuest = () => {
    fetch('http://localhost:8888/fetchGuest.php')
      .then((response) => response.json())
      .then((guest) => {
        console.log(guest);
        this.setState({ guest: guest[0] });

      })
  }



  render() {
    return (
      <div>
        <p>{this.state.reservations.date}</p>
        <p>{this.state.reservations.participants}</p>
        
		<Form />
      </div>
    );
  }
}

export default App;
