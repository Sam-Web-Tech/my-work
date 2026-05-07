import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Mynav from "./Nav";
import Footer from "./Footer";

import MainContent from "./Main";
import MyMiddle from "./Middle";
import LastPage from "./Last";
import Home from "./Home";

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
        {/* Redirect empty route to home content */}
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

        {/* Optional: also make /home go to same main page */}
        <Route
          path="/home"
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

        {/* Redirect unknown routes → home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;