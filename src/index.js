import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { LandingPage } from "./components/LandingPage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
  rootElement
);
