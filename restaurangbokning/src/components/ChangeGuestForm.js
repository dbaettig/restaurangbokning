import React, { Component } from 'react';
import '../App.css';

class ChangeGuestForm extends Component {
	
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="firstName" placeholder={this.props.firstName} onChange={this.props.handleChange} />
                    <button type="submit" value="submit" onClick={this.props.changeGuest}>Change</button>
                    <button onClick={this.props.closeChangeGuestForm}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default ChangeGuestForm;