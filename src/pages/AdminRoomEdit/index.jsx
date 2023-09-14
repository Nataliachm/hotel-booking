import './AdminRoomEdit.scss';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../../store/AppContext';
import ConfirmationModal from '../../components/ConfirmationModal';
import { CardRooms } from '../../components/CardRooms';
import PersonCard from '../../components/PersonCard';
// import rooms from './infoRooms';

const AdminRoomEdit = () => {
  const store = useContext(AppContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const navigate = useNavigate();
  const {
    selectedRoom,
    showModalForRooms,
    openModalForRooms,
    handleConfirmForRooms,
    closeModalForRooms,
    // getAllRoomsAdminPageData,
    getRoomsByIdHotel,
  } = store;
  const [roomsList, setRoomsList] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        console.log('este es el: ', id);
        const response = await getRoomsByIdHotel(id);
        console.log(response);
        setRoomsList(response);
      } catch (error) {
        console.error('error al obtener: ', error);
      }
    };
    fetchRooms();
  }, [id]);

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
        <button onClick={() => { return navigate(`/form-room-edit?hotelId=${id}`); }} type="button">
          <i className="fas fa-plus-circle" />
          &nbsp; Add Room
        </button>
      </div>
      <div className="room-admin-container__main-rooms">

        <div className="room-admin-container__container-rooms">
          {roomsList.map((room) => {
            return (
            // roomName, urlImage, arrayAmenities, arrayInclusions, previousPrice, newPrice,
              <div className="room-admin-container__room" key={room.id} id={room.id}>
                {showModalForRooms && selectedRoom && (
                <ConfirmationModal
                  imageSrc={selectedRoom.img}
                  onConfirm={handleConfirmForRooms}
                  onCancel={closeModalForRooms}
                  hotelName={selectedRoom.roomName}
                  nameDelete="this room"
                />
                )}
                <CardRooms
                  key={room.id}
                  roomId={room.id}
                  roomName={room.room_name}
                  urlImage={room.room_img}
                  // arrayAmenities={room.amenities}
                  // arrayInclusions={room.inclusion}
                  previousPrice={room.previous_price}
                  newPrice={room.new_price}
                  profile="admin"
                  // country={room.country}
                  // city={room.city}
                  // hotelName={room.hotelName}
                  guests={room.max_guests}
                  // checkIn={room.checkIn}
                  // checkOut={room.checkOut}
                  // dateIn={room.dateIn}
                  // dateOut={room.dateOut}
                  onCustomButtonClick={() => {
                    return openModalForRooms(room);
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
