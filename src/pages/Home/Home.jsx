import { StyledPageContainer } from "../../styles/basePageContainer";
import {
  StyledHomePage,
  StyledTitle,
  StyledText,
  StyledButton,
} from "./Home.styled";

const Home = () => {
  return (
    <StyledHomePage>
      <StyledPageContainer>
        <StyledTitle>Campers of your dreams</StyledTitle>
        <StyledText>You can find everything you want in our catalog</StyledText>
        <StyledButton>View now</StyledButton>
      </StyledPageContainer>
    </StyledHomePage>
  );
};

export default Home;
