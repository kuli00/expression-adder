import React from 'react';
import { useExpressionAdder } from './ExpressionAdder.hook';
import { ExpressionForm } from './components/ExpressionForm';
import { Result } from './components/Result';
import { SubmitButton } from './ExpressionAdder.styled';

export const ExpressionAdder = () => {
  const { register, variables, addVariable, calculate, handleSubmit, result } = useExpressionAdder();
  
  return (
    <form onSubmit={handleSubmit(calculate)}>
      {variables.map((v, key) => (
        <ExpressionForm
          key={key}
          id={key}
          register={register}
          variables={v}
          addVariable={() => addVariable(key)}
        />
      ))}
      <SubmitButton type="submit">Calculate</SubmitButton>
      <Result result={result} />
    </form>
  )
};
