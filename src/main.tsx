import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CarouselProvider } from "./contexts";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <CarouselProvider>
          <App />
        </CarouselProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
