import { useState } from "react";

import Hero from "../Components/Hero";
import TrustBar from "../Components/TrustBar";
import SearchBar from "../Components/SearchBar";
import Brands from "../Components/Brands";
import Offers from "../Components/Offers";
import ProductsPage from "../Pages/ProductsPage";
import HowItWorks from "../Components/HowItWorks";
import Reviews from "../Components/Reviews";
import FAQ from "../Components/FAQ";
import CTA from "../Components/CTA";
import Newsletter from "../Components/Newsletter";

export default function HomePage() {

  const [search, setSearch] = useState("");

  return (
    <>
      <Hero />

      <TrustBar />

      <SearchBar
        value={search}
        onSearch={setSearch}
      />

      <Brands />

      <Offers />

      <ProductsPage
        search={search}
      />

      <HowItWorks />

      <Reviews />

      <FAQ />

      <CTA />

      <Newsletter />
    </>
  );
}