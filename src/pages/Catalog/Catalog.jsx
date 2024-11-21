import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Catalog = () => {
  return (
    <>
      <div>Catalog</div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Catalog;
