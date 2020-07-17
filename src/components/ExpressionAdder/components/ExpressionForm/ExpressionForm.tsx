import React, { FC } from 'react';
import { Wrapper, Form, AddVariableButton, AddVariableIcon } from './ExpressionForm.styled';
import { ExpressionFormProps } from './ExpressionForm.types';
import { SingleVariable } from './components/SingleVariable';

export const ExpressionForm: FC<ExpressionFormProps> = ({ register, variables, addVariable }) => {
  return (
    <Wrapper>
      <Form>
        {variables.map((v, key) => (
          <SingleVariable
            key={key}
            id={key}
            register={register}
            coefficient={v.coefficient}
            exponent={v.exponent}
          />
        ))}
      </Form>
      <AddVariableButton>
        <AddVariableIcon title="Add another variable" onClick={addVariable} />
      </AddVariableButton>
    </Wrapper>
  );
};
