/* eslint-disable react/button-has-type */
import './HeaderMainRooms.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faShareFromSquare, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

const HeaderMainRooms = () => {
  return (

    <section className="container-header-rooms">
      <section className="container-header-rooms__information">
        <div className="container-header-rooms__principal-information">
          <div className="container-header-rooms__title">
            <h2>Sea View Hotel</h2>
          </div>
          <div className="container-header-rooms__stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="container-header-rooms__share-container">
            <FontAwesomeIcon icon={faShareFromSquare} className="container-header-rooms__share-icon" />
            <p>Share</p>
          </div>
          <div className="container-header-rooms__save-container">
            <FontAwesomeIcon icon={faHeart} className="container-header-rooms__save-icon" />
            <p>Save</p>
          </div>
        </div>
        <div className="container-header-rooms__location-tags">
          <p>Mina Road, Bur Dubai, Dubai, United Arab Emirates</p>
        </div>
        <div className="container-header-rooms__service-tags">
          <p>Free Wifi</p>
          <p>Free Breakfast</p>
        </div>
      </section>
      <section className="container-header-rooms__price-information">
        <p>
          <span className="container-header-rooms__price">$250 </span>
          / Per Night
        </p>
        <button>Book this Now</button>
      </section>
    </section>
  );
};

export default HeaderMainRooms;
