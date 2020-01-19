import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import { CssBaseline } from "@material-ui/core";

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes />
    </BrowserRouter>
  );
};

export default Root;
