import React from 'react';

import { Button, ButtonImage } from './styles';

import discordLogo from '../../assets/discord.svg';

export interface ButtonProps {
  hasNotifications?: boolean;
  isHome?: boolean;
  mentions?: number;
  selected?: boolean;
}
const ServerButton: React.FC<ButtonProps> = ({
  hasNotifications,
  isHome,
  mentions,
  selected,
}) => {
  return (
    <Button
      className={selected ? 'active' : ''}
      hasNotifications={hasNotifications}
      isHome={isHome}
      mentions={mentions}
    >
      {isHome && <ButtonImage src={discordLogo} alt="discord" />}
    </Button>
  );
};

export default ServerButton;
