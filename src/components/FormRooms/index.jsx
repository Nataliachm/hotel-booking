/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
import React, { useRef, useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  faCalendar,
  faSquareCaretDown,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MapHotel from '../MapHotel';
import './FormRooms.scss';
import FormInput from '../FormInput';

const FormRooms = ({ hotelInfo }) => {
  const dateInputRef = useRef(null);
  const dateOutRef = useRef(null);
  const [inputDate, setInputDate] = useState('Check In');
  const [outDate, setOutDate] = useState('Check Out');

  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  const handleOutDateIconClick = () => {
    if (dateOutRef.current) {
      dateOutRef.current.showPicker();
    }
  };

  const onChangeInputDate = (event) => {
    setInputDate(event.target.value);
  };

  const onChangeOutDate = (event) => {
    setOutDate(event.target.value);
  };
  return (
    <div className="booking-room-container">
      <div className="booking-room-container__map-container">
        <MapHotel hotelInfo={hotelInfo} />
      </div>
      <h4>Average Room</h4>
      <div className="booking-room-container__information-room">
        {/* <h4>Average Room</h4> */}
        <div className="booking-room-container__inclusions">
          <div className="booking-room-container__inclusion">
            <FontAwesomeIcon
              icon={faCheck}
              className="booking-room-container__icon"
            />
            <p>Room Only</p>
          </div>

          <div className="booking-room-container__inclusion">
            <FontAwesomeIcon
              icon={faCheck}
              className="booking-room-container__icon"
            />
            <p>Non Refundable</p>
          </div>
        </div>

        <div className="booking-room-container__prices">
          <span>${hotelInfo.previous_price}</span>
          <p>${hotelInfo.new_price}</p>
          <span>per night</span>
        </div>
      </div>
      <form action="" className="booking-room-container__check">
        <span>
          <p
            id="Check-In"
            className={
              inputDate === 'Check In' ? 'booking-room-container__check-in' : ''
            }
          >
            {inputDate}
          </p>
          <input
            type="date"
            ref={dateInputRef}
            id="1"
            onChange={() => {
              return onChangeInputDate(event, 1);
            }}
          />
          <FontAwesomeIcon
            icon={faCalendar}
            className="booking-room-container__icon"
            onClick={handleIconClick}
          />
        </span>
        <span>
          <p
            className={
              inputDate === 'Check In'
                ? 'booking-room-container__check-out'
                : ''
            }
          >
            {' '}
            {outDate}
          </p>
          <input
            type="date"
            id="2"
            ref={dateOutRef}
            onChange={() => {
              return onChangeOutDate(event, 2);
            }}
          />
          <FontAwesomeIcon
            icon={faCalendar}
            className="booking-room-container__icon"
            onClick={handleOutDateIconClick}
          />
        </span>
        <span className="booking-room-container__guests-selection">
          <label htmlFor="guests">Guests </label>
          <select name="guests" id="guests">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </span>
      </form>

      <button className="booking-room-container__booking-button">Search</button>
    </div>
  );
};

export default FormRooms;
