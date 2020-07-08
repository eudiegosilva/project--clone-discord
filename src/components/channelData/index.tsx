import React, { useRef, useEffect } from 'react';

import {
  ChannelDataContainer,
  InputIcon,
  InputText,
  InputWrapper,
  MessagesWrapper,
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
            key={number}
            authorName="coderamos"
            contentMessage="o/"
            date="2020/05/11"
          />
        ))}
        <ChannelMessage
          authorName="codebot"
          contentMessage="\o/"
          date="2020/05/11"
          isBot
        />
        <ChannelMessage
          authorName="kangaroo"
          contentMessage="haha!"
          date="2020/05/11"
        />
        <ChannelMessage
          authorName="kangaroo"
          date="2020/05/11"
          hasMention
          contentMessage={
            <>
              <Mention>@coderamos</Mention>, that was funny mate!
            </>
          }
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
