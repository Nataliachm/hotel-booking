/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import './CardInformation.scss';
import TitleHome from '../TitleHome';

export const CardInformation = () => {
  const cardsInformation = [
    {
      id: 1,
      title: 'Explore',
      image: '../../../public/imageMain_booking_1.png',
    },
    {
      id: 2,
      title: 'Get Quotes',
      image: '../../../public/imageMain_booking_2.png',
    },
    {
      id: 3,
      title: 'Customize',
      image: '../../../public/imageMain_booking_3.png',
    },
    {
      id: 4,
      title: 'Book & Enjoy',
      image: '../../../public/imageMain_booking_4.png',
    },
  ];

  return (
    <div className="container-information">
      <div className="bird-container bird-container--one">
        <div className="bird bird--one" />
      </div>

      <div className="bird-container bird-container--two">
        <div className="bird bird--two" />
      </div>

      <div className="bird-container bird-container--three">
        <div className="bird bird--three" />
      </div>

      <div className="bird-container bird-container--four">
        <div className="bird bird--four" />
      </div>
      <div className="container-information_text">
        <TitleHome title={'Super Easy Booking'} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aperiam
          at, aut commodi corporis dolorum ducimus labore magnam mollitia natus porro possimus
          quae sit tenetur veniam veritatis voluptate voluptatem!
        </p>
      </div>
      <div className="container-information__images">

        {
          cardsInformation.map((information) => {
            return (
              <div className="container-information__image" key={information.id}>
                <img src={information.image} alt={information.title} />
                <p>{information.title}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default CardInformation;
