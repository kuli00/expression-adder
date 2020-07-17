import styled from 'styled-components';
import { DocumentAdd } from '@styled-icons/heroicons-outline';

export const Wrapper = styled.div`
  display: block;
  padding: 10px;
  border: 1px solid #969696;
  border-radius: 4px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Form = styled.div``;

export const AddVariableButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddVariableIcon = styled(DocumentAdd)`
  color: greenyellow;
  width: 30px;
  height: 30px;
  
  &:hover {
    cursor: pointer;
  }
`;