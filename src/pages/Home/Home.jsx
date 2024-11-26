import { useNavigate } from "react-router-dom";
import { StyledPageContainer } from "../../styles/basePageContainer";
import {
  StyledHomePage,
  StyledTitle,
  StyledText,
  StyledButton,
} from "./Home.styled";

const Home = () => {
  const navigate = useNavigate();
  return (
    <StyledHomePage>
      <StyledPageContainer>
        <StyledTitle>Campers of your dreams</StyledTitle>
        <StyledText>You can find everything you want in our catalog</StyledText>
        <StyledButton onClick={() => navigate("/catalog")}>
          View now
        </StyledButton>
      </StyledPageContainer>
    </StyledHomePage>
  );
};

export default Home;
