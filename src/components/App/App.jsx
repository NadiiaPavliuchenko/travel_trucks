import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { fetchAllCampers } from "../../redux/campers/operations";

const Header = lazy(() => import("../Header/Header"));
const Home = lazy(() => import("../../pages/Home/Home"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const Camper = lazy(() => import("../../pages/Camper/Camper"));
const Error = lazy(() => import("../../pages/Error/Error"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampers());
  });

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />}>
            <Route path=":id" element={<Camper />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
