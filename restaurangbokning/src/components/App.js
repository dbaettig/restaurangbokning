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

  handleErrorMessage = () => {
    console.log('openerror works');
    this.setState({errorMessage: !this.state.errorMessage});
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
			  <Header />
			  {this.state.errorMessage ? 
				<ErrorMessage handleErrorMessage={this.handleErrorMessage}/> : ( null ) 
			  }
			<Switch>
				  <Route exact path="/admin" render={(props) => <Admin {...props} handleErrorMessage={this.handleErrorMessage}/>}/>
				  <Route exact path="/" render={(props) => <Guest {...props} handleErrorMessage={this.handleErrorMessage}/>} handleErrorMessage={this.handleErrorMessage}/>
				  <Route exact path="/changeReservationForm" component={ChangeReservationForm}/>
			</Switch>
        </div>
      </div >
    );
  }

}

export default App;
