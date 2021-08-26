import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import DesktopHeader from "./header/DesktopHeader";
import HEADER from "./header/MobileHeader";

const Header = ({ pagetitle }) => {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 884 ? true : false;
  return <>{isMobile ? <HEADER pagetitle={pagetitle} /> : <DesktopHeader />}</>;
};

// export default header

export default withRouter(Header);
