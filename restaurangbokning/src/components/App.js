import React, { Component } from 'react';
import '../App.css';
import Guest from './Guest';
import Admin from './Admin';
import Header from './Header';
import ErrorMessage from './ErrorMessage';
import ChangeReservationForm from './ChangeReservationForm';
import {
  Route,
  Switch
} from 'react-router-dom';


class App extends Component {
  state = {
    errorMessage: false
  }

  openErrorMessage = () => {
    console.log('openerror works');
    this.setState({errorMessage: true});
  }


  fetchGuests = () => {
    fetch('http://localhost:8888/fetchGuests.php')
      .then((response) => response.json())
      .then((guests) => {
        console.log(guests);
      })
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <Header openErrorMessage={this.openErrorMessage}/>
          {this.state.errorMessage ? <ErrorMessage /> : ( null ) }
        <Switch>
          <Route exact path="/admin" render={(props) => <Admin {...props} openErrorMessage={this.openErrorMessage}/>}/>
          <Route exact path="/" render={(props) => <Guest {...props} openErrorMessage={this.openErrorMessage}/>} openErrorMessage={this.openErrorMessage}/>
          <Route exact path="/changeReservationForm" component={ChangeReservationForm} openErrorMessage={this.openErrorMessage}/>
        </Switch>
        </div>
		
      </div >
    );
  }

}

export default App;
