/* eslint-disable jsx-a11y/click-events-have-key-events */
import './MainRooms.scss';
import React, { useState } from 'react';
import { CardRooms } from '../CardRooms';
import FormRooms from '../FormRooms';
import useQuery from '../../hooks/useQuery';
import Loading from '../Loading';

const MainRooms = ({ rooms, hotelInfo }) => {
  if (typeof rooms !== 'object' || rooms === null) {
    return <Loading />;
  }
  const [selected, setSelected] = useState('Rooms');

  const handleSelectedItem = (item) => {
    setSelected(item);
  };

  const query = useQuery();

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
              const checkInDate = new Date(hotelInfo.check_in);
              const checkOutDate = new Date(hotelInfo.check_out);
              const checkIn = `${checkInDate.getHours()}:${checkInDate.getMinutes()}`;
              const checkOut = `${checkOutDate.getHours()}:${checkOutDate.getMinutes()}`;
              return (
                <CardRooms
                  key={room.id}
                  roomId={room.id}
                  roomName={room.room_name}
                  urlImage={room.room_img}
                  arrayAmenities={room.Amenity_room}
                  arrayInclusions={room.Inclusion_room}
                  previousPrice={room.previous_price}
                  newPrice={room.new_price}
                  city={hotelInfo.city.name_city}
                  country={hotelInfo.city.country.country_name}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  hotelName={hotelInfo.hotel_name}
                  guests={room.max_guests}
                  dateIn={query.get('dateIn')}
                  dateOut={query.get('dateOut')}
                  profile="room"
                />
              );
            })}
          </div>
        </div>
      </div>
      <section className="main-rooms__calendar-container">
        <FormRooms hotelInfo={hotelInfo} />
      </section>
    </main>
  );
};

export default MainRooms;
