import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Catalog = () => {
  return (
    <>
      <div>Catalog</div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Catalog;
