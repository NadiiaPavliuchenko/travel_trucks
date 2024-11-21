import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div>Header</div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
