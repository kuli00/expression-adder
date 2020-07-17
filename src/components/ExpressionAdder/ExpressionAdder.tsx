import React from 'react';
import { useExpressionAdder } from './ExpressionAdder.hook';
import { ExpressionForm } from './components/ExpressionForm';
import { SubmitButton } from './ExpressionAdder.styled';

export const ExpressionAdder = () => {
  const { register, variables, addVariable } = useExpressionAdder();
  return (
    <>
      {variables.map((v, key) => (
        <ExpressionForm key={key} register={register} variables={v} />
      ))}
      <SubmitButton>Calculate</SubmitButton>
    </>
  )
};
