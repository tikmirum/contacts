import styled from 'styled-components';

export const All = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: black 2px solid;

  &:last-child {
    border: unset;
  }
`;

export const CardInfo = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 0;
  width: 500px;
`;

export const CardImage = styled('img')`
  padding: 48px;
`;

export const Row = styled('div')`
  display: flex;
  min-height: 28px;
  width: 100%;
`;

export const CardLabel = styled('div')`
  font-size: 24px;
  width: 100px;
`;

export const CardNameValue = styled('div')`
  font-size: 24px;
  flex: 1;
`;

export const CardEmailValue = styled('div')`
  font-size: 24px;
  flex: 1;
`;

export const CardAgeValue = styled('div')`
  font-size: 24px;
  flex: 1;
`;

export const CardButton = styled('button')`
  width: 108px;
  height: 28px;
  font-size: 18px;
`;
