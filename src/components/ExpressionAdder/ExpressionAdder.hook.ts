import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const useExpressionAdder = () => {
  const emptyVariable = {
    coefficient: null,
    exponent: null,
  };
  
  const [variables, setVariables] = useState([
    [ Object.create(emptyVariable) ],
    [ Object.create(emptyVariable) ],
  ]);
  const { register } = useForm();
  
  const addVariable = (formKey: number) => {
    setVariables(prevState => {
      const newState = [...prevState];
      newState[formKey] = [
        ...newState[formKey],
        Object.create(emptyVariable),
      ];
      return newState;
    });
  };
  
  return {
    register,
    variables,
    addVariable,
  }
};
