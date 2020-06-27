import React from 'react';

import { ServerNameContainer, Title, ExpandIcon } from './styles';

const ServerName: React.FC = () => {
  return (
    <ServerNameContainer>
      <Title>coderamo's server</Title>
      <ExpandIcon />
    </ServerNameContainer>
  );
};

export default ServerName;
