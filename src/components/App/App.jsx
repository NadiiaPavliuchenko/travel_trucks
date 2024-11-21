import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Header = lazy(() => import("../Header/Header"));
const Home = lazy(() => import("../../pages/Home/Home"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const Camper = lazy(() => import("../../pages/Camper/Camper"));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />}>
            <Route path=":id" element={<Camper />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
