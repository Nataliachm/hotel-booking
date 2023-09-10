/* eslint-disable jsx-a11y/click-events-have-key-events */
import './MainRooms.scss';
import React, { useState } from 'react';
import { CardRooms } from '../CardRooms';
// import rooms from './infoRooms';
import FormRooms from '../FormRooms';

const MainRooms = ({ rooms }) => {
  if (typeof rooms !== 'object' || rooms === null) {
    return <div>No hay información de habitaciones disponible.</div>;
  }
  const [selected, setSelected] = useState('Rooms');

  const handleSelectedItem = (item) => {
    setSelected(item);
  };

  return (
    <main className="main-rooms-container">
      <div className="main-rooms">
        <ul className="main-rooms__options">
          <li
            className={selected === 'Rooms' ? 'selected-item' : 'no-selected'}
            onClick={() => {
              return handleSelectedItem('Rooms');
            }}
          >
            Rooms
          </li>
        </ul>
        <div className="main-rooms__content-container">
          <div className="container-rooms">
            {rooms.map((room) => {
              return (
                <CardRooms
                  key={room.id}
                  roomName={room.room_name}
                  urlImage={room.room_img}
                  arrayAmenities={room.Amenity_room}
                  arrayInclusions={room.Inclusion_room}
                  previousPrice={room.previous_price}
                  newPrice={room.new_price}
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
