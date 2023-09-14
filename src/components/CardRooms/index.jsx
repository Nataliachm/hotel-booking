/* eslint-disable react/prop-types */

/* eslint-disable react/button-has-type */

import './CardRooms.scss';

import React from 'react';

import {
  faBed,
  faShower,
  faTv,
  faCouch,
  faCheck,
  faWater,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useJwt } from 'react-jwt';
import { useNavigate } from 'react-router-dom';

export const CardRooms = (props) => {
  const navigate = useNavigate();
  const {
    roomName,
    urlImage,
    arrayAmenities,
    arrayInclusions,
    previousPrice,
    newPrice,
    profile,
    country,
    city,
    hotelName,
    guests,
    checkIn,
    checkOut,
    dateIn,
    dateOut,
    onCustomButtonClick,
    roomId,
  } = props;
  const token = localStorage.getItem('token');
  let userRole = 'user';
  let userId;
  if (token) {
    const resp = useJwt(token);
    userRole = resp?.decodedToken?.role || userRole;
    userId = resp?.decodedToken?.id;
  }

  const handleBookRoom = async () => {
    const BookRoomData = {
      guests,
      check_in: new Date(dateIn),
      check_out: new Date(dateOut),
      userId,
      roomId,
    };
    localStorage.setItem('filterInfo', JSON.stringify(BookRoomData));
    navigate(`/traveller-information/${BookRoomData.roomId}`);
  };

  return (
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

            {arrayAmenities.map(({ amenity: { amenity_name } }) => {
              return (
                <div className="container-rooms__amenitie" key={amenity_name}>
                  {amenity_name === 'King/Twin' && (
                    <FontAwesomeIcon
                      icon={faBed}
                      className="container-rooms__icon"
                      key={amenity_name}
                    />
                  )}

                  {amenity_name === 'Shower' && (
                    <FontAwesomeIcon
                      icon={faShower}
                      className="container-rooms__icon"
                      key={amenity_name}
                    />
                  )}

                  {amenity_name === 'LCD TV' && (
                    <FontAwesomeIcon
                      icon={faTv}
                      className="container-rooms__icon"
                      key={amenity_name}
                    />
                  )}

                  {amenity_name === 'Couch' && (
                    <FontAwesomeIcon
                      icon={faCouch}
                      className="container-rooms__icon"
                      key={amenity_name}
                    />
                  )}

                  {amenity_name === 'Pool View' && (
                    <FontAwesomeIcon
                      icon={faWater}
                      className="container-rooms__icon"
                      key={amenity_name}
                    />
                  )}

                  <p>{amenity_name}</p>
                </div>
              );
            })}
          </div>

          <div className="container-rooms__inclusions">
            <h4 className="container-rooms__title-inclusions">Inclusion</h4>

            {arrayInclusions.map(({ inclusion: { inclusion_name } }) => {
              return (
                <div
                  className="container-rooms__inclusion"
                  key={inclusion_name}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="container-rooms__icon"
                  />

                  <p>{inclusion_name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {profile === 'room' && (
        <div className="container-rooms__price-container">
          <span>${previousPrice}</span>

          <p>${newPrice}</p>

          <span>per night</span>

          <button onClick={handleBookRoom}>Book Now</button>
        </div>
      )}

      {userRole === 'user' && profile === 'user' && (
        <div className="container-rooms__info-user-container">
          <div className="container-rooms__room-info">
            <ul>
              <li>
                <strong>Country:</strong> {country}
              </li>

              <li>
                <strong>Hotel:</strong> {hotelName}
              </li>

              <li>
                <strong>Check in:</strong> {checkIn}
              </li>

              <li>
                <strong>Check out:</strong> {checkOut}
              </li>
            </ul>

            <ul>
              <li>
                <strong>City:</strong> {city}
              </li>

              <li>
                <strong>Guets:</strong> {guests}
              </li>

              <li>
                <strong>Date in:</strong> {dateIn}
              </li>

              <li>
                <strong>Date out:</strong> {dateOut}
              </li>
            </ul>
          </div>

          <div className="container-rooms__price-info">
            <p>
              ${newPrice}
              /per night
            </p>
          </div>
        </div>
      )}

      {userRole === 'admin' && profile === 'admin' && (
        <div className="container-rooms__price-container">
          <div className="container-rooms__botons-container">
            <div>
              <button className="container-rooms__button--edit" type="button">
                <i className="fas fa-cog" />
                &nbsp; Edit
              </button>
            </div>

            <div>
              <button
                className="container-rooms__button--delete"
                type="button"
                onClick={onCustomButtonClick}
              >
                <i className="fas fa-trash-alt" />
                &nbsp; Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardRooms;
