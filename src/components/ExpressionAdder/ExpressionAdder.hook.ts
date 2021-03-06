import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { mergeWith, add, orderBy } from 'lodash';
import { SingleVariable, UseExpressionAdderTypes } from './ExpressionAdder.types';

export const useExpressionAdder = (): UseExpressionAdderTypes => {
  const emptyVariable = {
    coefficient: 0,
    exponent: 0,
  };
  
  const [variables, setVariables] = useState<SingleVariable[][]>([
    [ Object.create(emptyVariable) ],
    [ Object.create(emptyVariable) ],
  ]);
  const [result, setResult] = useState<SingleVariable[]>([]);
  const { register, handleSubmit } = useForm();
  
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
  
  const addForm = () => {
    setVariables(prevState => [...prevState, [Object.create(emptyVariable)]]);
  };
  
  const calculate = values => {
    const forms: Object[] = [];
    // eslint-disable-next-line
    Object.keys(values).map(form => {
      const calculatedForm = {};
      // eslint-disable-next-line
      Object.keys(values[form]).map(variable => {
        const coefficient = parseFloat(values[form][variable].coefficient) || 0;
        const exponent = parseFloat(values[form][variable].exponent) || 0;
        calculatedForm[exponent] = calculatedForm[exponent] + coefficient || coefficient;
      })
      forms.push(calculatedForm);
    });
    
    const summedForms = mergeWith({}, ...forms, add)
    setResult(orderBy(
      Object.keys(summedForms).map(key => ({
        exponent: parseFloat(key),
        coefficient: summedForms[key]
      })),
      ['exponent'],
      ['desc'],
    ));
  }
  
  return {
    register,
    variables,
    addVariable,
    calculate,
    handleSubmit,
    result,
    addForm,
  };
};
