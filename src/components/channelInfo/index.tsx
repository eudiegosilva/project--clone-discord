import React from 'react';

import {
  ChannelInfoContainer,
  HashtagIcon,
  ChannelTitle,
  Separator,
  ChannelDescription,
} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <ChannelInfoContainer>
      <HashtagIcon />
      <ChannelTitle>free-chat</ChannelTitle>
      <Separator />
      <ChannelDescription>let's start chat!</ChannelDescription>
    </ChannelInfoContainer>
  );
};

export default ChannelInfo;
