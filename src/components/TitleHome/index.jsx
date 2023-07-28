/* eslint-disable react/prop-types */
import React from 'react';
import './Title.scss';

const TitleHome = (props) => {
  const { title } = props;
  return (
    <h2>{title}</h2>
  );
};

export default TitleHome;
