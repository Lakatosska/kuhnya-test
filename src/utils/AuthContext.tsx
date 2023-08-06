'use client';

import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextType {
  authorized: boolean;
  setAuthorized: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  authorized: true, 
  setAuthorized: () => {},
});

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authorized, setAuthorized] = useState(true);

  return (
    <AuthContext.Provider value={{ authorized, setAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };


