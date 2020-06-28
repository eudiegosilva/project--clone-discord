import styled from 'styled-components';

export const ChannelMessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 16px;
  margin-right: 4px;
  background-color: transparent;

  &.mention {
    background-color: ${(props) => props.theme.colors.mentionmessage};
    border-left: 2px solid ${(props) => props.theme.colors.mentiondetail};
    padding-left: 14px;
  }

  & + div {
    margin-top: 13px;
  }
`;

export const AuthorAvatar = styled.div`
  height: 40px;
  width: 40px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;

  &.bot {
    border: 2px solid ${(props) => props.theme.colors.hover};
  }
`;

export const MessageWrapper = styled.div`
  min-height: 40px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  margin-left: 17px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorName = styled.strong`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
`;

export const BotFlag = styled.span`
  background-color: ${(props) => props.theme.colors.discord};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white};
  font-size: 11px;
  font-weight: bold;
  margin-left: 6px;
  padding: 4px 5px;
  text-transform: uppercase;
`;

export const Date = styled.time`
  margin-left: 6px;
  color: ${(props) => props.theme.colors.gray};
  font-size: 13px;
`;

export const Content = styled.div`
  text-align: left;
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
`;

export const Mention = styled.span`
  color: ${(props) => props.theme.colors.link};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
