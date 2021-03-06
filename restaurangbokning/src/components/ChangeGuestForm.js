import React, { Component } from 'react';
import '../App.css';

class ChangeGuestForm extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className="formWrapper">
                    <form className="dateForm">
                        <h3>Change guest information</h3>
                        <input type="text" name="firstName" value={this.props.state.firstName} onChange={this.props.handleChange} />
                        <input type="text" name="lastName" value={this.props.state.lastName} onChange={this.props.handleChange} />
                        <input type="text" name="phone" value={this.props.state.phone} onChange={this.props.handleChange} />
                        <input type="text" name="email" value={this.props.state.email} onChange={this.props.handleChange} />
                        <br />
                        <button type="submit" value="submit" onClick={this.props.changeGuest}>Change</button>
                        <button onClick={this.props.closeChangeGuestForm}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ChangeGuestForm;