import Navbar from "../Components/Navbar";
import Ticker from "../Components/Ticker";
import Footer from "../Components/Footer";

import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <Ticker />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}