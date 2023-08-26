import React, { useState } from 'react';
import './FormRoomEdit.scss';

const FormRoomEdit = () => {
  const [image, setImage] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    guests: '',
    normalPrice: 0,
    salePrice: 0,
    amenities: [],
    inclusions: [],
  });

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

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      if (name === 'amenities') {
        if (checked) {
          setFormValues((prevValues) => {
            return {
              ...prevValues,
              amenities: [...prevValues.amenities, value],
            };
          });
        } else {
          setFormValues((prevValues) => {
            return {
              ...prevValues,
              amenities: prevValues.amenities.filter((item) => {
                return item !== value;
              }),
            };
          });
        }
      } else if (name === 'inclusions') {
        if (checked) {
          setFormValues((prevValues) => {
            return {
              ...prevValues,
              inclusions: [...prevValues.inclusions, value],
            };
          });
        } else {
          setFormValues((prevValues) => {
            return {
              ...prevValues,
              inclusions: prevValues.inclusions.filter((item) => {
                return item !== value;
              }),
            };
          });
        }
      }
    } else {
      setFormValues((prevValues) => {
        return {
          ...prevValues,
          [name]: value,
        };
      });
    }
  };

  const uploadImage = async (event) => {
    const { files } = event.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'hotelImages');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/drnclewqh/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    console.log(file.secure_url);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSend = {
      ...formValues,
      image,
    };

    setImage('');
    setFormValues({
      name: '',
      guests: '',
      normalPrice: 0,
      salePrice: 0,
      amenities: [],
      inclusions: [],
    });
    console.log('Data to send:', dataToSend);
  };

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
                onChange={uploadImage}
              />
            </label>
          </div>
          {image && (
            <div>
              <img src={image} alt="Uploaded Room" />
            </div>
          )}
        </div>
        <div className="formRoomContainer__text">
          <form onSubmit={handleSubmit}>
            <div className="inputText">
              <div>
                <label htmlFor="name">
                  Name:
                  <input
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="guests">
                  Guests:
                  <select
                    id="guests"
                    name="guests"
                    value={formValues.guests}
                    onChange={handleInputChange}
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
                    type="number"
                    id="normalPrice"
                    name="normalPrice"
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="salePrice">
                  Sale Price:
                  <input
                    placeholder="Sale Price"
                    type="number"
                    id="salePrice"
                    name="salePrice"
                    onChange={handleInputChange}
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
                          <label>
                            <input
                              type="checkbox"
                              name="amenities"
                              value={amenity}
                              checked={formValues.amenities.includes(amenity)}
                              onChange={handleInputChange}
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
                          <label>
                            <input
                              type="checkbox"
                              name="inclusions"
                              value={inclusion}
                              checked={formValues.inclusions.includes(
                                inclusion
                              )}
                              onChange={handleInputChange}
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
