import './AdminRoomEdit.scss';
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../../store/AppContext';
import ConfirmationModal from '../../components/ConfirmationModal';
import { CardRooms } from '../../components/CardRooms';
import PersonCard from '../../components/PersonCard';

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
    getRoomsByIdHotel,
  } = store;
  const [roomsList, setRoomsList] = useState([]);
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await getRoomsByIdHotel(id);
        setRoomsList(await response);
      } catch (error) {
        console.error('error al obtener: ', error);
      }
    };
    fetchRooms();
  }, []);
  const handleConfirmDelete = async () => {
    try {
      await handleConfirmForRooms(selectedRoom);
      setDeleteConfirmed(true);
      closeModalForRooms();
    } catch (error) {
      console.error('error al confirmas la eliminacion: ', error);
    }
  };
  useEffect(() => {
    if (deleteConfirmed) {
      window.location.reload();
    }
  }, [deleteConfirmed]);
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
                  imageSrc={selectedRoom.room_img}
                  onConfirm={handleConfirmDelete}
                  onCancel={closeModalForRooms}
                  hotelName={selectedRoom.room_name}
                  nameDelete="this room"
                />
                )}
                <CardRooms
                  key={room.id}
                  roomId={room.id}
                  roomName={room.room_name}
                  urlImage={room.room_img}
                  arrayAmenities={room.Amenity_room}
                  arrayInclusions={room.Inclusion_room}
                  previousPrice={room.previous_price}
                  newPrice={room.new_price}
                  profile="admin"
                  // country={room.country}
                  // city={room.city}
                  hotelName={room.hotel_name}
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
