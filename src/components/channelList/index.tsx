import React from 'react';

import {
  ChannelListContainer,
  CategoryWrapper,
  CategoryName,
  AddCategoryIcon,
} from './styles';

import ChannelButton from '../channelButton';

const ChannelList: React.FC = () => {
  return (
    <ChannelListContainer>
      <CategoryWrapper>
        <CategoryName>canais de texto</CategoryName>
        <AddCategoryIcon />
      </CategoryWrapper>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="gta-v" />
      <ChannelButton channelName="cs:go" />
      <ChannelButton channelName="mad-max" />
    </ChannelListContainer>
  );
};

export default ChannelList;
