import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { CatalogContainer } from "./Catalog.styled";
import CampersList from "../../components/CampersList/CampersList";
import Sidebar from "../../components/Sidebar/Sidebar";

const Catalog = () => {
  return (
    <Suspense fallback={<Loader />}>
      <CatalogContainer>
        <Sidebar />
        <CampersList />
      </CatalogContainer>
      <Outlet />
    </Suspense>
  );
};

export default Catalog;
