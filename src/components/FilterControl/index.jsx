import React, { useState } from 'react';
import './FilterControl.scss';
import DatePicker from 'react-datepicker';

export default function FilterControl() {
  const [number, setNumber] = useState();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section className="filter-control">
      <h2 className="filter-control__title">BOOK ROOMS, HOMES & APTS</h2>
      <div className="filter-control__controls">
        <div className="control">
          <span className="control__title">Hotel</span>
          <span className="control__value">value</span>
        </div>
        <div className="control">
          <span className="control__title">Check In</span>
          <span className="control__value">
            <div className="calendar-container">
              <DatePicker
                seleccionado={startDate}
                onChange={(date) => {
                  return setStartDate(date);
                }}
              />
            </div>
          </span>
        </div>
        <div className="control">
          <span className="control__title">Check Out</span>
          <span className="control__value">
            <div className="calendar-container">
              <DatePicker
                seleccionado={startDate}
                onChange={(date) => {
                  return setStartDate(date);
                }}
              />
            </div>
          </span>
        </div>
        <div className="control">
          <span className="control__title">Guests</span>
          <input
            type="number"
            className="control__value"
            value={number}
            onChange={(e) => {
              return setNumber(e.target.value);
            }}
          />
        </div>
        <div className="search">
          <button type="button">SEARCH</button>
        </div>
      </div>
    </section>
  );
}
