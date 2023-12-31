import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../store/AppContext';
import './FormRoomEdit.scss';

const FormRoomEdit = () => {
  const store = useContext(AppContext);
  const {
    imageCreateRoom,
    setImageCreateRoom,
    formValuesCreateRoom,
    setFormValuesCreateRoom,
    handleInputChangeCreateRoom,
    uploadImageCreateRoom,
    handleSubmitCreateRoom,
    getRoomAdminPageDataById,
    getAllInclusionsRoomPageData,
    getAllAmenitiesRoomPageData,
  } = store;
  const [inclusionsRooms, setInclusionsRooms] = useState([]);
  const [amenitiesRooms, setAmenitiesRooms] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hotelId = queryParams.get('hotelId');
  const roomId = queryParams.get('roomId');
  useEffect(() => {
    const fetchRoomData = async () => {
      if (roomId) {
        try {
          const roomPromise = getRoomAdminPageDataById(roomId);
          const amenitiesPromise = getAllAmenitiesRoomPageData(roomId);

          const room = await roomPromise;
          const amenities = await amenitiesPromise;
          setAmenitiesRooms(amenities);

          setFormValuesCreateRoom({
            name: room.room_name,
            guests: room.max_guests,
            normalPrice: room.previous_price,
            salePrice: room.new_price,
            amenities: amenities
              .filter((amenity) => { return amenity.selected; })
              .map((amenity) => { return amenity.amenity_name; }),
            inclusions: [],
            images: imageCreateRoom,
          });
          setImageCreateRoom(room.room_img);
        } catch (error) {
          console.error('error fetch room: ', error);
        }
      } else {
        const amenitiesPromise = getAllAmenitiesRoomPageData(roomId);
        const amenities = await amenitiesPromise;
        setAmenitiesRooms(amenities);
      }
    };
    const fetchInclusionsData = async () => {
      try {
        const { data: inclusions } = await getAllInclusionsRoomPageData();
        setInclusionsRooms(inclusions);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInclusionsData();
    fetchRoomData();
  }, [roomId]);

  return (
    <div className="formRoom">
      <div className="tittleForm">
        <div>
          <h2>Room Registration Form</h2>
        </div>
      </div>
      <div className="formRoomContainer">
        <div className="formRoomContainer__img">
          <div>
            <label htmlFor="photo">
              Select image &#127976;
              <input
                id="photo"
                type="file"
                name="file"
                accept="image/*"
                onChange={uploadImageCreateRoom}
              />
            </label>
          </div>
          {imageCreateRoom && (
            <div>
              <img src={imageCreateRoom} alt="Uploaded Room" />
            </div>
          )}
        </div>
        <div className="formRoomContainer__text">
          <form onSubmit={(e) => { return handleSubmitCreateRoom(hotelId, roomId, e); }}>
            <div className="inputText">
              <div>
                <label htmlFor="name">
                  Name:
                  <input
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={formValuesCreateRoom.name}
                    onChange={handleInputChangeCreateRoom}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="guests">
                  Guests:
                  <select
                    id="guests"
                    name="guests"
                    value={formValuesCreateRoom.guests}
                    onChange={handleInputChangeCreateRoom}
                  >
                    <option value="" disabled hidden>
                      Select an option
                    </option>
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5">5 guests</option>
                  </select>
                </label>
              </div>
              <div>
                <label htmlFor="normalPrice">
                  Normal price:
                  <input
                    placeholder="Normal price"
                    type="text"
                    id="normalPrice"
                    name="normalPrice"
                    value={formValuesCreateRoom.normalPrice}
                    onChange={handleInputChangeCreateRoom}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="salePrice">
                  Sale Price:
                  <input
                    placeholder="Sale Price"
                    type="text"
                    id="salePrice"
                    name="salePrice"
                    value={formValuesCreateRoom.salePrice}
                    onChange={handleInputChangeCreateRoom}
                  />
                </label>
              </div>
            </div>
            <div className="inputChekbox">
              <div>
                <label htmlFor="amenities">
                  Amenities:
                  <div id="amenities">
                    {amenitiesRooms.map((item, index) => {
                      return (
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={index}>
                          <label htmlFor="amenities">
                            <input
                              id="amenities"
                              type="checkbox"
                              name="amenities"
                              value={item.amenity_name}
                              checked={formValuesCreateRoom.amenities.includes(
                                item.amenity_name,
                              )}
                              onChange={handleInputChangeCreateRoom}
                            />
                            &nbsp;
                            {item.amenity_name}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </label>
              </div>
              <div>
                <label htmlFor="inclusions">
                  Inclusions:
                  <div id="inclusions">
                    {inclusionsRooms.map((item, index) => {
                      return (
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={index}>
                          <label htmlFor="inclusions">
                            <input
                              id="inclusions"
                              type="checkbox"
                              name="inclusions"
                              value={item.inclusion.inclusion_name}
                              checked={formValuesCreateRoom.inclusions.includes(
                                item.inclusion.inclusion_name,
                              )}
                              onChange={handleInputChangeCreateRoom}
                            />
                            &nbsp;
                            {item.inclusion.inclusion_name}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </label>
              </div>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRoomEdit;
