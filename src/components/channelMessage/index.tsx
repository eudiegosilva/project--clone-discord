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
  contentMessage: string | React.ReactElement | React.ReactNode;
  date: string;
  hasMention?: boolean;
  isBot?: boolean;
}

const ChannelMessage: React.FC<ChannelMessageProps> = ({
  authorName,
  contentMessage,
  date,
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
