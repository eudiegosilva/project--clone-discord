import styled from 'styled-components';

import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const ChannelButtonContainer = styled.div`
  align-items: center;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 5px 3px;
  transition: background-color 0.2s;

  &:hover,
  &.active {
    background-color: ${(props) => props.theme.colors.quinary};

    > div span {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

export const LeftWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const HashtagIcon = styled(Hashtag)`
  color: ${(props) => props.theme.colors.symbol};
  height: 20px;
  width: 20px;
`;

export const ChannelName = styled.span`
  color: ${(props) => props.theme.colors.senary};
  font-size: 15px;
  margin-left: 5px;
`;

export const RightWrapper = styled.div`
  align-items: center;
  display: flex;
  opacity: ${(props) => (props.className === 'active' ? 1 : 0)};
  transition: opacity 0.2s;
`;

export const InviteIcon = styled(PersonAdd)`
  color: ${(props) => props.theme.colors.symbol};
  cursor: pointer;
  height: 16px;
  transition: color 0.2s;
  width: 16px;

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

export const SettingsIcon = styled(Settings)`
  color: ${(props) => props.theme.colors.symbol};
  cursor: pointer;
  height: 16px;
  margin-left: 4px;
  transition: color 0.2s;
  width: 16px;

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;
