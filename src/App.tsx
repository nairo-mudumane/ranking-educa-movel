import React from "react";
import { Footer, Header } from "./components";
import { GlobalStyles } from "./global";
import AppRoutes from "./routes";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <AppRoutes />
      <Footer />
    </React.Fragment>
  );
}

export default App;
