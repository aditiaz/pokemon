import React, { useEffect, useState } from "react";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import axios from "axios";
import { useQuery } from "react-query";
import "./App.css";
import Cards from "./components/Cards";
import Home from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Detail/:id" element={<Detail />} />
    </Routes>
  );
  // <Cards />;
}

export default App;
