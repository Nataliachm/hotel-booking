/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import './CardRooms.scss';
import React from 'react';
import {
  faBed, faShower, faTv, faCouch, faCheck, faWater,
} from '@fortawesome/free-solid-svg-icons';
// import { faShower } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import rooms from './infoRooms';

export const CardRooms = (props) => {
  const {
    roomName, urlImage, arrayAmenities, arrayInclusions, previousPrice, newPrice,
  } = props;
  return (
  // <div className="container-rooms">
  // </div>
    <div className="container-rooms__card">

      <div className="container-rooms__title-container">
        <h4>{roomName}</h4>
      </div>
      <div className="container-rooms__card-withoutTitle">

        <div className="container-rooms__image-container">
          <img src={urlImage} alt={roomName} />
        </div>
        <div className="container-rooms__information-container">
          <div className="container-rooms__amenities">
            <h4 className="container-rooms__title-amenities">Amenities</h4>
            {arrayAmenities.map((amenitie) => {
              return (
                <div className="container-rooms__amenitie">
                  {amenitie === 'King/Twin' && <FontAwesomeIcon icon={faBed} className="container-rooms__icon" key={amenitie} />}
                  {amenitie === 'Shower' && <FontAwesomeIcon icon={faShower} className="container-rooms__icon" key={amenitie} />}
                  {amenitie === 'LCD TV' && <FontAwesomeIcon icon={faTv} className="container-rooms__icon" key={amenitie} />}
                  {amenitie === 'Couch' && <FontAwesomeIcon icon={faCouch} className="container-rooms__icon" key={amenitie} />}
                  {amenitie === 'Pool View' && <FontAwesomeIcon icon={faWater} className="container-rooms__icon" key={amenitie} />}
                  <p>{amenitie}</p>
                </div>
              );
            })}

          </div>
          <div className="container-rooms__inclusions">
            <h4 className="container-rooms__title-inclusions">Inclusion</h4>
            {arrayInclusions.map((inclusion) => {
              return (

                <div className="container-rooms__inclusion">
                  <FontAwesomeIcon icon={faCheck} className="container-rooms__icon" />
                  <p>{inclusion}</p>
                </div>
              );
            })}

          </div>
        </div>
      </div>
      <div className="container-rooms__price-container">
        <span>
          $
          {previousPrice}
        </span>
        <p>
          $
          {newPrice}
        </p>
        <span>per night</span>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default CardRooms;
