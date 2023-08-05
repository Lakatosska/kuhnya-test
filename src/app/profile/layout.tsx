import React, { FC } from 'react';

type TLayout = FC<{ children: React.ReactNode }>;

const ProfileLayout: TLayout = ({ children }) => {
  return <>{children}</>;
};

export default ProfileLayout;