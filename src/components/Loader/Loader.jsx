import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Oval
      visible={true}
      height="80"
      width="80"
      color="var(--button-hover)"
      secondaryColor="var(--button)"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
