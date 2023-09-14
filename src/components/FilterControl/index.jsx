import React, { useEffect, useState } from 'react';
import './FilterControl.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import DatePickerControl from './DatePickerControl';
import FormInput from '../FormInput';
import useQuery from '../../hooks/useQuery';

export default function FilterControl() {
  const query = useQuery();
  const [filterInfo, setfilterInfo] = useState({
    destination: '',
    checkIn: new Date(),
    checkOut: new Date(),
    guests: 1,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const city = query.get('city') ? query.get('city') : '';
    const dateIn = query.get('dateIn');
    const dateOut = query.get('dateOut');
    const guests = query.get('guests');

    setfilterInfo({
      destination: city,
      checkIn: new Date(dateIn),
      checkOut: new Date(dateOut),
      guests,
    });
  }, []);

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    searchParams.append('city', filterInfo.destination);
    searchParams.append('dateIn', filterInfo.checkIn.toDateString());
    searchParams.append('dateOut', filterInfo.checkOut.toDateString());
    searchParams.append('guests', filterInfo.guests);
    navigate(`/hotel/?${searchParams.toString()}`);
  };
  const handleFieldChange = (value, field) => {
    setfilterInfo((oldState) => {
      return { ...oldState, [field]: value };
    });
  };

  return (
    <section className="filter-control">
      <h2 className="filter-control__title">BOOK ROOMS, HOMES & APTS</h2>
      <div className="filter-control__controls">
        <div className="control">
          <span className="control__value">
            <FormInput
              placeholder="Destination"
              value={filterInfo.destination}
              onChange={(e) => {
                handleFieldChange(e.target.value, 'destination');
              }}
            />
          </span>
        </div>
        <div className="control">
          <span className="control__title">Check In</span>
          <span className="control__value">
            <div className="calendar-container">
              <DatePickerControl
                date={filterInfo.checkIn}
                setDate={(date) => {
                  handleFieldChange(date, 'checkIn');
                }}
              />
            </div>
          </span>
        </div>
        <div className="control">
          <span className="control__title">Check Out</span>
          <span className="control__value">
            <div className="calendar-container">
              <DatePickerControl
                date={filterInfo.checkOut}
                setDate={(date) => {
                  handleFieldChange(date, 'checkOut');
                }}
              />
            </div>
          </span>
        </div>
        <div className="control">
          <span className="control__title">Guests</span>
          <input
            type="number"
            className="control__value guest"
            value={filterInfo.guests}
            onChange={(e) => {
              return handleFieldChange(e.target.value, 'guests');
            }}
            placeholder="1"
          />
        </div>
        <div className="search">
          <button onClick={handleSearch} type="button">
            SEARCH
          </button>
        </div>
      </div>
    </section>
  );
}
