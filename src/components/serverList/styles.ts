import styled from 'styled-components';

export const ServerListContainer = styled.div`
  grid-area: SERVER_LIST;

  align-items: center;
  background-color: ${(props) => props.theme.colors.tertiary};
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: scroll;
  padding: 11px 0;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  border-bottom: 2px solid ${(props) => props.theme.colors.quaternary};
  margin-bottom: 8px;
  width: 32px;
`;
