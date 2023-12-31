import React from 'react';
import './CardDestination.scss';

const CardDestination = () => {
  const destinations = [{
    id: 1,
    country: 'South Africa',
    text: 'Starting From $5000',
    image: 'imageMain_africa.jpg',
  },
  {
    id: 2,
    country: 'India',
    text: 'Starting From $5000',
    image: 'imageMain_India.jpg',
  },
  {
    id: 3,
    country: 'Australia',
    text: 'Starting From $5000',
    image: 'imageMain_Australia.jpg',
  },
  {
    id: 4,
    country: 'Europe',
    text: 'Starting From $5000',
    image: 'imageMain_Europe.jpg',
  },
  {
    id: 5,
    country: 'America',
    text: 'Starting From $5000',
    image: 'imageMain_America.jpg',
  },
  {
    id: 6,
    country: 'Japan',
    text: 'Starting From $5000',
    image: 'imageMain_Japan.jpg',
  },
  ];

  return (
    <>

      {
        destinations.map((destination) => {
          return (
            <div className="container-destination" key={destination.id}>
              <div className="container-destination__image">
                <img src={destination.image} alt="South Africa" />
              </div>
              <div className="container-destination__text">
                <h3>{destination.country}</h3>
                <p>Starting From $5000</p>
              </div>
            </div>
          );
        })
    }
    </>
  );
};

export default CardDestination;
