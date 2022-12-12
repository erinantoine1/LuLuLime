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

const fadeInAnimation = keyframes`
  0% { opacity: 0}
  100% { opacity: 1}
`;

const fadeOutAnimation = keyframes`
  0% { opacity: 1}
  100% { opacity: 0}
`;

const expandAnimation = keyframes`
  0% {transform: scale(0)}
  100% {transform: scale(1)}
`;

const collapseAnimation = keyframes`
  0% {transform: scale(1)}
  100% {transform: scale(0)}
`;

export const QAFormContainer = styled.div`
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation-name: ${props => props.out ? fadeOutAnimation : fadeInAnimation};
  animation-duration: 0.3s;
`;

export const styledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: fit-content;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5%;
  animation-name: ${props => props.out ? collapseAnimation : expandAnimation};
  animation-duration: 0.3s;
`;

export const CharNames = styled.span`
  margin-bottom: 10px;
`;

export const characteristicsButtons = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

export const characteristicsDescriptions = styled.span`
  width: 450px;
  display: flex;
  justify-content: space-between;
`;

export const FormLabels = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 5px;
`;

export const textAreaDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const UserInfoDiv = styled.div`
  align-self: flex-start;
`;

export const photoButton = styled.button`
  width: fit-content;
  margin-top: 10px;
  margin-bottom: 10px;
`;


export const submitButton = styled.input`
  margin-top: 10px;
  width: fit-content;
`;

export const Buttons = styled.button`
  border-radius: 0.25rem;
  border: 0.0625 rem solid;
  padding: 0.5rem;
  cursor: pointer;
`;


export const ReportButton = styled(Buttons)`
  background-color: transparent;
  border: none;
  height: fit-content;
  width: fit-content;
  padding: 0;
  margin: 0;
`;
