import React, { Component } from 'react';
import '../App.css';
import Form from './Form';
import Admin from './Admin';
import Header from './Header';
import Menu from './Menu';

import Footer from './Footer';


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
      <div className="wrapper">
        <Header openAdmin={this.openAdmin} admin={this.state.admin} />
        <Menu />
        {this.state.admin ? <Admin /> : <Form />}
        <Footer />
      </div>
    );
  }

}

export default App;
