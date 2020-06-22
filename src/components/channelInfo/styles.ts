import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';

export const ChannelInfoContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  display: flex;
  grid-area: CHANNEL_INFO;
  padding: 0 17px;
  z-index: 2;
`;

export const HashtagIcon = styled(Hashtag)`
  color: ${(props) => props.theme.colors.symbol};
  height: 24px;
  width: 24px;
`;

export const ChannelTitle = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-weight: bold;
  margin-left: 9px;
`;

export const Separator = styled.span`
  background-color: ${(props) => props.theme.colors.white};
  height: 24px;
  margin: 0 13px;
  opacity: 0.2;
  width: 1px;
`;

export const ChannelDescription = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 15px;
`;
