import styled, { keyframes } from 'styled-components';

/************ Modals ************/
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

export const AnimatedDiv = styled.div`
  animation-name: ${props => props.out ? fadeOutAnimation : fadeInAnimation};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  -webkit-backface-visibility: hidden;
`;

export const ModalBackground = styled.div`
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

export const ModalBody = styled.div`
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

/********* Hover Star Buttons  *************/

export const StarButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14pt;
  color: ${props => props.clicked ? 'black' : '#fafafa'}
`;
export const StarButtonInside = styled.div`
  -webkit-text-stroke: 1px #848484;
`;

/********* Quarter Stars *************/

export const Ratings = styled.div`
  position: relative;
  vertical-align: middle;
  display: inline-block;
  color: #fafafa;
  overflow: hidden;
  width: fit-content;
  min-width: fit-content;
`;

export const EmptyStars = styled.div`
  &:before {
    content: "★★★★★";
    font-size: ${props => props.size}pt;
    -webkit-text-stroke: 1px #848484;
  }
`;

export const FullStars = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
  color: black;
  &:before {
    content: "★★★★★";
    font-size: ${props => props.size}pt;
    -webkit-text-stroke: 1px black;
  }
  width: ${props => props.percentage}%;
`;

/********* Main Container  *************/

export const Buttons = styled.button`
  border-radius: 0.25rem;
  border: 0.0625 rem solid;
  padding: 0.5rem;
  cursor: pointer;
`;

export const ReviewSectionContainer = styled.div`
  margin-top: 5rem;
  border-top: solid 1px grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 5rem;
  height: 68rem;
`;

export const ReviewSectionHeader = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const ReviewSectionBody = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

/********* Sidebar Styles  *************/

export const SidebarDiv = styled.div`
  width: 20%;
  background-color: #fafafa;
  box-shadow: 0.0625rem 0.125rem #e8e7e4;
  min-width: fit-content;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;

// Filters Styles
export const FiltersDiv = styled.div`
  padding-left: 10%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 2rem;
  width: 100%;
`;

export const BarGraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding-bottom: 1rem;
`;

// BarGraph Styles

export const BarGraphDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  width: 100%
  gap: 2.5%;
`;

export const BarGraphLabels = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

export const Meter = styled.div`
  width: 50%;
  height: 20px;
  border-radius: 5px;
  border: 1px solid grey;
  overflow: hidden;
  position: relative;
  background-color: #fafafa;
`;

export const Progress = styled.span`
  height: 100%;
  display: block;
  width: ${props => props.percentage}%;
  background-color: black;
  line-height: 30px;
  position: absolute;
  text-align: end;
`;

export const sortingByDiv = styled(AnimatedDiv)`
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
`;

export const ResetFiltersButton = styled(Buttons)`
  width: fit-content;
`;

// Product Breakdown

export const ProductBreakdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FactorBreakdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  padding-left: 10%;
  padding-right: 10%;
`;

export const ProductBreakdownLabel = styled.div`
  margin-top: 1rem;
  align-self: flex-start;
  font-weight: bold;
`;

export const IndicatorContainer = styled.div`
 display: flex;
 width: 100%;
 gap: 0.25rem;
 margin-top: 1rem;
 margin-bottom: 0.5rem;
`;

export const FactorContainer = styled.div`
  width: 20%;
  height: 10px;
  background-color: ${props => props.shading ? 'black' : '#fafafa'}};
  border: solid 1px black;
`;
export const FactorLabelsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FactorLabels = styled.div`
  font-size: 10pt;
`;

/********* Review List Styles  *************/

export const ReviewListDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-left: 2.5%;
`;

export const ReviewTilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 60rem;
  overflow: auto;
`;

export const ReviewButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
/********* Rating Breakdown Styles  *************/

export const RatingBreakdownDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

export const AverageRatingDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

/********* Review Tile Styles  *************/

export const ReviewTileDiv = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  box-shadow: 0.0625rem 0.125rem #e8e7e4;
  background-color: #fafafa;
`;

export const ReviewTileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%
`;

export const ReviewTileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const ReviewBody = styled.div`
  overflow-wrap: break-word;
  width: 90%;
`;

export const ReviewPhotos = styled.div`
  display: flex;
  gap: 1rem;
  width: 50%;
`;

export const ModalImage = styled.img`
  max-width: 80%;
  max-height: 80%;
`;

export const TileButtons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ReportButton = styled(Buttons)`
  background-color: transparent;
  border: none;
  height: fit-content;
  width: fit-content;
  padding: 0;
  margin: 0;
`;

/********* Review Form Styles  *************/

export const ReviewFormContainer = styled(ModalBackground)`
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
  animation-fill-mode: forwards;
  -webkit-backface-visibility: hidden;
  height: 90%;
  width: 60%;
  overflow: auto;
`;

export const recommendDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const CharsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 60%;
`;

export const CharDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 2rem;
`;

export const CharNames = styled.span`
  padding-top: 2.5%;
  padding-bottom: 2.5%;
`;

export const RadioButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input`
`;

export const RadioButtonDiv = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  width: 20%;
`;

export const RadioLabels = styled.div`
  padding-top: 5%;
  width: 50%;
  font-size: 10pt;
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
