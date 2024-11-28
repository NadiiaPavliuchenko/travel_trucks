import { Suspense } from "react";
import { Outlet, useMatch } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { CatalogContainer } from "./Catalog.styled";
import CampersList from "../../components/CampersList/CampersList";
import Sidebar from "../../components/Sidebar/Sidebar";

const Catalog = () => {
  const isRootCatalog = useMatch("/catalog");
  return (
    <Suspense fallback={<Loader />}>
      {isRootCatalog && (
        <CatalogContainer>
          <Sidebar />
          <CampersList />
        </CatalogContainer>
      )}
      <Outlet />
    </Suspense>
  );
};

export default Catalog;
