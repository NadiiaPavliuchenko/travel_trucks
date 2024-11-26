import { Oval } from "react-loader-spinner";
import { StyledLoader } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoader>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="var(--button-hover)"
        secondaryColor="var(--button)"
        ariaLabel="oval-loading"
      />
    </StyledLoader>
  );
};

export default Loader;
