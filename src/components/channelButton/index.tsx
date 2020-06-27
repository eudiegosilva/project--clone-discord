import React from 'react';

import {
  ChannelButtonContainer,
  LeftWrapper,
  HashtagIcon,
  ChannelName,
  RightWrapper,
  InviteIcon,
  SettingsIcon,
} from './styles';

export interface ChannelButtonProps {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<ChannelButtonProps> = ({
  channelName,
  selected,
}) => {
  return (
    <ChannelButtonContainer className={selected ? 'active' : ''}>
      <LeftWrapper>
        <HashtagIcon />
        <ChannelName>{channelName}</ChannelName>
      </LeftWrapper>

      <RightWrapper>
        <InviteIcon />
        <SettingsIcon />
      </RightWrapper>
    </ChannelButtonContainer>
  );
};

export default ChannelButton;
