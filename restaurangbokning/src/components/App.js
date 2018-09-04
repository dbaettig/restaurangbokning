import React, { Component } from 'react';
import '../App.css';
import StartPage from './StartPage';
import Guest from './Guest';
import Admin from './Admin';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import ErrorMessage from './ErrorMessage';
import ChangeReservationForm from './ChangeReservationForm';
import ChangeGuestForm from './ChangeGuestForm';
import ReactLoading from 'react-loading';
import {
  Route,
  Switch
} from 'react-router-dom';



class App extends Component {
  state = {
    errorMessage: false,
    loader: false,
    date: "",
    participants: "",
    buttonStyle: false,
    firstSitting: false,
    secondSitting: false,
    chosenSitting: "",
    showGuestForm: false,
    showConfirmation: false,
    showButtonForChangeRes: false,
    guestId: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    resId: ""
  }

  //Find the chosen date and see if there are time-reservations.
  fetchDate = (event) => {
    event.preventDefault();
    this.handleLoader();
    let postData = {
      date: this.state.date
    }
    let formValues = JSON.stringify(postData);
    fetch('http://localhost:8888/fetchDate.php?formData=' + formValues, {
      method: 'GET',
      headers:
      {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((time) => {
        this.handleLoader();
        this.countReservations(time);
        this.setState({ buttonStyle: true });
      })
      .catch(error => {this.handleErrorMessage(); this.handleLoader();});
	  
  }
  //Count how many tables are booked to see if sittings are avaliable.
  countReservations = (time) => {
    let firstTime = time.filter(sitting => sitting.time === "06:00");
    let secondTime = time.filter(sitting => sitting.time === "09:00");
    if (firstTime.length < 15) {
      this.setState({
        firstSitting: true
      })
    }
    if (secondTime.length < 15) {
      this.setState({
        secondSitting: true
      })
    }
  }
  //Show form for user to fill in guest info.
  showGuestForm = (event) => {
    this.setState({
      showGuestForm: true
    })
  }
  //Get id for returning guest using the their email.
  fetchGuestId = (event) => {
    event.preventDefault();
    this.handleLoader();
    let postData = {
      email: this.state.email
    }
    let formValues = JSON.stringify(postData);
    fetch('http://localhost:8888/fetchGuestId.php?formData=' + formValues, {
      method: 'GET',
      headers:
      {
        'Accept': 'application/json',
        'Content-type': 'text/plain',
      }
    })
      .then((response) => response.json())
      .then((guestId) => {
        this.handleLoader();
        this.checkIfIdExists(guestId);
      })
      .catch(error => {this.handleErrorMessage(); this.handleLoader();});
  }
  //If the guest is already in the db, post only the reservation.
  checkIfIdExists = (guestId) => {
    if (guestId.length === 0) {
      this.postGuestAndReservation();
    }
    else {
      this.setState({ guestId: guestId[0].id });
      this.postReservation();
    }
  }
  //Post reservation for returning guest.
  postReservation = () => {
		this.handleLoader();
		let formValues = JSON.stringify(this.state);
		fetch('http://localhost:8888/postReservation.php?formData=' + formValues, {
			method: 'GET',
			headers:
			{
				'Accept': 'application/json',
				'Content-type': 'text/plain',
			}
		})
			.then((response) => {
				this.handleLoader();
			})
			.catch(error => this.handleErrorMessage());
		this.setState({showConfirmation: true});
	}
  //Post guest and reservation for new guest.
  postGuestAndReservation = () => {
    this.handleLoader();
    let postData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      date: this.state.date,
      chosenSitting: this.state.chosenSitting,
      participants: this.state.participants
    }
    let formValues = JSON.stringify(postData);
    fetch('http://localhost:8888/postGuestAndReservation.php?formData=' + formValues, {
      method: 'GET',
      headers:
      {
        'Accept': 'application/json',
        'Content-type': 'text/plain',
      }
    })
      .then((response) => {
        this.handleLoader();
      })
      .catch(error => {this.handleErrorMessage(); this.handleLoader();});
    this.setState({ showConfirmation: true });
  }
  //Set state from input fields.
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  //Get data from the Change Reservation Form and place it in state.
  setStateForChangeReservation = (participants, date, chosenSitting, resId) => {
    this.setState({
      participants: participants,
      date: date,
      chosenSitting: chosenSitting,
      resId: resId
    })
  }

  showButtonForChangeRes = () => {
    this.setState({ showButtonForChangeRes: true });
  }

  changeReservation = (event) => {
    event.preventDefault();
	this.handleLoader();
    let postData = {
      date: this.state.date,
      chosenSitting: this.state.chosenSitting,
      participants: this.state.participants,
      resId: this.state.resId
    }
    let formValues = JSON.stringify(postData);
    fetch('http://localhost:8888/changeReservation.php?formData=' + formValues, {
      method: 'GET',
      headers:
      {
        'Accept': 'application/json',
        'Content-type': 'text/plain',
      }
    })
      .then((response) => {
        window.location.assign("/admin");
      })
      .catch(error => {this.handleErrorMessage(); this.handleLoader();});
  }

  handleErrorMessage = () => {
    this.setState({ errorMessage: !this.state.errorMessage });
  }
  handleLoader = () => {
    this.setState({ loader: !this.state.loader })
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <Header />
          {this.state.errorMessage ?
            <ErrorMessage handleErrorMessage={this.handleErrorMessage} /> : (null)
          }

          {this.state.loader ? <div className='loader'>
            <ReactLoading type={'bubbles'} color={'#003300'} height={150} width={150} /></div> : (null)}

          <Switch>
            <Route exact path="/" component={StartPage} />

            <Route exact path="/admin" render={(props) => <Admin {...props} handleErrorMessage={this.handleErrorMessage}
              setStateForChangeReservation={this.setStateForChangeReservation}
              appState={this.state}
              changeReservation={this.changeReservation}
              showButtonForChangeRes={this.showButtonForChangeRes}
              handleLoader={this.handleLoader}
              handleChange={this.handleChange}
              fetchDate={this.fetchDate} />} />

            <Route exact path="/guest" render={(props) => <Guest {...props} handleErrorMessage={this.handleErrorMessage}
              countReservations={this.countReservations}
              fetchDate={this.fetchDate}
              showGuestForm={this.showGuestForm}
              fetchGuestId={this.fetchGuestId}
              checkIfIdExists={this.checkIfIdExists}
              postReservation={this.postReservation}
              postGuestAndReservation={this.postGuestAndReservation}
              handleChange={this.handleChange}
              handleLoader={this.handleLoader}
              state={this.state} />} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/changeReservationForm" component={ChangeReservationForm} />
            <Route exact path="/changeGuestForm" component={ChangeGuestForm} />
          </Switch>
          <Footer />
        </div>
      </div >
    );
  }

}

export default App;