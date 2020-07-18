import React, { FC } from 'react';
import { ContainerProps } from './Container.types';
import { Wrapper, Header, P } from './Container.styled';

export const Container: FC<ContainerProps> = ({ children }) => (
  <Wrapper>
    <Header>Expression Adder</Header>
    <P>You can use the form below to add simple polynomials.</P>
    <P>To extend one equation use the button on the right side.</P>
    <P>Every empty field will be treated as 0.</P>
    {children}
  </Wrapper>
);
