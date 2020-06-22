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
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={72} />
      <ServerButton hasNotifications />
      <ServerButton mentions={72} />
      <ServerButton hasNotifications />
      <ServerButton mentions={72} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={72} />
      <ServerButton />
      <ServerButton />
    </ServerListContainer>
  );
};

export default ServerList;
