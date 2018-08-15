import React, { Component } from 'react';
import '../App.css';


class App extends Component {

  componentDidMount() {
    /** 
     * When Component is "ready", call the function 
     * that will fetch the data and store it in state
     */
    this.fetchWeather();

  }


  fetchWeather = () => {
    fetch('http://localhost:8888/test.php')
      .then((response) => response.json())
      .then((reservations) => {
        /** Key is this.state.playlist
         *  value is array fetched from API
         *  App.state.playlists = playlists
         *  if key and value variable have the same name -> combine
         *  We do not need to output to HTML here, React will do it for us
         */
        console.log(reservations);
      })
  }



  render() {
    return (
      <div>
        jejjeje
      </div>
    );
  }
}

export default App;
