import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [state, handleSubmit] = useForm("xrgwvyed");
  // const [tuut, setTuut] = useState(true);


  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    // Dynamically load reCAPTCHA script when the component mounts
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup to remove the script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);


  // Set tuut for css editing on div edit msg.
  //Handle button / tuut needs to be active

  // const handleButtonClick = () => {
  //   setTuut(false);
  // };

  // if (state.succeeded || tuut) {
  if (state.succeeded) {
    return <div className='edit-msg'><h4>Thank You!</h4>
      <p>Your message has been successfully submitted. We appreciate you reaching out.</p>
      <p>We will review your message and get back to you as soon as possible.</p>
      {/* <button onClick={handleButtonClick}>CLICK HERE</button> */}
    </div>;
  }






  return (
    <div>

      <h4>Mail Contact Me</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" >Your Email Address</label>
        <br />
        <input id="email" type="email" name="email" placeholder='youre email here' required onInput={(e) => {
          const sanitizedValue = e.target.value.replace(/<\s*script\s*>|<\s*\/\s*script\s*>/gi, '');
          e.target.value = sanitizedValue;
        }} />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <br />
        <label htmlFor="message">Your Message here</label>
        <br />
        <textarea
          id="message"
          name="message"
          rows="10"
          cols="30"
          placeholder="Please fill in your Full Name, your statement and some contact info, example phone number.
          English or Swedish only."
          required
          onInput={(e) => {
            const sanitizedValue = e.target.value.replace(/<\s*script\s*>|<\s*\/\s*script\s*>/gi, '');
            e.target.value = sanitizedValue;
          }}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <br />

        {/* Radio buttons for custom validation */}

        <div>
          <input
            type="radio"
            id="option1"
            name="options"
            value="Option 1"
            checked={selectedOption === 'Option 1'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option1">I don't accept these terms</label>
        </div>


        <div>
          <input
            type="radio"
            id="option2"
            name="options"
            value="Option 2"
            checked={selectedOption === 'Option 2'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option2">I'm accepting these terms</label>
        </div>

        <ValidationError
          prefix="Options"
          field="options"
          errors={state.errors}
        />
        {/* reCAPTCHA widget */}

        <div className='msg-terms'>
          {selectedOption === 'Option 2' ? (
            <div className='heyas'>
            </div>

          ) : <p>By accepting these terms, <br />you agree that I can contact you.</p>}

        </div>



        <div className="g-recaptcha" data-sitekey="6Lf3mhoeAAAAAADJtupMSieOpPauL__WRT7fTO_c"></div>

        <br />

        <button type="submit" disabled={state.submitting || (selectedOption !== 'Option 2')}>
          Submit
        </button>
      </form>

    </div>

  );
};

export default ContactForm;
