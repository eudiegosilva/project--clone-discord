import React, { useState } from 'react';

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
}

const ChannelButton: React.FC<ChannelButtonProps> = ({ channelName }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <ChannelButtonContainer
      className={isActive ? 'active' : ''}
      onMouseEnter={() => setIsActive(!isActive)}
      onMouseLeave={() => setIsActive(!isActive)}
      onClick={() => setIsActive(!isActive)}
    >
      <LeftWrapper>
        <HashtagIcon />
        <ChannelName>{channelName}</ChannelName>
      </LeftWrapper>

      <RightWrapper className={isActive ? 'active' : ''}>
        <InviteIcon />
        <SettingsIcon />
      </RightWrapper>
    </ChannelButtonContainer>
  );
};

export default ChannelButton;
