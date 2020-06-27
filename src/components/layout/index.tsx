import React from 'react';

import { GridLayout } from './styles';
import ServerList from '../serverList';
import ServerName from '../serverName';
import ChannelInfo from '../channelInfo';
import ChannelList from '../channelList';
import UserInfo from '../userInfo';
import UserList from '../userList';

const Layout: React.FC = () => {
  return (
    <GridLayout>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <UserList />
    </GridLayout>
  );
};

export default Layout;
