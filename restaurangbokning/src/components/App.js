import React, { Component } from 'react';
import '../App.css';


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
        /** Key is this.state.playlist
         *  value is array fetched from API
         *  App.state.playlists = playlists
         *  if key and value variable have the same name -> combine
         *  We do not need to output to HTML here, React will do it for us
         */
        console.log(reservations);
        this.setState({ reservations: reservations[0] });

      })
  }
  fetchGuest = () => {
    fetch('http://localhost:8888/fetchGuest.php')
      .then((response) => response.json())
      .then((guest) => {
        /** Key is this.state.playlist
         *  value is array fetched from API
         *  App.state.playlists = playlists
         *  if key and value variable have the same name -> combine
         *  We do not need to output to HTML here, React will do it for us
         */
        console.log(guest);
        this.setState({ guest: guest[0] });

      })
  }



  render() {
    return (
      <div>
        <p>{this.state.reservations.date}</p>
        <p>{this.state.reservations.participants}</p>
        <p>{this.state.guest.name}</p>
      </div>
    );
  }
}

export default App;
