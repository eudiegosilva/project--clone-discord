import React from 'react';

import {
  ChannelDataContainer,
  MessagesWrapper,
  InputWrapper,
  InputText,
  InputIcon,
} from './styles';

const ChannelData: React.FC = () => {
  return (
    <ChannelDataContainer>
      <MessagesWrapper></MessagesWrapper>
      <InputWrapper>
        <InputText placeholder="Message em #typescript-website" />
        <InputIcon />
      </InputWrapper>
    </ChannelDataContainer>
  );
};

export default ChannelData;
