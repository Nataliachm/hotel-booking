import { useState } from 'react';
import './FormHotelRegistration.scss';

const FormHotelRegistration = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [hotelsData, setHotelsData] = useState([]);
  const [formData, setFormData] = useState({
    index: '',
    name: '',
    country: '',
    city: '',
    address: '',
    phone: '',
    description: '',
    stars: '',
    normalPrice: '',
    salePrice: '',
    label1: '',
    label2: '',
    status: '',
  });
  const handleImageChange = (event) => {
    const images = event.target.files;
    const imageUrls = [];
    for (let i = 0; i < images.length; i += 1) {
      const imageUrl = URL.createObjectURL(images[i]);
      imageUrls.push(imageUrl);
    }
    setSelectedImages(imageUrls);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newHotel = {
      ...formData,
      images: selectedImages,
    };
    setHotelsData((prevHotelsData) => {
      return [...prevHotelsData, newHotel];
    });
    setFormData({
      index: '',
      name: '',
      country: '',
      city: '',
      address: '',
      description: '',
      stars: '',
      normalPrice: '',
      salePrice: '',
      label1: '',
      label2: '',
      status: '',
    });

    setSelectedImages([]);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
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
                accept="image/*"
                onChange={handleImageChange}
                multiple
              />
            </label>
          </div>
          <div>
            {selectedImages.length > 0 && (
              <img src={selectedImages[0]} alt="Selected 0" />
            )}
          </div>
          <div className="animationImgs">
            <div className="gear">
              <img
                src="https://www.freeiconspng.com/minicovers/gear-icon-17.png"
                alt="gear"
              />
            </div>
            <div>
              <img
                src="https://www.freeiconspng.com/thumbs/hotel-png/hotel-png-4.png"
                alt="hotelimg"
              />
            </div>
          </div>
        </div>
        <div className="formHotelContainer__text">
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="index">
                Index:
                <input
                  type="number"
                  id="index"
                  name="index"
                  value={formData.index}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="name">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="country">
                Country:
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="city">
                City:
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="address">
                Address:
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="description">
                Description:
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
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
                  value={formData.stars}
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
                  type="number"
                  id="normalPrice"
                  name="normalPrice"
                  value={formData.normalPrice}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="salePrice">
                Sale Price:
                <input
                  type="number"
                  id="salePrice"
                  name="salePrice"
                  value={formData.salePrice}
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
                  value={formData.label1}
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
                  value={formData.label2}
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
                  value={formData.status}
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
