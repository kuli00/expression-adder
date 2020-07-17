import React, { FC } from 'react';
import { SingleVariableProps } from './SingleVariable.types';
import { Wrapper } from './SingleVariable.styled';

export const SingleVariable: FC<SingleVariableProps> = ({ id, register }) => (
  <Wrapper>
    single var
  </Wrapper>
)