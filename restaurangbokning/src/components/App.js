import React, { Component } from 'react';
import '../App.css';
import Form from './Form';
import Admin from './Admin';
import Header from './Header';
import ChangeReservationForm from './ChangeReservationForm';
import {
  Link,
  Route
} from 'react-router-dom';


class App extends Component {
  state = {
    admin: false
  }

  fetchGuest = () => {
    fetch('http://localhost:8888/fetchGuest.php')
      .then((response) => response.json())
      .then((guest) => {
        this.setState({ guest: guest[0] });
      })
  }

  openAdmin = () => {
    this.setState({ admin: !this.state.admin });
  }


  render() {
    return (
      <div>
        <div className="wrapper">
          <Header openAdmin={this.openAdmin} admin={this.state.admin} />
          {this.state.admin ? <Admin /> : <Form />}

        </div>
        <div>

        </div>
      </div >
    );
  }

}

export default App;
