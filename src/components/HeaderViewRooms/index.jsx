import React, { useEffect, useState } from 'react';
import './HeaderViewRooms.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faXmark } from '@fortawesome/free-solid-svg-icons';

export const HeaderViewRooms = ({ images }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [indexImage, setIndexImage] = useState();
  const [isVisibleRightArrow, setIsVisibleRightArrow] = useState(true);
  const [isVisibleLeftArrow, setIsVisibleLeftArrow] = useState(true);
  useEffect(() => {
    if (indexImage === 0) {
      setIsVisibleLeftArrow(false);
      setIsVisibleRightArrow(true);
    } else if (indexImage === images.length - 1) {
      setIsVisibleRightArrow(false);
      setIsVisibleLeftArrow(true);
    } else {
      setIsVisibleRightArrow(true);
      setIsVisibleLeftArrow(true);
    }
  }, [indexImage]);

  const arrayImageModified = images.slice(1);

  const handleClickImage = (index) => {
    setIndexImage(index);
    setIsVisible(!isVisible);
  };

  const handleClickRightArrow = () => {
    setIndexImage((prevIndex) => {
      return prevIndex + 1;
    });
  };

  const handleClickLeftArrow = () => {
    setIndexImage((prevIndex) => {
      return prevIndex - 1;
    });
  };

  return (
    <>
      <div className="header-view-rooms">
        <div className="header-view-rooms__principal-image">
          <button
            type="button"
            onClick={() => {
              return handleClickImage(0);
            }}
          >
            <img src={images[0].url} alt="view " key={images[0].id} />
          </button>
        </div>
        <div className="header-view-secondary-image">
          {arrayImageModified.map((element, index) => {
            return (
              <button
                type="button"
                onClick={() => {
                  return handleClickImage(index);
                }}
                key={element.id}
              >
                <img src={element.url} alt="view" id={element.id} />
              </button>
            );
          })}
        </div>
      </div>

      {isVisible && (
        <div className="header-carrousel">
          {/* <FontAwesomeIcon icon={faXmark} className="xmark" /> */}
          {isVisibleLeftArrow && (
            <FontAwesomeIcon
              icon={faCaretRight}
              rotation={180}
              className="header-carrousel__leftIcon"
              onClick={handleClickLeftArrow}
            />
          )}
          <div className="header-carrousel__image">
            <FontAwesomeIcon
              icon={faXmark}
              className="header-carrousel__xmark"
              onClick={handleClickImage}
            />
            <img src={images[indexImage].url} alt="hotel view" />
          </div>
          {isVisibleRightArrow && (
            <FontAwesomeIcon
              icon={faCaretRight}
              className="header-carrousel__rightIcon"
              onClick={handleClickRightArrow}
            />
          )}
        </div>
      )}
    </>
  );
};

export default HeaderViewRooms;
