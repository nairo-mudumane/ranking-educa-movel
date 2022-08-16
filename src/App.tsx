import React from "react";
import { Header } from "./components";
import { GlobalStyles } from "./global";
import AppRoutes from "./routes";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
