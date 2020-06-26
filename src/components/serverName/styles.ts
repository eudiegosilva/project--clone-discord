import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const ServerNameContainer = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  display: flex;
  grid-area: SERVER_NAME;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 2;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-weight: bold;
`;
export const ExpandIcon = styled(ExpandMore)`
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  height: 24px;
  width: 24px;
`;
