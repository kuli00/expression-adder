import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const useExpressionAdder = () => {
  const [variables, setVariables] = useState([
    [
      {
        coefficient: null,
        exponent: null,
      },
    ],
    [
      {
        coefficient: null,
        exponent: null,
      },
    ],
  ]);
  const { register } = useForm();
  
  const addVariable = () => {
  
  };
  
  return {
    register,
    variables,
    addVariable,
  }
};
