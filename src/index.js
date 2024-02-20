import React from "react";
import ReactDOM from "react-dom/client";
import { StateProvider } from "../src/components/StateProvider";
import reducer, { initialState } from "../src/components/reducer";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
