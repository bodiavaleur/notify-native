import styled from "styled-components";

export const Input = styled.TextInput`
  flex: 1;
  height: 36px;
  margin: 16px 0;
  border-radius: 8px;
  text-align: center;
  background: ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.text};
`;

export const TitleInput = styled.TextInput`
  height: 42px;
  width: 100%;
  max-width: 420px;
  margin: 16px 0;
  font-size: 32px;
  color: ${({ theme }) => theme.text};
`;
