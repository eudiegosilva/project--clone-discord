import React from 'react';

import {
  ChannelMessageContainer,
  AuthorAvatar,
  MessageWrapper,
  Header,
  AuthorName,
  BotFlag,
  Date,
  Content,
} from './styles';

export { Mention } from './styles';

export interface ChannelMessageProps {
  authorName: string;
  date: string;
  contentMessage: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

const ChannelMessage: React.FC<ChannelMessageProps> = ({
  authorName,
  date,
  contentMessage,
  hasMention,
  isBot,
}) => {
  return (
    <ChannelMessageContainer className={hasMention ? 'mention' : ''}>
      <AuthorAvatar className={isBot ? 'bot' : ''} />
      <MessageWrapper>
        <Header>
          <AuthorName>{authorName}</AuthorName>
          {isBot && <BotFlag>bot</BotFlag>}
          <Date>{date}</Date>
        </Header>
        <Content>{contentMessage}</Content>
      </MessageWrapper>
    </ChannelMessageContainer>
  );
};

export default ChannelMessage;
