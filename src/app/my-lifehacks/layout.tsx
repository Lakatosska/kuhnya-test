import React, { FC } from 'react';

type TLayout = FC<{ children: React.ReactNode }>;

const LifehacksLayout: TLayout = ({ children }) => {
  return <>{children}</>;
};

export default LifehacksLayout;