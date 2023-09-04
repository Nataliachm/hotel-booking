import { useContext } from 'react';
// import { createHotelsAdmin } from '../../service/Hotel.controller';
import './FormHotelRegistration.scss';
import { AppContext } from '../../store/AppContext';

const FormHotelRegistration = () => {
  const store = useContext(AppContext);
  const {
    imageHotelCloudinary,
    // setImage,
    // selectedImages,
    // setSelectedImages,
    // setHotelsData,
    formDataCreateHotel,
    // setFormData,
    handleImageChange,
    handleFormSubmit,
    handleInputChange,
    hotelsDataCreateHotel,
  } = store;
  console.log(hotelsDataCreateHotel);
  // const [image, setImage] = useState('');
  // const [selectedImages, setSelectedImages] = useState([]);
  // const [hotelsData, setHotelsData] = useState([]);
  // const [formData, setFormData] = useState({
  //   index: '',
  //   name: '',
  //   country: '',
  //   city: '',
  //   address: '',
  //   phone: '',
  //   description: '',
  //   stars: '',
  //   normalPrice: '',
  //   salePrice: '',
  //   label1: '',
  //   label2: '',
  //   status: '',
  // });
  // const uploadImage = async (event) => {
  //   const filesa = event.target.files;
  //   const data = new FormData();
  //   data.append('file', filesa[0]);
  //   data.append('upload_preset', 'hotelImages');
  //   const res = await fetch(
  //     'https://api.cloudinary.com/v1_1/drnclewqh/image/upload',
  //     {
  //       method: 'POST',
  //       body: data,
  //     },
  //   );
  //   const file = await res.json();
  //   setImage(file.secure_url);
  //   console.log(file.secure_url);
  // };
  // const handleImageChange = (event) => {
  //   const images = event.target.files;
  //   const imageUrls = [];
  //   for (let i = 0; i < images.length; i += 1) {
  //     const imageUrl = URL.createObjectURL(images[i]);
  //     imageUrls.push(imageUrl);
  //   }
  //   setSelectedImages(imageUrls);
  //   uploadImage(event);
  // };
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const newHotel = {
  //     ...formData,
  //     images: selectedImages,
  //   };
  //   setHotelsData((prevHotelsData) => {
  //     return [...prevHotelsData, newHotel];
  //   });
  //   setFormData({
  //     index: '',
  //     name: '',
  //     country: '',
  //     city: '',
  //     address: '',
  //     description: '',
  //     stars: '',
  //     normalPrice: '',
  //     salePrice: '',
  //     label1: '',
  //     label2: '',
  //     status: '',
  //   });

  //   setSelectedImages([]);
  // };
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => {
  //     return {
  //       ...prevData,
  //       [name]: value,
  //     };
  //   });
  // };
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
          {imageHotelCloudinary && (
            <div>
              <img src={imageHotelCloudinary} alt="Uploaded Room" />
            </div>
          )}
        </div>
        <div className="formHotelContainer__text">
          <form onSubmit={(e) => { return handleFormSubmit(e); }}>
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
