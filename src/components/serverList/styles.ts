import styled from 'styled-components';

export const ServerListContainer = styled.div`
  grid-area: SERVER_LIST;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.tertiary};
  padding: 11px 0;
  max-height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid ${(props) => props.theme.colors.quaternary};
  margin-bottom: 8px;
`;
