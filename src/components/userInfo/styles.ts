import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';
import coderamos from '../../assets/coderamos.jpg';

export const UserInfoContainer = styled.div`
  grid-area: USER_INFO;

  align-items: center;
  background-color: ${(props) => props.theme.colors.quaternary};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const ProfileWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const UserAvatar = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  background-image: url(${coderamos});
  border-radius: 50%;
  height: 32px;
  width: 32px;
`;

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

export const UserName = styled.strong`
  color: ${(props) => props.theme.colors.white};
  display: block;
  font-size: 13px;
`;

export const UserId = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: 13px;
`;

export const IconsWrapper = styled.div`
  align-items: center;
  display: flex;

  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const MicIcon = styled(Mic)`
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  height: 20px;
  opacity: 0.7;
  transition: opacity 0.2s;
  width: 20px;

  &:hover {
    opacity: 1;
  }
`;

export const HeadsetIcon = styled(Headset)`
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  height: 20px;
  opacity: 0.7;
  transition: opacity 0.2s;
  width: 20px;

  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(Settings)`
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  height: 20px;
  opacity: 0.7;
  transition: opacity 0.2s;
  width: 20px;

  &:hover {
    opacity: 1;
  }
`;
