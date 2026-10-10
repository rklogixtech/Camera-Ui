import { useEffect, useState } from "react";
import NikonHeader from "./componets/Header";
import NikonFooter from "./componets/Nikonfooter";
import Home from "./Pages/Home/page";
import Lenses from "./Pages/Lenses/page";
import Accessories from "./Pages/Accessories/page";
import AccessoriesProducts from "./Pages/Accessories/products";
import Stories from "./Pages/Stories/page";
import Support from "./Pages/Support/page";
import NikonCollectionGrid from "./Pages/Home/Nikoncollectiongrid ";

function getPageFromHash() {
  if (
    window.location.hash === "#gallery" ||
    window.location.hash === "#lenses"
  ) {
    return "lenses";
  }
  if (window.location.hash.startsWith("#accessories-products-")) {
    return "accessories-products";
  }
  if (window.location.hash === "#accessories") return "accessories";
  if (window.location.hash === "#stories") return "stories";
  if (window.location.hash === "#support") return "support";
  if (window.location.hash === "#cameras") return "cameras";
  return "home";
}

function App() {
  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => setPage(getPageFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0C]">
      <NikonHeader />
      {page === "lenses" ? (
        <Lenses />
      ) : page === "cameras" ? (
        <NikonCollectionGrid />
      ) : page === "accessories-products" ? (
        <AccessoriesProducts />
      ) : page === "accessories" ? (
        <Accessories />
      ) : page === "stories" ? (
        <Stories />
      ) : page === "support" ? (
        <Support />
      ) : (
        <Home />
      )}
      <NikonFooter />
    </div>
  );
}

export default App;
