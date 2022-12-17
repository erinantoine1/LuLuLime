import styled, { keyframes } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export

export const QASectionTopBorders = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  margin-top: 5%;
`;

export const QASectionSideBorders = styled.div`
  border-left: solid 1px rgba(0, 0, 0, 0.25);
  border-right: solid 1px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
  margin-bottom: 2%;
`;


export const QASectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 1%;
`;

export const QATilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;
`;

export const QASearchDiv = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width 15%;
  height: 150%;

`;

export const QASearch = styled.input`
  border: solid 1px rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  width: 100%;
  text-align: center;
  height: 2rem;
  font-size: 1.0625rem;
`;

export const QAInfoDiv = styled.div`
  margin-top: 3%;
  align-items: center;
  width: 100%;
`;

export const QATileDiv2 = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  margin-left: 2%;
  margin-right: 2%;
  box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem #e8e7e4;
  border-radius: 10px;
  background-color: white;
  border: none;
`;

export const QATileDiv = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 10px;
  background-color: white;
  border: none;
`;

export const QATileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%
  border-radius: 10%;
`;

export const QABodyContainer = styled.div`
  justify-content: space-between;
  width: 70%;
`;

export const QATileHeader = styled.div`
  display: flex;
  width: 100%;
`;

export const QuestionButtons = styled.div`
  display: flex;
  width: 30%;
  justify-content: flex-end;
  right: 0;
  float: right;
`;

export const QAHeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48%;
  font-size: 90%;
  align-items: center;
  margin-right: 3%;
  @media screen and (max-width: 1999px) {
    width: 50%;
  }
  @media screen and (min-width: 2000px){
    width: 37%;
  }
`;

export const QAHelpfulContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  justify-content:center;
  @media screen and (max-width: 1999px) {
    width: 50%;
  }
  @media screen and (min-width: 2000px){
    width: 24%;
  }
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

export const ModelBackground = styled.div`
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
  animation-fill-mode: forwards;
  -webkit-backface-visibility: hidden;
`;

export const QAFormContainer = styled(ModelBackground)`
  font-size: 14pt;
  z-index: 999;
`;

export const styledForm = styled.form`
  background-color: #EAFAF1;
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5%;
  animation-name: ${props => props.out ? collapseAnimation : expandAnimation};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  -webkit-backface-visibility: hidden;
  height: 50%;
  width: 40%;
  overflow: auto;
  border-radius: 10px;
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
  padding-top: 10%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 70%;
  margin: 10%;
  margin-top: 15%;
  text-align: center;
`;

export const StyledHeader = styled.div`
  height 10%;
`;

export const StyledTextArea = styled.textarea`
  margin-bottom: 2rem;
  width: 120%;
  border: 1px solid rgb(0, 0, 0, 0);
  border-radius: 10px;
  text-align: center;
  text-size: 2rem;
`;

export const StyledInput = styled.input`
  display: flex;
  margin-bottom: 2rem;
  width: 120%;
  border: 1px solid rgb(0, 0, 0, 0);
  border-radius: 10px;
  text-align: center;
  text-size: 2rem;
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
  padding: 1rem;
  cursor: pointer;
  border: 0.0625rem solid;
  border-color: teal;
  background-color: teal;
  color: white;
  width: 15%;
  overflow-wrap: break-word;
  min-width: fit-content;
  max-width: fit-content;
  font-size: 1rem;
  &: hover{
    background-color: #bfe3b4;
    color: black;
    cursor: pointer;
    border-color: teal;
  }
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

export const ReportButton = styled.button`
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

export const HelpfulSpan = styled.span`
  display: flex;
  font-size: 90%;
  vertical-align: middle;
`;

export const ButtonContainer = styled.div`
  padding-top: 2.5rem;
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const AnswerContainer = styled.div`
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

export const AnswerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48%;
  font-size: 90%;
  align-items: center;
  padding-right: 1%;
  font-size: 90%;
  @media screen and (max-width: 1999px) {
    width: 38%;
  }
  @media screen and (min-width: 2000px){
    width: 30%;
  }
`;

export const AnswersHelpfulContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  justify-content: center;
  @media screen and (max-width: 1999px) {
    width: 25%;
  }
  @media screen and (min-width: 2000px){
    width: 20%;
  }
`;


