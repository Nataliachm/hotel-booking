import './AdminRoomEdit.scss';
import React, { useState } from 'react';
import ConfirmationModal from '../../components/ConfirmationModal';
import { CardRooms } from '../../components/CardRooms';
import PersonCard from '../../components/PersonCard';
import rooms from './infoRooms';

const AdminRoomEdit = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (room) => {
    setSelectedRoom(room);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedRoom(null);
    setShowModal(false);
  };

  const handleConfirm = () => {
    closeModal();
  };

  return (
    <div className="room-admin-container">
      <div>
        <PersonCard
          img="https://icon-library.com/images/persona-icon/persona-icon-25.jpg"
          btn2="Hotels"
          className="room-admin-container__PersonCard"
        />
      </div>
      <div className="room-admin-container__button">
        <button type="button">
          <i className="fas fa-plus-circle" />
          &nbsp; Add Room
        </button>
      </div>
      <div className="room-admin-container__main-rooms">

        <div className="room-admin-container__container-rooms">
          {rooms.map((room) => {
            return (
            // roomName, urlImage, arrayAmenities, arrayInclusions, previousPrice, newPrice,
              <div className="room-admin-container__room" key={room.id} id={room.id}>
                {showModal && selectedRoom && (
                <ConfirmationModal
                  imageSrc={selectedRoom.img}
                  onConfirm={handleConfirm}
                  onCancel={closeModal}
                  hotelName={selectedRoom.roomName}
                  nameDelete="this room"
                />
                )}
                <CardRooms
                  key={room.id}
                  roomName={room.roomName}
                  urlImage={room.img}
                  arrayAmenities={room.amenities}
                  arrayInclusions={room.inclusion}
                  previousPrice={room.previousPrice}
                  newPrice={room.newPrice}
                  profile="admin"
                  country={room.country}
                  city={room.city}
                  hotelName={room.hotelName}
                  guests={room.guests}
                  checkIn={room.checkIn}
                  checkOut={room.checkOut}
                  dateIn={room.dateIn}
                  dateOut={room.dateOut}
                  onCustomButtonClick={() => {
                    return openModal(room);
                  }}
                />
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default AdminRoomEdit;
