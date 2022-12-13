import styled, { keyframes } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const QASectionContainer = styled.div`
  margin-top: 150px;
  border-top: solid 1px grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 150px;
`;

export const QAInfoDiv = styled.div`
  align-items: center;
  width: 100%;
`;

export const QATileDiv = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  margin-left: 2%;
  margin-right: 2%;
  box-shadow: 0.0625rem 0.125rem #e8e7e4;
  background-color: #fafafa;
`;

export const QATileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%
  border: 1px;
  border-radius: 10%;
`;

export const QABodyContainer = styled.div`
  justify-content: space-between;
`;

export const QATileHeader = styled.div`
  display: flex;
  width: 100%;
`;

export const QuestionButtons = styled.div`
  width: 70%;
  justify-content: flex-end;
  margin-right: 0;
  border: 1px solid red;
`;

export const QAHeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 14%;
  float: right;
  padding-right: 3%;
  border: 1px solid lightblue;
  font-size: 90%;
`;

export const QAHelpfulContainer = styled.div`
  width: 37%;
  display:flex;
  justify-content:center;
  align-items:center;
  justify-content: space-between;
  border: 1px solid green;
  font-size: 90%;
`;

export const QAPhotos = styled.div`
  display: flex;
  gap: 1rem;
  width: 50%;
`;

export const ScrollableAnswers = styled.div`
  width: 100%;
  max-height: 600px;
  position: relative;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
    border: 1px solid black;
  }
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
  width: 35%;
  height: 55%;
  align-items: center;
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
  height: 100%;
  width: 50%;
  margin: 10%;
  margin-top: 15%;
  text-align: center;
`;

export const StyledHeader = styled.div`
  height 10%;
`;

export const StyledTextArea = styled.textarea`
  margin-bottom: 2rem;
`;

export const StyledInput = styled.input`
  margin-bottom: 2rem;
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
  cursor: pointer;
  border: 0.0625rem solid;
  border-color: #038081;
  background-color: #038081;
  padding-left: .5rem;
  padding-right: .5rem;
  color: white;
  width: 10%;
  float: right;
`;

export const YesButtons = styled.div`
  background-color: transparent;
  font-size: 1rem;
  border: none;
  color: black;
  text-decoration: underline;
  &: hover {
    color: blue;
    cursor: pointer;
  }
  font-size: 90%;
`;

export const ReportButton = styled(Buttons)`
  background-color: transparent;
  font-size: 1rem;
  border: none;
  color: black;
  text-decoration: underline;
  &: hover {
    color: blue;
    cursor: pointer;
  }
  font-size: 90%;
`;

export const ButtonContainer = styled.div`
  padding-top: 2.5rem;
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const AnswerDataContainer = styled.div`
  display: flex;
  width: 15%;
  font-size: 90%;
  border: 1px solid pink;
`;

export const AnswerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid black;
  font-size: 90%;
  float: right;
`;

export const AnswersHelpfulContainer = styled.div`
  width: 12%;
  display:flex;
  justify-content:center;
  align-items:center;
  justify-content: space-between;
  border: 1px solid green;
  font-size: 90%;
`;


