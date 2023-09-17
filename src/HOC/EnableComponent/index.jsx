/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import { useLocation } from 'react-router-dom';

const EnableComponent = ({ enablePaths, children }) => {
  const location = useLocation();
  if (enablePaths.includes(location.pathname)) {
    return children;
  }

  return '';
};

export default EnableComponent;
