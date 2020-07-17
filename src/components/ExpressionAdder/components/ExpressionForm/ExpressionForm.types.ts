interface SingleVariable {
  coefficient?: number,
  exponent?: number,
}

export interface ExpressionFormProps {
  register: () => void;
  variables: SingleVariable[];
  addVariable: () => void;
}
