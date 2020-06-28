import React from 'react';

import {
  UserListContainer,
  UserWrapper,
  UserAvatar,
  UserName,
  BotFlag,
  Role,
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
      <Role>Disponível - 1</Role>
      <UserRow nickname="coderamos" />
      <Role>Offline - 12</Role>
      <UserRow nickname="codebot" isBot />
      <UserRow nickname="kangaroo user" />
    </UserListContainer>
  );
};

export default UserList;
