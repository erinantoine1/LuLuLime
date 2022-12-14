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
  font-size: 16pt;
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

export const Cards = styled.div`
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  box-shadow: 0.0625rem 0.125rem #e8e7e4;
  background-color: white;
  border-radius: 10px;
`;

export const Buttons = styled.button`
  border-radius: 0.25rem;
  padding: 1rem;
  cursor: pointer;
  border: 0.0625rem solid;
  border-color: black;
  background-color: black;
  color: white;
  width: 15%;
  overflow-wrap: break-word;
  min-width: fit-content;
  max-width: fit-content;
`;

export const ReviewSectionContainer = styled.div`
  margin-top: 5rem;
  border-top: solid 1px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5rem;
  height: 71rem;
  padding: 1.5rem;
`;

export const ReviewSectionHeader = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  font-size: 14pt;
`;
export const DropDownDiv = styled.div`
  display: flex;
`;

export const Select = styled.select`
  border: none;
  background-color: transparent;
  font-weight: bold;
  font-family: Helvetica;
  font-size: 12pt;
  &:focus {
    outline: none;
  }
`;

export const ReviewSectionBody = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

/********* Sidebar Styles  *************/

export const SidebarDiv = styled.div`
  width: 20%;
  background-color: white;
  box-shadow: 0.0625rem 0.125rem #e8e7e4;
  min-width: fit-content;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  border-radius: 10px;
`;

export const SearchBarContainer = styled.div`
  width: 90%;
  display: flex;
  background-color: white;
  height: 2.5rem;
  border-bottom: solid 1px rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 90%;
  font-size: 1.0625rem;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const ClearSearchButton = styled.button`
  background: transparent;
  border: none;
  font-size: 12pt;
  cursor: pointer;
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
  gap: 0.75rem;
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
  border: 1px solid rgba(0, 0, 0, 0.5);
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
  gap: 0.5rem;
  font-weight: bold;
`;

export const ResetFiltersButton = styled(Buttons)`
  width: fit-content;
  background-color: black;
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
  border-radius: 2px;
  background-color: ${props => props.shading ? 'black' : '#fafafa'}};
  border: 1px solid rgba(0, 0, 0, 0.5);
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
  margin-bottom: 0.5rem;
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
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  box-shadow: 0.0625rem 0.125rem #e8e7e4;
  background-color: white;
  border-radius: 10px;
  animation-name: ${fadeInAnimation};
  animation-duration: 0.3s;
`;

export const ReviewTileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%
`;

export const ReviewTileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const ReviewTileSummary = styled.div`
  font-weight: bold;
  font-size: 14pt;
`;

export const ReviewBody = styled.div`
  overflow-wrap: break-word;
  width: 90%;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 1rem;
`;

export const UsernameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const UserIcon = styled.div`
  background-color: #959595;
  border-radius: 50%;
  color: #fff;
  font-size: 1.125rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  width: 1.5rem;
`;

export const Username = styled.span`
  font-weight: bold;
`;

export const SellerResponse = styled.div`
  overflow-wrap: break-word;
  background-color: lightgrey;
  width: 90%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  box-shadow: 0.0625rem 0.125rem #e8e7e4;
  border-radius: 10px;
`;

export const ReviewLabels = styled.span`
  opacity: 0.75;
  margin-bottom: 0.5rem;
`;

export const HelpfulLabel = styled(ReviewLabels)`
  margin-bottom: 0;
`;

export const ShowMoreButton = styled.button`
  background-color: transparent;
  padding-left: 0.75rem;
  font-size: 1rem;
  border: none;
  text-decoration: underline;
  &: hover {
    color: blue;
    cursor: pointer;
  }
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

export const HelpfulButton = styled(Buttons)`
  width: 10%;
  padding: 0.5rem;
  border: none;
  background-color: transparent;
  color: black;
  font-size: 12pt;
`;

export const ReportButton = styled(Buttons)`
  background-color: transparent;
  border: none;
  height: fit-content;
  width: fit-content;
  color: black;
  padding: 0;
  margin: 0;
`;

export const SearchResultsDiv = styled(ReviewTileDiv)`
  font-weight: normal;
  font-size: 14pt;
`;

/********* Review Form Styles  *************/

export const ReviewFormContainer = styled(ModalBackground)`
  font-size: 12pt;
  z-index: 999;
`;

export const styledForm = styled.form`
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
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

export const ReviewFormHeader = styled.h2`
  align-self: center;
`;

export const recommendDiv = styled(Cards)`
  padding-top: 0;
  margin-top: 2rem;
  width: 100%;
`;

export const InfoMessage = styled.div`
  font-size: 10pt;
  opacity: 0.5;
  margin-bottom: 2rem;
  font-weight: lighter;
  align-self: center;
  text-align: center;
`;

export const StarLabel = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const RecommendHeader = styled.div`
  margin-top: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const RecommendLabel = styled.label`
  font-weight: bold;
`;

export const RecommendRadios = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`;

export const CharsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CharDiv = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  box-shadow: 0.0625rem 0.125rem #e8e7e4;
  background-color: white;
  border-radius: 10px;
`;

export const CharNames = styled.span`
  font-size: 12pt;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const RadioButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input`
  transform: scale(1.25);
  accent-color: black;
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
  gap: 1rem;
  font-weight: bold;
`;

export const textAreaDiv = styled(Cards)`
  align-self: flex-start;
  width: 100%;
  border-radius: 10px;
`;

export const FormSummaryContainer = styled.div`
  margin-bottom: 2rem;
`;

export const FormBodyContainer = styled.div`
`;

export const TextBox = styled.textarea`
  resize: none;
  font-size: 12pt;
  border: none;
  border-bottom: solid 1px rgba(0, 0, 0, 0.25);
  &: focus {
    outline: none;
  }
`;

export const FormCounters = styled.div`
  margin-top: 0.5rem;
  opacity: 0.65;
  font-size: 10pt;
`;

export const PhotoAreaDiv = styled(Cards)`
  width: 100%;
`;

export const PhotoAreaHeader = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const PhotoUploadContainer = styled(AnimatedDiv)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const UploadedPhotosContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 0.5rem;
`;

export const UploadedPhoto = styled.img`
  height: 100px;
  width: 100px;
`;
export const AddPhotoBar = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PhotoInput = styled.input`
  width: 60%;
  font-size: 12pt;
  border: none;
  border-bottom: solid 1px rgba(0, 0, 0, 0.25);
  &: focus {
    outline: none;
  }
`;

export const PhotoError = styled.div`
  margin-top: 0.5rem;
  font-size: 12pt;
  color: red;
  font-weight: normal;
  `;

export const photoButton = styled(Buttons)`
`;

export const UserInfoDiv = styled(Cards)`
  width: 100%;
`;

export const UserInputs = styled.input`
  width: 60%;
  font-size: 12pt;
  margin-bottom: 1rem;
  border: none;
  border-bottom: solid 1px rgba(0, 0, 0, 0.25);
  &: focus {
    outline: none;
  }
`;

export const UserDisclaimer = styled.div`
  margin-bottom: 1rem;
  font-size: 10pt;
  opacity: 0.75;
`;

export const submitButton = styled.input`
  border-radius: 0.25rem;
  padding: 1rem;
  cursor: pointer;
  border: 0.0625rem solid;
  border-color: black;
  background-color: black;
  color: white;
  width: 15%;
  overflow-wrap: break-word;
  min-width: fit-content;
  max-width: fit-content;
  align-self: center;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-weight: normal;
  margin-top: 1rem;
`;

export const UserInfoErrorMessage = styled(ErrorMessage)`
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

export const CharErrorMessage = styled(ErrorMessage)`
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const SubmitErrorMessage = styled(ErrorMessage)`
  align-self: center;
  margin-top: 1rem;
`;


