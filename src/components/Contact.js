import React from 'react';

const Contact = () => {
  return (
    <div>
      <form id="contact-form">
        <div id="form-name">
          Contact Us
        </div>
        <div id="form-flex-container">
          <div id="form-left-column">
            1615 W Expressway 83
            <br />
            McAllen, TX 78503
            <br />
            <br />
            USED CARS SALES & FINANCE
            <br />
            <br />
            (956) 638-5695
            <br />
            <br />
            <br />
            <br />
            OPENING HOURS:
            <br />
            Mon - Fri: 10am - 6pm
            <br />
            Satuday: 10am - 6am
            <br />
            Sunday: CLOSE 
            <br />
          </div>
          <div id="form-right-column">
            <label>Enter Your Name</label>
            <br />
            <input type="text" placeholder="Name" />
            <br />
            <label>Enter Your Email *</label>
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <label>Enter Your Subject</label>
            <br />
            <input type="text" placeholder="Subject" />
            <br />
            <label>Enter Your Message Here</label>
            <br />
            <input type="text" placeholder="Message" />
            <br />
            <button id="contact-submit-btn" type="submit">Submit</button>
            
          </div>
        </div>

      </form>
    </div>
  )
}

export default Contact;