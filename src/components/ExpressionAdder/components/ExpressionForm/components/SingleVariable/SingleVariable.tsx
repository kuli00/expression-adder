import React, { FC } from 'react';
import { SingleVariableProps } from './SingleVariable.types';
import { Wrapper, Coefficient, Exponent } from './SingleVariable.styled';

export const SingleVariable: FC<SingleVariableProps> = ({
  id,
  formId,
  register,
}) => {
  const coefficientName = `f${formId}.v${id}.coefficient`;
  const exponentName = `f${formId}.v${id}.exponent`;
  return (
    <Wrapper>
      <Coefficient
        id={coefficientName}
        name={coefficientName}
        ref={register}
        type="number"
        step="any"
      />
      x
      <Exponent
        id={exponentName}
        name={exponentName}
        ref={register}
        type="number"
        step="any"
      />
    </Wrapper>
  )
}