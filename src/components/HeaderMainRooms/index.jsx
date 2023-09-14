/* eslint-disable react/button-has-type */
import './HeaderMainRooms.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  faShareFromSquare,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';

const HeaderMainRooms = ({ hotelInfo }) => {
  let ratingToStars = [];
  switch (hotelInfo.hotel_rating) {
    case 'one':
      ratingToStars = [1];
      break;
    case 'two':
      ratingToStars = [1, 2];
      break;
    case 'three':
      ratingToStars = [1, 2, 3];
      break;
    case 'four':
      ratingToStars = [1, 2, 3, 4];
      break;
    case 'five':
      ratingToStars = [1, 2, 3, 4, 5];
      break;
    default:
      return [];
  }

  return (
    <section className="container-header-rooms">
      <section className="container-header-rooms__information">
        <div className="container-header-rooms__principal-information">
          <div className="container-header-rooms__title">
            <h2>{hotelInfo.hotel_name}</h2>
          </div>
          <div className="container-header-rooms__stars">
            {ratingToStars.map((element) => {
              return <FontAwesomeIcon key={element} icon={faStar} />;
            })}
          </div>
          <div className="container-header-rooms__share-container">
            <FontAwesomeIcon
              icon={faShareFromSquare}
              className="container-header-rooms__share-icon"
            />
            <p>Share</p>
          </div>
          <div className="container-header-rooms__save-container">
            <FontAwesomeIcon
              icon={faHeart}
              className="container-header-rooms__save-icon"
            />
            <p>Save</p>
          </div>
        </div>
        <div className="container-header-rooms__location-tags">
          <p>{hotelInfo.City.name_city}</p>
        </div>
        <div className="container-header-rooms__service-tags">
          {Object.keys(hotelInfo.Service_labels_hotel).map((key) => {
            return (
              <p key={hotelInfo.Service_labels_hotel[key].id}>
                {hotelInfo.Service_labels_hotel[key].service_label_name}
              </p>
            );
          })}
        </div>
      </section>
      <section className="container-header-rooms__price-information">
        <p>
          <span className="container-header-rooms__price">
            {hotelInfo.previous_price}{' '}
          </span>
          / Per Night
        </p>
        <button>Book this Now</button>
      </section>
    </section>
  );
};

export default HeaderMainRooms;
