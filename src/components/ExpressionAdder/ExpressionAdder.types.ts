export interface SingleVariable {
  coefficient: number;
  exponent: number;
}

export interface UseExpressionAdderTypes {
  register: () => void;
  variables: SingleVariable[][];
  addVariable: (formKey: number) => void;
  calculate: (values: object) => void;
  handleSubmit: (callback: (values: object) => void) => any;
  result: SingleVariable[];
  addForm: () => void;
}