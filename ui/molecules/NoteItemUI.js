import styled from "styled-components";

export const NoteItemUI = styled.View`
  width: 100%;
  height: 64px;
  max-width: 420px;
  margin: 8px 0;
  padding: 5px;
  border-radius: 8px;
  background: ${({ theme }) => theme.gray};
`;

export const NoteItemHeader = styled.View`
  width: 100%;
  height: 24px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
