import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import  AppContextProvider from "./Context/AppContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AppContextProvider> 
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </AppContextProvider> 
);

reportWebVitals();
