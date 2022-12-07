import styled, { keyframes } from 'styled-components';

// Main container
export const ReviewSectionContainer = styled.div`
`;

export const ReviewSectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ReviewSectionBody = styled.div`
  display: flex;
`;

export const StarButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.clicked ? '#000' : '#ccc'}
`;

export const StarOutline = styled.span`
`;

export const StarFilled = styled.span`
`;

// Review List Styles

export const ReviewListDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewTilesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewButtonContainer = styled.div`
  margin-left: 80px;
`;

// Rating Breakdown Styles

export const RatingBreakdownDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const BarGraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap 10px;
`;

// Product Breakdown Styles

// ReviewTile Styles

export const ReviewTileDiv = styled.div`
  padding: 10px 200px 10px 10px;
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

export const ReviewTileHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Review Form Styles

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

export const ReviewFormContainer = styled.div`
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
  width: 500px;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 20px;
  animation-name: ${props => props.out ? collapseAnimation : expandAnimation};
  animation-duration: 0.3s;
`;

export const recommendDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const characteristicsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
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
