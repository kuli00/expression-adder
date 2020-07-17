interface SingleVariable {
  coefficient?: number,
  exponent?: number,
}

export interface ExpressionFormProps {
  id: number;
  register: () => void;
  variables: SingleVariable[];
  addVariable: () => void;
}
