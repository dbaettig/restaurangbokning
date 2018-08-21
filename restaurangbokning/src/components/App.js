import React, { Component } from 'react';
import '../App.css';
import Form from './Form';
import Admin from './Admin';
import Header from './Header';


class App extends Component {
  state = {
    admin: false

  }

  fetchGuest = () => {
    fetch('http://localhost:8888/fetchGuest.php')
      .then((response) => response.json())
      .then((guest) => {
        console.log(guest);
        this.setState({ guest: guest[0] });

      })
  }

  openAdmin = () => {
    this.setState({admin: !this.state.admin});
    console.log(this.state.admin);
  }



  render() {
    return (
      <div className="wrapper">
        <Header openAdmin = {this.openAdmin} admin = {this.state.admin}/>
      
        {this.state.admin ? (<Admin />) : (
                            <Form /> 
        )}

      </div>
    );
  }
}

export default App;
