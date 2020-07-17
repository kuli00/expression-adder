import React, { FC } from 'react';
import { SingleVariableProps } from './SingleVariable.types';
import { Wrapper, Coefficient, Exponent } from './SingleVariable.styled';

export const SingleVariable: FC<SingleVariableProps> = ({
  id,
  register,
  freeExpresion,
}) => (
  <Wrapper>
    <Coefficient id={`${id}-e`} register={register} type="number"/>
    {!freeExpresion && (
      <>
        x
        <Exponent id={`${id}-c`} register={register} type="number"/>
      </>
    )}
  </Wrapper>
)