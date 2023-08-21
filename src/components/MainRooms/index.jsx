/* eslint-disable jsx-a11y/click-events-have-key-events */
import './MainRooms.scss';
import React, { useState } from 'react';
import { CardRooms } from '../CardRooms';
import rooms from './infoRooms';
import FormRooms from '../FormRooms';

const MainRooms = () => {
  const [selected, setSelected] = useState('Rooms');

  const handleSelectedItem = (item) => {
    setSelected(item);
  };

  return (
    <main className="main-rooms-container">
      <div className="main-rooms">
        <ul className="main-rooms__options">
          <li className={selected === 'Rooms' ? 'selected-item' : 'no-selected'} onClick={() => { return handleSelectedItem('Rooms'); }}>Rooms</li>
          <li className={selected === 'About' ? 'selected-item' : 'no-selected'} onClick={() => { return handleSelectedItem('About'); }}>About</li>
          <li className={selected === 'Facility' ? 'selected-item' : 'no-selected'} onClick={() => { return handleSelectedItem('Facility'); }}>Facility</li>
          <li className={selected === 'Location' ? 'selected-item' : 'no-selected'} onClick={() => { return handleSelectedItem('Location'); }}>Location</li>
          <li className={selected === 'Reviews' ? 'selected-item' : 'no-selected'} onClick={() => { return handleSelectedItem('Reviews'); }}>Reviews</li>
          <li className={selected === 'Policies' ? 'selected-item' : 'no-selected'} onClick={() => { return handleSelectedItem('Policies'); }}>Policies</li>
        </ul>
        <div className="main-rooms__content-container">
          <div className="container-rooms">
            {rooms.map((room) => {
              return (
              // roomName, urlImage, arrayAmenities, arrayInclusions, previousPrice, newPrice,

                <CardRooms
                  key={room.id}
                  roomName={room.roomName}
                  urlImage={room.img}
                  arrayAmenities={room.amenities}
                  arrayInclusions={room.inclusion}
                  previousPrice={room.previousPrice}
                  newPrice={room.newPrice}
                  profile="room"

                />
              );
            })}
          </div>

        </div>
      </div>
      <section className="main-rooms__calendar-container">
        <FormRooms />
      </section>
    </main>
  );
};

export default MainRooms;
