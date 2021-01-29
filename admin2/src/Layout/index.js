import React from "react";
import { Header, Footer, Aside } from "./components";
import "./styles.css";

const Layout = ({ children, hideHeader, hideAside, hideFooter }) => {
  return (
    <div className="layout">
      {!hideAside && <Aside />}

      <div className="contenedor">
        {!hideHeader && <Header />}
        {children}
        {!hideFooter && <Footer />}
      </div>
    </div>
  );
};

Layout.defaultProps = {
  hideHeader: false,
  hideAside: false,
  hideFooter: false,
};

export default Layout;
