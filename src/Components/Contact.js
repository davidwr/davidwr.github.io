// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Fade, Slide } from 'react-reveal';

function Contact(props) {
  const [state, handleSubmit] = useForm('mayaedqe');
  if (state.succeeded) {
    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="three columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="nine columns">
              <p className="lead">Your e-mail has been sent! Thank you!</p>
            </div>
          </div>
        </Fade>

        <footer>
          <div className="row">
            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open"></i>
              </a>
            </div>
          </div>
        </footer>
      </section>
    );
  }

  if (!props.data) return null;
  const message = props.data.contactmessage;

  return (
    <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">
          <div className="three columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="nine columns">
            <p className="lead">{message}</p>
          </div>
        </div>
      </Fade>
      <div className="row">
        <Slide left duration={1000}>
          <div className="twelve columns">
            <form onSubmit={handleSubmit} id="contactForm" name="contactForm">
              <fieldset>
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input id="email" type="email" name="email" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <div>
                  <label htmlFor="message">
                    Message <span className="required">*</span>
                  </label>
                  <textarea cols="50" rows="15" id="message" name="message"></textarea>
                </div>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <div>
                  <button className="submit" disabled={state.submitting}>
                    Submit
                  </button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>
          </div>
        </Slide>
      </div>

      <footer>
        <div className="row">
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
