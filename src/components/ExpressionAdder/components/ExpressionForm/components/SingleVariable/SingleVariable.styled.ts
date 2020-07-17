import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin: 10px;
  padding-right: 30px;
`;

const NumberInput = styled.input`
  -moz-appearance: textfield;
  max-width: 20px;
  max-height: 20px;
  text-align: center;
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Coefficient = styled(NumberInput)``;

export const Exponent = styled(NumberInput)`
  position: absolute;
  top: -10px;
  right: 0;
  text-align: center;
`;