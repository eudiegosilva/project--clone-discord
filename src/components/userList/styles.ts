import styled from 'styled-components';

export const UserListContainer = styled.div`
  grid-area: USER_LIST;

  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 46px);
  overflow-y: scroll;
  padding: 3px 6px 0 16px;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.tertiary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Role = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: 12px;
  font-weight: 500;
  margin-top: 20px;
  text-transform: uppercase;
`;

export const UserWrapper = styled.div`
  align-items: center;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  margin-top: 5px;
  padding: 5px;
  transition: background 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const UserAvatar = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  flex-shrink: 0;
  height: 32px;
  width: 32px;

  &.bot {
    border: 2px solid ${(props) => props.theme.colors.hover};
  }
`;

export const UserName = styled.strong`
  color: ${(props) => props.theme.colors.white};
  font-weight: 500;
  margin-left: 13px;
  opacity: 0.7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const BotFlag = styled.span`
  background-color: ${(props) => props.theme.colors.discord};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white};
  font-size: 11px;
  font-weight: bold;
  margin-left: 9px;
  padding: 4px 5px;
  text-transform: uppercase;
`;
