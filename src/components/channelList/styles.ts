import styled from 'styled-components';
import { Add } from 'styled-icons/material';
import { ArrowIosForwardOutline } from 'styled-icons/evaicons-outline';

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

  :not(:first-child) {
    margin-top: 21px;
  }
`;

export const ArrowIcon = styled(ArrowIosForwardOutline)`
  color: ${(props) => props.theme.colors.symbol};
  height: 12px;
  margin-right: 3px;
  width: 12px;
`;

export const CategoryName = styled.span`
  align-items: center;
  color: ${(props) => props.theme.colors.gray};
  display: flex;
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
