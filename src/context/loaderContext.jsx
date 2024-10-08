import React, { createContext, useContext, useState } from 'react';
import Loader from '../components/Loader';

const LoadingContext = createContext();

export const useLoading = () => {
  return useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && <Loader />}
    </LoadingContext.Provider>
  );
};
