import styled from "styled-components";

export const TextArea = styled.TextInput`
  height: 250px;
  width: 100%;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;
