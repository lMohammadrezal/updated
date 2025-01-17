// src/contexts/LoadingContext.js
import React, { createContext, useState } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
 
  return (
    <LoadingContext.Provider value={{loading,setLoading}}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingContext;
