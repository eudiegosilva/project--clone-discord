import styled from 'styled-components';

export const GridLayout = styled.div`
  display: grid;
  grid-template-areas:
    'SERVER_LIST SERVER_NAME CHANNEL_INFO CHANNEL_INFO'
    'SERVER_LIST CHANNEL_LIST CHANNEL_DATA USER_LIST'
    'SERVER_LIST USER_INFO CHANNEL_DATA USER_LIST';
  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;
  height: 100vh;
`;
