import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import D3Examples from "./routes/d3examples";
import D3Example from "./routes/d3example";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Introduction from "./routes/introduction";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="intro" element={<Introduction />} />
          <Route path="d3examples" element={<D3Examples />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a d3 example</p>
                </main>
              }
            />
            <Route path=":exampleId" element={<D3Example />} />
          </Route>
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>
                    [This section was part of quick refresher on how to use
                    react-router-dom, as it seemed they've changed quite a bit
                    since I've last used it. Decided to keep it in here...]
                    Select an invoice
                  </p>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
