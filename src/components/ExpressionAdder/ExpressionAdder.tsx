import React from 'react';
import { useExpressionAdder } from './ExpressionAdder.hook';
import { ExpressionForm } from './components/ExpressionForm';
import { Result } from './components/Result';
import { SubmitButton, AddFormButton } from './ExpressionAdder.styled';

export const ExpressionAdder = () => {
  const {
    register,
    variables,
    addVariable,
    addForm,
    calculate,
    handleSubmit,
    result,
  } = useExpressionAdder();
  
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
      <AddFormButton type="button" onClick={addForm}>Add equation</AddFormButton>
      <SubmitButton type="submit">Calculate</SubmitButton>
      <Result result={result} />
    </form>
  )
};
