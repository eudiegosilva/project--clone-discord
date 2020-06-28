import React, { useRef, useEffect } from 'react';

import {
  ChannelDataContainer,
  MessagesWrapper,
  InputWrapper,
  InputText,
  InputIcon,
} from './styles';

import ChannelMessage, { Mention } from '../channelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const div = messagesRef.current;

    div && (div.scrollTop = div.scrollHeight);
  }, [messagesRef]);
  return (
    <ChannelDataContainer>
      <MessagesWrapper ref={messagesRef}>
        {Array.from(Array(20).keys()).map((number) => (
          <ChannelMessage
            authorName="coderamos"
            date="2020/05/11"
            contentMessage="o/"
          />
        ))}
        <ChannelMessage
          authorName="codebot"
          date="2020/05/11"
          contentMessage="\o/"
          isBot
        />
        <ChannelMessage
          authorName="kangaroo"
          date="2020/05/11"
          contentMessage="haha!"
        />
        <ChannelMessage
          authorName="kangaroo"
          date="2020/05/11"
          contentMessage={
            <>
              <Mention>@coderamos</Mention>, that was funny mate!
            </>
          }
          hasMention
        />
      </MessagesWrapper>
      <InputWrapper>
        <InputText placeholder="Message em #typescript-website" />
        <InputIcon />
      </InputWrapper>
    </ChannelDataContainer>
  );
};

export default ChannelData;
