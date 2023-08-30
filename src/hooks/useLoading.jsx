import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useIsLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const handleIsLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    window.addEventListener('load', handleIsLoading());
    return () => { return window.removeEventListener('load', handleIsLoading); };
  }, [location.pathname]);

  return [isLoading];
};

export default useIsLoading;
