/* eslint-disable react/button-has-type */
import React from 'react';
import './SubscribeHome.scss';

const SubscribeHome = () => {
  return (
    <div className="container-subscribe">
      <div className="container-subscribe__text">
        <h3>Subscribe Our News</h3>
        <p>
          Subscribe and receive our newsletters to follow the news about our fresh and
          fantastic products

        </p>
      </div>
      <div className="container-subscribe__input">
        <input type="text" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default SubscribeHome;
