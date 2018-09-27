import React, { Component } from 'react';
import '../App.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <div className="contactform">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
              </div>
              <div className="col-md-6">
              <h3 className="title">Ask a question</h3>
                <p className="hear">Send us a general question or comment here.</p>
                <form action="https://formspree.io/liztrenholme@gmail.com" method="POST">
                <label htmlFor="first_name">First Name</label>
                  <input className="text-input" required type="text" name="first_name" />
                  <label htmlFor="last_name">Last Name</label>
                  <input className="text-input" type="text" name="last_name" />
                  <label htmlFor="email">Your Email Address</label>
                  <input className="text-input" required type="email" name="_replyto" />
                  <textarea className="text-input" required rows="10" cols="38" name="message" placeholder="Message..." width="50%" height="50%"></textarea>
                  <input type="submit" className='btn btn-outline-secondary' value="Send" />
                </form>
              </div>
              <div className="col-md-3">
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;