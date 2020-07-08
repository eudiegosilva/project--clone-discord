import React from 'react';

import {
  BotFlag,
  Role,
  UserAvatar,
  UserListContainer,
  UserName,
  UserWrapper,
} from './styles';

interface UserRowProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserRowProps> = ({ nickname, isBot }) => {
  return (
    <UserWrapper>
      <UserAvatar className={isBot ? 'bot' : ''} />
      <UserName>{nickname}</UserName>
      {isBot && <BotFlag>bot</BotFlag>}
    </UserWrapper>
  );
};

const UserList: React.FC = () => {
  return (
    <UserListContainer>
      <Role>online - 1</Role>
      <UserRow nickname="coderamos" />
      <UserRow nickname="codebot" isBot />
      <Role>Offline - 12</Role>
      <UserRow nickname="kangaroo user" />
    </UserListContainer>
  );
};

export default UserList;
