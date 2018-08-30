import React, { Component } from 'react';
import '../App.css';
import Guest from './Guest';
import Admin from './Admin';
import Header from './Header';
import ErrorMessage from './ErrorMessage';
import ChangeReservationForm from './ChangeReservationForm';
import ChangeGuestForm from './ChangeGuestForm';
import {
  Route,
  Switch
} from 'react-router-dom';

import ReactLoading from 'react-loading';


class App extends Component {
  state = {
    errorMessage: false,
    loader: false
  }

  handleErrorMessage = () => {
    this.setState({errorMessage: !this.state.errorMessage});
  }
  handleLoader = () => {
   this.setState({loader: !this.state.loader})
  }


  /*fetchGuests = () => {
    fetch('http://localhost:8888/fetchGuests.php')
      .then((response) => response.json())
      .then((guests) => {
        console.log(guests);
      })
  }*/

  render() {
    return (
      <div>
        <div className="wrapper">
			  <Header />
			  {this.state.errorMessage ? 
				<ErrorMessage handleErrorMessage={this.handleErrorMessage}/> : ( null ) 
        }
        
        {this.state.loader ? 	<div className='loader'>
        <ReactLoading type={'bubbles'} color={'#003300'} height={150} width={150}/></div> : ( null ) }

			<Switch>
				  <Route exact path="/admin" render={(props) => <Admin {...props} handleErrorMessage={this.handleErrorMessage} handleLoader={this.handleLoader}/>}/>
				  <Route exact path="/" render={(props) => <Guest {...props} handleErrorMessage={this.handleErrorMessage} handleLoader={this.handleLoader}/>}/>
				  <Route exact path="/changeReservationForm" component={ChangeReservationForm}/>
				  <Route exact path="/changeGuestForm" component={ChangeGuestForm}/>
			</Switch>
        </div>
      </div >
    );
  }

}

export default App;
