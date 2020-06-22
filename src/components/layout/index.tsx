import React from 'react';

import { GridLayout } from './styles';
import ServerList from '../serverList';
import ServerName from '../serverName';
import ChannelInfo from '../channelInfo';

const Layout: React.FC = () => {
  return (
    <GridLayout>
      <ServerList />
      <ServerName />
      <ChannelInfo />
    </GridLayout>
  );
};

export default Layout;
