import React from 'react';

import {
  AddCategoryIcon,
  ArrowIcon,
  CategoryName,
  CategoryWrapper,
  ChannelListContainer,
} from './styles';

import ChannelButton from '../channelButton';

const ChannelList: React.FC = () => {
  return (
    <ChannelListContainer>
      <CategoryWrapper>
        <CategoryName>
          <ArrowIcon />
          information
        </CategoryName>
        <AddCategoryIcon />
      </CategoryWrapper>

      <ChannelButton channelName="welcome" />

      <CategoryWrapper>
        <CategoryName>
          <ArrowIcon />
          information
        </CategoryName>
        <AddCategoryIcon />
      </CategoryWrapper>

      <ChannelButton channelName="ts-discussion" />
      <ChannelButton channelName="random" />
      <ChannelButton channelName="bot-commands" />

      <CategoryWrapper>
        <CategoryName>
          <ArrowIcon />
          help
        </CategoryName>
        <AddCategoryIcon />
      </CategoryWrapper>

      <ChannelButton channelName="react" />
      <ChannelButton channelName="language-design" />
    </ChannelListContainer>
  );
};

export default ChannelList;
