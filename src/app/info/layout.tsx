import React, { FC } from 'react';

type TLayout = FC<{ children: React.ReactNode }>;

const InfoPageLayout: TLayout = ({ children }) => {
  return <>{children}</>;
};

export default InfoPageLayout;