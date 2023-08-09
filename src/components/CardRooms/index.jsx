import './CardRooms.scss';
import {
  faBed, faShower, faTv, faCouch, faCheck,
} from '@fortawesome/free-solid-svg-icons';
// import { faShower } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

export const CardRooms = () => {
  return (
    <div className="container-rooms">
      <div className="container-rooms__title-container">
        <h4>Deluxe Room</h4>
      </div>
      <div className="container-rooms__image-container">
        <img src="https://themes.pixelstrap.com/rica/assets/images/hotel/room/4.jpg" alt="deluxe room" />
      </div>
      <div className="container-rooms__information-container">
        <div className="container-rooms__amenities">
          <h4 className="container-rooms__title-amenities">Amenities</h4>
          <div className="container-rooms__amenitie">
            <FontAwesomeIcon icon={faBed} className="container-rooms__icon" />
            <p>King/Twin</p>
          </div>
          <div className="container-rooms__amenitie">
            <FontAwesomeIcon icon={faShower} className="container-rooms__icon" />
            <p>Shower</p>
          </div>
          <div className="container-rooms__amenitie">
            <FontAwesomeIcon icon={faTv} className="container-rooms__icon" />
            <p>LCD TV</p>
          </div>
          <div className="container-rooms__amenitie">
            <FontAwesomeIcon icon={faCouch} className="container-rooms__icon" />
            <p>Couch</p>
          </div>
        </div>
        <div className="container-rooms__inclusions">
          <h4 className="container-rooms__title-inclusions">Inclusion</h4>
          <div className="container-rooms__inclusion">
            <FontAwesomeIcon icon={faCheck} className="container-rooms__icon" />
            <p>Wi-Fi</p>
          </div>
          <div className="container-rooms__inclusion">
            <FontAwesomeIcon icon={faCheck} className="container-rooms__icon" />
            <p>Breakfast</p>
          </div>
          <div className="container-rooms__inclusion">
            <FontAwesomeIcon icon={faCheck} className="container-rooms__icon" />
            <p>Non Refundable</p>
          </div>
        </div>
      </div>
      <div className="container-rooms__price-container">
        <span>$1250</span>
        <p>$1000</p>
        <span>per night</span>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default CardRooms;
