/* eslint-disable react/button-has-type */
import React from 'react';
import './SuccessPayment.scss';
import { useNavigate } from 'react-router-dom';

const SeccessPayment = () => {
  const navigate = useNavigate();
  const handleBookRoom = async () => {
    navigate('/user-booked-rooms');
  };
  return (
    <div className="container-success-payment">
      <div className="container-success-payment__image">
        <img
          src="https://themes.pixelstrap.com/rica/assets/images/hotel/booking-success.png"
          alt="Traveller car"
        />
      </div>
      <div className="container-success-payment__text">
        <h2>Payment Successful ! get ready for comfortable stay. </h2>
        <p>
          Thank you for you payment. we have received your payment successfully.
        </p>
        <button onClick={handleBookRoom}>Booked Room</button>
      </div>
    </div>
  );
};

export default SeccessPayment;
