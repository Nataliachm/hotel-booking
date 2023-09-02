import { useRef, useState } from 'react';
import './PersonCard.scss';

const PersonCard = (props) => {
  const { img, btn2, userName } = props;
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(img);

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const data = new FormData();
      data.append('file', selectedFile);
      data.append('upload_preset', 'hotelImages');
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/drnclewqh/image/upload',
        {
          method: 'POST',
          body: data,
        },
      );
      const file = await res.json();
      setImageSrc(file.secure_url);
    }
  };
  return (
    <div className="person">
      <div className="person__card">
        <div className="profile-img-container">
          <button
            type="button"
            className="profile-img-button"
            onClick={() => { return fileInputRef.current.click(); }}
          >
            <img
              src={imageSrc}
              alt="profileImg"
              className="profile-img"
            />
          </button>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
        </div>
        <div className="person__card__info">
          <div>
            <h2 className="card__name">{userName}</h2>
          </div>
          <div>
            <h3 className="email">{localStorage.email}</h3>
          </div>
        </div>
        <div className="person__card__additional-info">
          <div>
            <a href="enlace1.html" className="additional-link">
              Profile
            </a>
          </div>
          <div>
            <a href="enlace2.html" className="additional-link">
              {btn2}
            </a>
          </div>
          <div>
            <a href="enlace3.html" className="additional-link">
              Bookings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
