import React, { Component } from 'react';
import '../App.css';

class ChangeReservationForm extends Component {
	
    render() {
        return (
            <div>
                <form>
                    <input type="number" min="1" max="6" name="participants" placeholder="2 People" onChange={this.props.handleChange} />
					<input type="number" min="1" max="6" name="participants" placeholder="2 People" onChange={this.props.handleChange} />
                    <button type="submit" value="submit" onClick={this.props.changeReservation}>Change</button>
                    <button onClick={this.props.closeChangeReservationForm}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default ChangeReservationForm;