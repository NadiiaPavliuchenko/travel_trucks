import {
  StyledHomePage,
  StyledTitle,
  StyledText,
  StyledButton,
} from "./Home.styled";

const Home = () => {
  return (
    <StyledHomePage>
      <StyledTitle>Campers of your dreams</StyledTitle>
      <StyledText>You can find everything you want in our catalog</StyledText>
      <StyledButton>View now</StyledButton>
    </StyledHomePage>
  );
};

export default Home;
