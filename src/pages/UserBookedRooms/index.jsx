import './UserBookedRooms.scss';

import React from 'react';
import PersonCard from '../../components/PersonCard';
import { CardRooms } from '../../components/CardRooms';
import rooms from './infoRooms';

const UserBookedRooms = () => {
  // country: 'Argentina',
  //   city: 'Buenos Aires',
  //   hotelName: 'Pampalare',
  //   guests: 2,
  //   checkIn: '2:00 p.m',
  //   checkOut: '12:00 p.m',
  //   dateIn: '1/08/2023',
  //   dateOut: '5/08/2023',
  return (
    <div className="booked-user-container">
      <div>
        <PersonCard
          img="https://icon-library.com/images/persona-icon/persona-icon-25.jpg"
          btn2="Hotels"
          className="booked-user-container__PersonCard"
        />
      </div>
      <div className="booked-user-container__main-rooms">

        <div className="booked-user-container__container-rooms">
          {rooms.map((room) => {
            return (
            // roomName, urlImage, arrayAmenities, arrayInclusions, previousPrice, newPrice,
              <div className="booked-user-container__room" key={room.id} id={room.id}>

                <CardRooms
                  key={room.id}
                  roomName={room.roomName}
                  urlImage={room.img}
                  arrayAmenities={room.amenities}
                  arrayInclusions={room.inclusion}
                  previousPrice={room.previousPrice}
                  newPrice={room.newPrice}
                  profile="user"
                  country={room.country}
                  city={room.city}
                  hotelName={room.hotelName}
                  guests={room.guests}
                  checkIn={room.checkIn}
                  checkOut={room.checkOut}
                  dateIn={room.dateIn}
                  dateOut={room.dateOut}
                />
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default UserBookedRooms;
