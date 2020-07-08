import React from 'react';

import { GridLayout } from './styles';

import ChannelData from '../channelData';
import ChannelInfo from '../channelInfo';
import ChannelList from '../channelList';
import ServerList from '../serverList';
import ServerName from '../serverName';
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
      <ChannelData />
      <UserList />
    </GridLayout>
  );
};

export default Layout;
