import React from "react";

import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <hr />
      
      <Footer />
    </>
  );
};

export default Layout;
