import styled from 'styled-components';
import { AlternateEmail } from 'styled-icons/material';

export const ChannelDataContainer = styled.div`
  grid-area: CHANNEL_DATA;

  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh -46px -68px);
  overflow-y: scroll;
  padding: 20px 0;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.tertiary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const InputWrapper = styled.div`
  padding: 0 16px;
  width: 100%;
`;

export const InputText = styled.input`
  background-color: ${(props) => props.theme.colors.chatinput};
  border-radius: 7px;
  color: ${(props) => props.theme.colors.white};
  height: 44px;
  padding: 0 10px 0 57px;
  position: relative;
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const InputIcon = styled(AlternateEmail)`
  color: ${(props) => props.theme.colors.gray};
  height: 24px;
  left: 14px;
  position: relative;
  top: -50%;
  transition: 180ms ease-in-out;
  width: 24px;
`;
