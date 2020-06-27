import React from 'react';

import { ServerListContainer, Separator } from './styles';
import ServerButton from '../serverButton';

const ServerList: React.FC = () => {
  return (
    <ServerListContainer>
      <ServerButton isHome />
      <Separator />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton mentions={1} />
      <ServerButton mentions={7} />
      <ServerButton mentions={8} hasNotifications />
      <ServerButton mentions={2} hasNotifications />
      <ServerButton hasNotifications />
      <ServerButton hasNotifications />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </ServerListContainer>
  );
};

export default ServerList;
