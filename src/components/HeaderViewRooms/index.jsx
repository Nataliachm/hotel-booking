/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './HeaderViewRooms.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faCaretRight, faXmark } from '@fortawesome/free-solid-svg-icons';

export const HeaderViewRooms = () => {
  const arrayImages = [
    {
      id: 1,
      url: 'https://themes.pixelstrap.com/rica/assets/images/single-hotel/slider/10.jpg',
    },
    {
      id: 2,
      url: 'https://themes.pixelstrap.com/rica/assets/images/single-hotel/slider/11.jpg',
    },
    {
      id: 3,
      url: 'https://themes.pixelstrap.com/rica/assets/images/single-hotel/slider/7.jpg',
    },
    {
      id: 4,
      url: 'https://themes.pixelstrap.com/rica/assets/images/single-hotel/slider/6.jpg',
    },
    {
      id: 5,
      url: 'https://themes.pixelstrap.com/rica/assets/images/single-hotel/slider/8.jpg',
    },
  ];

  const [image, setImage] = useState(arrayImages[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [indexImage, setIndexImage] = useState();
  const [isVisibleRightArrow, setIsVisibleRightArrow] = useState(true);
  const [isVisibleLeftArrow, setIsVisibleLeftArrow] = useState(true);

  const arrayImageModified = arrayImages.slice(1);

  const handleClickImage = (id) => {
    setIndexImage(id - 1);
    setImage(arrayImages[id - 1]);
    setIsVisible(!isVisible);
    if (id - 1 === 0) {
      setIsVisibleLeftArrow(false);
    } else if (id - 1 === 4) {
      setIsVisibleRightArrow(false);
    }
  };

  const handleClickRightArrow = () => {
    const rightIndex = indexImage + 1;
    setIndexImage(rightIndex);
    setImage(arrayImages[rightIndex]);

    if (!isVisibleLeftArrow) {
      setIsVisibleLeftArrow(true);
    } else if (rightIndex === 4) {
      setIsVisibleRightArrow(false);
    }
  };

  const handleClickLeftArrow = () => {
    const leftIndex = indexImage - 1;
    setIndexImage(leftIndex);
    setImage(arrayImages[leftIndex]);
    if (!isVisibleRightArrow) {
      setIsVisibleRightArrow(true);
    } else if (leftIndex === 0) {
      setIsVisibleLeftArrow(false);
    }
  };

  return (
    <>
      <div className="header-view-rooms">
        <div className="header-view-rooms__principal-image">
          <img src={arrayImages[0].url} alt="view" key={arrayImages[0].id} onClick={() => { return handleClickImage(arrayImages[0].id); }} />
        </div>
        <div className="header-view-secondary-image">
          {
                arrayImageModified.map((element) => {
                  return (
                    <img src={element.url} alt="view" key={element.id} id={element.id} onClick={() => { return handleClickImage(element.id); }} />
                  );
                })
            }
        </div>
      </div>

      {
        isVisible
      && (

        <div className="header-carrousel">
          {/* <FontAwesomeIcon icon={faXmark} className="xmark" /> */}
          {isVisibleLeftArrow && <FontAwesomeIcon icon={faCaretRight} rotation={180} className="header-carrousel__leftIcon" onClick={handleClickLeftArrow} />}
          <div className="header-carrousel__image">
            <FontAwesomeIcon icon={faXmark} className="header-carrousel__xmark" onClick={handleClickImage} />
            <img src={image.url} alt="hotel view" />
          </div>
          {isVisibleRightArrow && <FontAwesomeIcon icon={faCaretRight} className="header-carrousel__rightIcon" onClick={handleClickRightArrow} />}
        </div>
      )
    }
    </>
  );
};

export default HeaderViewRooms;
