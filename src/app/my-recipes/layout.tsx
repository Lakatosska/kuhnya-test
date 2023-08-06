import React, { FC } from 'react';

type TLayout = FC<{ children: React.ReactNode }>;

const RecipesLayout: TLayout = ({ children }) => {
  return <>{children}</>;
};

export default RecipesLayout;