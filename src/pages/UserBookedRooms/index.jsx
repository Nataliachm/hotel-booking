import './UserBookedRooms.scss';

import React from 'react';
import PersonCard from '../../components/PersonCard';
import { CardRooms } from '../../components/CardRooms';
import rooms from './infoRooms';

const UserBookedRooms = () => {
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
