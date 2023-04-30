import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Field as FieldFormic,
} from 'formik';

export const Form = styled(FormikForm)`
  width: 400px;
  padding: 12px;
  border: 1px solid #2a2a2a;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 10px;
  box-shadow: ${p => p.theme.boxShadow};
  border: ${p => p.theme.border};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const Field = styled(FieldFormic)`
  width: 100%;
  font-size: 13px;
  padding: 6px 0 4px 10px;
  border: ${p => p.theme.borderInput};
  background: ${p => p.theme.colors.backgroundInput};
  border-radius: 8px;
`;

export const addButton = styled.button`
  margin-top: 10px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 1px 10px;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 12px;
  color: ${p => p.theme.colors.message};
`;
