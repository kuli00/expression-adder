import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  border: 1px solid;
  border-radius: 4px;
  text-align: center;
  appearance: none;
  padding: 10px;
  margin: 10px 0;
  
  &:hover {
    cursor: pointer;
  }
`;

export const SubmitButton = styled(Button)`
  border-color: #282c34;
  background-color: #61dafb;
  
`;

export const AddFormButton = styled(Button)`
  border-color: green;
  background-color: white;
`;
