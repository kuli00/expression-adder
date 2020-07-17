import React, { FC } from 'react';
import { ContainerProps } from './Container.types';
import { Wrapper } from './Container.styled';

export const Container: FC<ContainerProps> = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);
