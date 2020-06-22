import styled from 'styled-components';

import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${(props) =>
    props.isHome ? props.theme.colors.discord : props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  height: 48px;
  justify-content: center;
  margin-bottom: 8px;
  position: relative;
  transition: border-radius 0.2s, background-color 0.2s;
  width: 48px;

  &::before {
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
    content: '';
    display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};
    height: 9px;
    left: -17px;
    position: absolute;
    top: calc(50% - 4.5px);
    width: 9px;
  }

  &::after {
    background-color: ${(props) => props.theme.colors.notification};
    border-radius: 12px;
    border: 4px solid ${(props) => props.theme.colors.quaternary};
    bottom: -4px;
    color: ${(props) => props.theme.colors.white};
    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) => (props.mentions ? 'inline' : 'none')};
    font-size: 13px;
    font-weight: bold;
    height: 16px;
    padding: 0 4px;
    position: absolute;
    right: -4px;
    text-align: right;
    top: calc(50% - 4.5px);
    width: auto;
  }

  &.active,
  &:hover {
    background-color: ${(props) =>
      props.isHome ? props.theme.colors.discord : props.theme.colors.hover};
    border-radius: 16px;
    cursor: pointer;
  }
`;

export const ButtonImage = styled.img`
  height: 24px;
  width: 24px;
`;
