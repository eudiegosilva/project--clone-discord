import React from 'react';

import { GridLayout } from './styles';
import ServerList from '../serverList';
import ServerName from '../serverName';
import ChannelInfo from '../channelInfo';
import ChannelList from '../channelList';
import UserInfo from '../userInfo';

const Layout: React.FC = () => {
  return (
    <GridLayout>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
    </GridLayout>
  );
};

export default Layout;
