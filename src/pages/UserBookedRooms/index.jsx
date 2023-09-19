import './UserBookedRooms.scss';
import React, { useEffect, useState } from 'react';
import { useJwt } from 'react-jwt';
import { getbookedRoomsByUserId } from '../../service/Hotel.controller';
import PersonCard from '../../components/PersonCard';
import { CardRooms } from '../../components/CardRooms';
import Loading from '../../components/Loading';

const UserBookedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');
  const { decodedToken } = useJwt(token);
  const userId = decodedToken?.id;

  useEffect(() => {
    const getbookedRooms = async () => {
      try {
        setLoading(true);
        const response = await getbookedRoomsByUserId(userId);
        setRooms(response);
      } finally {
        setLoading(false);
      }
    };
    if (userId) {
      getbookedRooms();
    }
  }, [userId]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
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
              {!rooms ? (
                <div>sorry</div>
              ) : (
                rooms.map((bookedRoom) => {
                  const checkInDate = new Date(bookedRoom.room.hotel.check_in);
                  const checkOutDate = new Date(
                    bookedRoom.room.hotel.check_out
                  );
                  const checkIn = `${checkInDate.getHours()}:${checkInDate.getMinutes()}`;
                  const checkOut = `${checkOutDate.getHours()}:${checkOutDate.getMinutes()}`;
                  const dateIn = bookedRoom.check_in.split('T')[0];
                  const dateOut = bookedRoom.check_out.split('T')[0];
                  return (
                    <div
                      className="booked-user-container__room"
                      key={bookedRoom.id}
                      id={bookedRoom.id}
                    >
                      <CardRooms
                        roomName={bookedRoom.room.room_name}
                        urlImage={bookedRoom.room.room_img}
                        arrayAmenities={bookedRoom.room.Amenity_room}
                        arrayInclusions={bookedRoom.room.Inclusion_room}
                        previousPrice={bookedRoom.room.previous_price}
                        newPrice={bookedRoom.room.new_price}
                        profile="user"
                        country={
                          bookedRoom.room.hotel.city.country.country_name
                        }
                        city={bookedRoom.room.hotel.city.name_city}
                        hotelName={bookedRoom.room.hotel.hotel_name}
                        guests={bookedRoom.guests}
                        checkIn={checkIn}
                        checkOut={checkOut}
                        dateIn={dateIn}
                        dateOut={dateOut}
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBookedRooms;
