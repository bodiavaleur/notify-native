import styled, { css } from "styled-components";

const textDefaults = css`
  font-weight: 400;
  color: ${({ theme }) => theme.text};

  ${({ white }) => white && `color: white`};
  ${({ primary, theme }) => primary && `color: ${theme.primaryColor}`};
`;

export const Title = styled.Text`
  ${textDefaults};
  margin: 20px 0;
  font-weight: 600;
  font-size: 36px;
`;

export const TopTitle = styled.Text`
  ${textDefaults};
  font-weight: 600;
  font-size: 42px;
`;

export const NoteTitle = styled.Text`
  ${textDefaults};
  font-weight: 600;
  font-size: 16px;
`;

export const NoteTime = styled.Text`
  ${textDefaults};
  font-weight: 300;
  font-size: 12px;
`;

export const NoteText = styled.Text`
  ${textDefaults};
  font-weight: 400;
  font-size: 12px;
`;
