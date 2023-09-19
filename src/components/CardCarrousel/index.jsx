import { useState } from 'react';
import './CardCarrousel.scss';

export const CardCarrousel = () => {
  const informationCards = [
    {
      id: 1,
      title: 'Hotel Booking',
      text: 'Avail Hot Deals On Hotel Booking To Any Place',
      image: 'imageMain_1.jpg',
    },
    {
      id: 2,
      title: 'Flight Offer',
      text: 'Grab Amazing Deals on Flight Ticket Booking',
      image: 'imageMain_2.jpg',
    },
    {
      id: 3,
      title: 'Holiday Booking',
      text: 'Weekend Sale For Holiday Bookings',
      image: 'imageMain_3.jpg',
    },
    {
      id: 4,
      title: 'Food Order',
      text: 'Complimantary Breakfast. Use Code RICAFOOD',
      image: 'imageMain_4.jpg',
    },
    {
      id: 5,
      title: 'Hire Cap',
      text: '50% Cashback On Every Cab Booking',
      image: 'imageMain_5.jpg',
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const [offers, setOffers] = useState(informationCards);

  return (
    <>
      {offers.map((offer) => {
        return (
          <div className="CardCarrousel__container" key={offer.id}>
            <div className="container__image">
              <img src={offer.image} alt="" />
            </div>
            <div className="container__text">
              <h3>{offer.title}</h3>
              <p>{offer.text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardCarrousel;
