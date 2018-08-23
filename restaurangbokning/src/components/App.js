import React, { Component } from 'react';
import '../App.css';
import Guest from './Guest';
import Admin from './Admin';
import Header from './Header';
import ChangeReservationForm from './ChangeReservationForm';
import {
  Link,
  Route,
  Switch
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
   			<Switch>
			  <Route exact path="/admin" component={Admin}/>
			  <Route exact path="/guest" component={Guest}/>
			</Switch>

        </div>
		
			
       
		<div>
		<ul>
		  <li> <Link to="/admin">ADMIN</Link> </li>
		  <li> <Link to="/guest">GUEST</Link> </li>
		</ul>
		</div>
      </div >
    );
  }

}

export default App;
