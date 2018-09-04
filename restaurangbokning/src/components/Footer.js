import React, { Component } from 'react';
import '../App.css';
import instagram from '../images/instagram-brands.svg'
import facebook from '../images/facebook.svg'
import email from '../images/at-solid.svg'

class Footer extends Component {

    render() {
        return (

            <div>
                <footer>
                    <div className="social">
                        <a href="https://instagram.com"><img src={instagram} alt="instagramIcon"></img></a>
                        <a href="https://facebook.com"><img src={facebook} alt=" facebookIcon"></img></a>
                        <a href="mailto:info@thegreenery.com"><img src={email} alt="emailIcon"></img></a>
						<h4>OPENING HOURS</h4>
                        <p>
                            Monday - Thursday 6pm-11pm
							<br />
                            Friday - Sunday 6pm-12pm
							<br />
                            Closed for most major holidays
							</p>
                    </div>
                </footer>
            </div >
        )

    }
}

export default Footer;