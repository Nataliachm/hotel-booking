/* eslint-disable react/button-has-type */
import React from 'react';
import './CardBlog.scss';

const CardBlog = () => {
  const informationBlog = [
    {
      id: 1,
      day: '01',
      month: 'JAN',
      author: 'Julia Holmes',
      title: 'Lorem Ipsum is simply the of the printing and dummy text of typesetting..',
      content: 'Lorem Ipsum is simply dummy since..',
      image: 'imageMain_blog_1.jpg',
    },
    {
      id: 2,
      day: '24',
      month: 'FEB',
      author: 'Elthon Marshall',
      title: 'Lorem Ipsum is simply the of the printing and dummy text of typesetting..',
      content: 'Lorem Ipsum is simply dummy since..',
      image: 'imageMain_blog_2.jpg',
    },
    {
      id: 3,
      day: '27',
      month: 'AUG',
      author: 'James Fromm',
      title: 'Lorem Ipsum is simply the of the printing and dummy text of typesetting..',
      content: 'Lorem Ipsum is simply dummy since..',
      image: 'imageMain_blog_3.jpg',
    },
  ];

  return (
    <>

      {informationBlog.map((information) => {
        return (
          <div className="container-blog" key={information.id}>
            <div className="container-blog__image-section">
              <div className="container-blog__date">
                <p>{information.day}</p>
                <p>{information.month}</p>
              </div>
              <div className="container-blog__image">
                <img src={information.image} alt="person in lake" />
              </div>
            </div>
            <div className="container-blog__text-section">
              <p>
                Posted By:
                {' '}
                {information.author}
              </p>
              <h3>{information.title}</h3>
              <p>{information.content}</p>
              <button>READ MORE</button>
            </div>

          </div>
        );
      })}
    </>
  );
};

export default CardBlog;
