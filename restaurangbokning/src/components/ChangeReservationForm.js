import React, { Component } from 'react';
import '../App.css';

class ChangeReservationForm extends Component {
	
    render() {
		let today = new Date().toJSON().slice(0,10);
		console.log(this.props.appState.date);
        return (
            <div>
                <form>
                    <input type="number" min="1" max="6" name="participants" placeholder={this.props.appState.participants} onChange={this.props.handleChange} />
					<input type="date" required min={today} placeholder={this.props.appState.date} name="date" onChange={this.props.handleChange} />
                    <button type="submit" value="submit" onClick={this.props.changeReservation}>Change</button>
                    <button onClick={this.props.closeChangeReservationForm}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default ChangeReservationForm;