import React from 'react';

import {
  UserInfoContainer,
  ProfileWrapper,
  UserAvatar,
  UserDataWrapper,
  UserName,
  UserId,
  IconsWrapper,
  MicIcon,
  HeadsetIcon,
  SettingsIcon,
} from './styles';

const UserInfo: React.FC = () => {
  return (
    <UserInfoContainer>
      <ProfileWrapper>
        <UserAvatar />
        <UserDataWrapper>
          <UserName>coderamos</UserName>
          <UserId>#3451</UserId>
        </UserDataWrapper>
      </ProfileWrapper>
      <IconsWrapper>
        <MicIcon />
        <HeadsetIcon />
        <SettingsIcon />
      </IconsWrapper>
    </UserInfoContainer>
  );
};

export default UserInfo;
