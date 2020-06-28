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
      <ChannelTitle>typescript-website</ChannelTitle>
      <Separator />
      <ChannelDescription>
        Discussion about features, changes or improvements
      </ChannelDescription>
    </ChannelInfoContainer>
  );
};

export default ChannelInfo;
