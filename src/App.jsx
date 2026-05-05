import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Mynav from "./Nav";
import Footer from "./Footer";

import MainContent from "./Main";
import MyMiddle from "./Middle";
import LastPage from "./Last";

import Rent from "./pages/Rent";
import Lease from "./pages/Lease";
import Sales from "./pages/Sales";
import Contact from "./pages/Contact";
import FillForm from "./FillForm";

function App() {
  return (
    <>
      <Mynav />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <MainContent />
              <MyMiddle />
              <LastPage />
            </>
          }
        />

        <Route path="/lease" element={<Lease />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sales" element={<Sales />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/fillform" element={<FillForm />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;