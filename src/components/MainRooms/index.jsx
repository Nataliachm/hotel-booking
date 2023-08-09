/* eslint-disable jsx-a11y/click-events-have-key-events */
import './MainRooms.scss';
import React, { useState } from 'react';
import { CardRooms } from '../CardRooms';

const MainRooms = () => {
  const [selected, setSelected] = useState('Rooms');

  const handleSelectedItem = (item) => {
    setSelected(item);
  };

  return (
    <main className="main-rooms">
      <ul className="main-rooms__options">
        <li className={selected === 'Rooms' ? 'selected-item' : 'no-selected'} onClick={() => { return handleSelectedItem('Rooms'); }}>Rooms</li>
        <li className={selected === 'About' ? 'selected-item' : 'no-selected'} onClick={() => { return handleSelectedItem('About'); }}>About</li>
        <li className={selected === 'Facility' ? 'selected-item' : 'no-selected'} onClick={() => { return handleSelectedItem('Facility'); }}>Facility</li>
        <li className={selected === 'Location' ? 'selected-item' : 'no-selected'} onClick={() => { return handleSelectedItem('Location'); }}>Location</li>
        <li className={selected === 'Reviews' ? 'selected-item' : 'no-selected'} onClick={() => { return handleSelectedItem('Reviews'); }}>Reviews</li>
        <li className={selected === 'Policies' ? 'selected-item' : 'no-selected'} onClick={() => { return handleSelectedItem('Policies'); }}>Policies</li>
      </ul>
      <div className="main-rooms__content-container">
        <CardRooms />
      </div>
    </main>
  );
};

export default MainRooms;
