import styled, { keyframes } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const QASectionContainer = styled.div`
  margin-top: 150px;
  border-top: solid 1px grey;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 150px;
`;

export const QATileDiv = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  box-shadow: 0.0625rem 0.125rem #e8e7e4;
  background-color: #fafafa;
`;

export const QATileHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QAHeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QAPhotos = styled.div`
  display: flex;
  gap: 1rem;
  width: 50%;
`;
