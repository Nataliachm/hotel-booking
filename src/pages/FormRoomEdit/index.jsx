import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../store/AppContext';
import './FormRoomEdit.scss';

const FormRoomEdit = () => {
  const store = useContext(AppContext);
  const {
    imageCreateRoom,
    // setImageCreateRoom,
    formValuesCreateRoom,
    // setFormValuesCreateRoom,
    handleInputChangeCreateRoom,
    uploadImageCreateRoom,
    handleSubmitCreateRoom,
  } = store;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hotelId = queryParams.get('hotelId');
  const availableAmenities = [
    'King/Twin',
    'Pool View',
    'LCD TV',
    'Couch',
    'Shower',
  ];
  const availableInclusions = [
    'Wi-Fi',
    'Breakfast',
    'Free Cancellation',
    'Non Refundable',
    'Dinner & Lunch',
  ];
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
          <form onSubmit={(e) => { return handleSubmitCreateRoom(hotelId, e); }}>
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
                    {availableAmenities.map((amenity) => {
                      return (
                        <div key={amenity}>
                          <label htmlFor="amenities">
                            <input
                              id="amenities"
                              type="checkbox"
                              name="amenities"
                              value={amenity}
                              checked={formValuesCreateRoom.amenities.includes(amenity)}
                              onChange={handleInputChangeCreateRoom}
                            />
                            &nbsp;
                            {amenity}
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
                    {availableInclusions.map((inclusion) => {
                      return (
                        <div key={inclusion}>
                          <label htmlFor="inclusions">
                            <input
                              id="inclusions"
                              type="checkbox"
                              name="inclusions"
                              value={inclusion}
                              checked={formValuesCreateRoom.inclusions.includes(
                                inclusion,
                              )}
                              onChange={handleInputChangeCreateRoom}
                            />
                            &nbsp;
                            {inclusion}
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
