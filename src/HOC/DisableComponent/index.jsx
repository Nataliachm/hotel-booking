/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import { useLocation } from 'react-router-dom';

const DisableComponent = ({ disablePaths, children }) => {
  const location = useLocation();
  if (!disablePaths.includes(location.pathname)) {
    return children;
  }

  return '';
};

export default DisableComponent;
