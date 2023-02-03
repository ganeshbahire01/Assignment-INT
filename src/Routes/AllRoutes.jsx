import React from "react";
import HomePage from "../Components/HomePage";
import Projects from "../Components/Projects";
import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
