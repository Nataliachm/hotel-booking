import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { createHotelsAdmin } from '../../service/Hotel.controller';
import './FormHotelRegistration.scss';
import { AppContext } from '../../store/AppContext';

const FormHotelRegistration = () => {
  const store = useContext(AppContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hotelId = queryParams.get('id');
  const {
    selectedImagesFormHotel,
    setSelectedImagesFormHotel,
    formDataCreateHotel,
    setFormDataCreateHotel,
    handleImageChange,
    handleFormSubmit,
    handleInputChange,
    getHotelAdminPageDataById,
    imageHotelCloudinary,
    setImageHotelCloudinary,
  } = store;
  const ratingToStars = (rating) => {
    switch (rating) {
      case 'one': return 1;
      case 'two': return 2;
      case 'three': return 3;
      case 'four': return 4;
      case 'five': return 5;
      default: return 0;
    }
  };
  useEffect(() => {
    const fetchHotelById = async () => {
      if (hotelId) {
        try {
          const hotel = await getHotelAdminPageDataById(hotelId);
          setFormDataCreateHotel({
            name: hotel.hotel_name,
            phone: hotel.phone,
            description: hotel.description,
            stars: ratingToStars(hotel.hotel_rating),
            normalPrice: hotel.previous_price,
            salePrice: hotel.new_price,
            label1: hotel.label1,
            label2: hotel.label2,
            status: hotel.labels,
            images: imageHotelCloudinary,
          });
          setImageHotelCloudinary(hotel.hotel_img);
          setSelectedImagesFormHotel([hotel.hotel_img]);
        } catch (error) {
          console.error('Error al obtener datos del hotel: ', error);
        }
      }
    };

    if (hotelId) {
      fetchHotelById();
    }
  }, [hotelId]);
  return (
    <div className="formHotel">
      <div className="tittleForm">
        <div>
          <h2>Hotel Registration Form</h2>
        </div>
      </div>
      <div className="formHotelContainer">
        <div className="formHotelContainer__img">
          <div>
            <label htmlFor="photo">
              Select image &#127976;
              <input
                id="photo"
                type="file"
                name="file"
                accept="image/*"
                onChange={handleImageChange}
                multiple
              />
            </label>
          </div>
          {selectedImagesFormHotel.length > 0 && (
            <div>
              {selectedImagesFormHotel.map((imageUrl, id) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <img key={id} src={imageUrl} alt={`Uploaded Room ${id}`} />
                );
              })}
            </div>
          )}
        </div>
        <div className="formHotelContainer__text">
          <form onSubmit={(e) => { return handleFormSubmit(e, hotelId); }}>
            <div>
              <label htmlFor="index">
                Index:
                <input
                  placeholder="Index"
                  type="number"
                  id="index"
                  name="index"
                  value={formDataCreateHotel.index}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="name">
                Name:
                <input
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formDataCreateHotel.name}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="country">
                Country:
                <input
                  placeholder="Country"
                  type="text"
                  id="country"
                  name="country"
                  value={formDataCreateHotel.country}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="city">
                City:
                <input
                  placeholder="City"
                  type="text"
                  id="city"
                  name="city"
                  value={formDataCreateHotel.city}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="address">
                Address:
                <input
                  placeholder="Address"
                  type="text"
                  id="address"
                  name="address"
                  value={formDataCreateHotel.address}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="phone">
                Phone:
                <input
                  placeholder="Phone"
                  type="text"
                  id="phone"
                  name="phone"
                  value={formDataCreateHotel.phone}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="description">
                Description:
                <textarea
                  placeholder="Description"
                  id="description"
                  name="description"
                  value={formDataCreateHotel.description}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="stars">
                Stars:
                <select
                  id="stars"
                  name="stars"
                  value={formDataCreateHotel.stars}
                  onChange={handleInputChange}
                >
                  <option value="" disabled hidden>
                    Select an option
                  </option>
                  <option value="1">1 star</option>
                  <option value="2">2 stars</option>
                  <option value="3">3 stars</option>
                  <option value="4">4 stars</option>
                  <option value="5">5 stars</option>
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
                  value={formDataCreateHotel.normalPrice}
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
                  value={formDataCreateHotel.salePrice}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="label1">
                Label 1:
                <select
                  id="label1"
                  name="label1"
                  value={formDataCreateHotel.label1}
                  onChange={handleInputChange}
                >
                  <option value="" disabled hidden>
                    Select an label
                  </option>
                  <option value="Free Wi-Fi">Free Wi-Fi</option>
                  <option value="Parking">Parking</option>
                  <option value="Swimming">Swimming</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Pet-Friendly">Pet-Friendly</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="label2">
                Label 2:
                <select
                  id="label2"
                  name="label2"
                  value={formDataCreateHotel.label2}
                  onChange={handleInputChange}
                >
                  <option value="" disabled hidden>
                    Select an label
                  </option>
                  <option value="Free Wi-Fi">Free Wi-Fi</option>
                  <option value="Parking">Parking</option>
                  <option value="Swimming">Swimming</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Pet-Friendly">Pet-Friendly</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="status">
                Hotel Status:
                <select
                  id="status"
                  name="status"
                  value={formDataCreateHotel.status}
                  onChange={handleInputChange}
                >
                  <option value="" disabled hidden>
                    Select an Hotel Status
                  </option>
                  <option value="">None</option>
                  <option value="Recommended">Recommended</option>
                  <option value="Economic">Economic</option>
                  <option value="Certificate">Certificate</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="In offer">In offer</option>
                </select>
              </label>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormHotelRegistration;
