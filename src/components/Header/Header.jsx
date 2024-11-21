import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

const Header = () => {
  return (
    <>
      <div>Header</div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
