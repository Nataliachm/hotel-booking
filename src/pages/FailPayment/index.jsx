/* eslint-disable react/button-has-type */
import React from 'react';
import './FailPayment.scss';

const FailPayment = () => {
  return (
    <div className="container-fail-payment">
      <div className="container-fail-payment__image">
        <img src="https://themes.pixelstrap.com/rica/assets/images/hotel/booking-failed.png" alt="Person with oup!" />
      </div>
      <div className="container-fail-payment__text">
        <h2>Oops ! We are unable to process your payment</h2>
        <p>
          looks like we encountered an error. please try again.
          if you continue to have issue, try another
          payment method.
        </p>
        <button>Download Invoice</button>
      </div>
    </div>
  );
};

export default FailPayment;
