import React, { useState } from 'react';
import './FilterControl.scss';
import 'react-datepicker/dist/react-datepicker.css';
import DatePickerControl from './DatePickerControl';

export default function FilterControl() {
  const [number, setNumber] = useState(1);

  return (
    <section className="filter-control">
      <h2 className="filter-control__title">BOOK ROOMS, HOMES & APTS</h2>
      <div className="filter-control__controls">
        <div className="control">
          <span className="control__title">City</span>
          <span className="control__value">Medellín</span>
        </div>
        <div className="control">
          <span className="control__title">Check In</span>
          <span className="control__value">
            <div className="calendar-container">
              <DatePickerControl />
            </div>
          </span>
        </div>
        <div className="control">
          <span className="control__title">Check Out</span>
          <span className="control__value">
            <div className="calendar-container">
              <DatePickerControl />
            </div>
          </span>
        </div>
        <div className="control">
          <span className="control__title">Guests</span>
          <input
            type="number"
            className="control__value guest"
            value={number}
            onChange={(e) => {
              return setNumber(e.target.value);
            }}
            placeholder="1"
          />
        </div>
        <div className="search">
          <button type="button">SEARCH</button>
        </div>
      </div>
    </section>
  );
}
