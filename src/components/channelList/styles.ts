import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const ChannelListContainer = styled.div`
  grid-area: CHANNEL_LIST;

  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  padding: 24px 9.5px 0 16px;
`;

export const CategoryWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const CategoryName = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const AddCategoryIcon = styled(Add)`
  color: ${(props) => props.theme.colors.symbol};
  cursor: pointer;
  height: 21px;
  width: 21px;
`;
