import React, { Component } from 'react';
import '../App.css';
import Form from './Form';
import Admin from './Admin';
import Header from './Header';


class App extends Component {
  state = {

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
      <div className="wrapper">
        <Header />
        <Form />
        <Admin />
      </div>
    );
  }
}

export default App;
