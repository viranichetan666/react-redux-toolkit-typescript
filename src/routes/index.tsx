import React, { FunctionComponent } from "react";
import { Routes, Route } from 'react-router-dom';
import MainLayout from 'containers/MainLayout'

interface AppRoutesProps {}

const AppRoutes: FunctionComponent<AppRoutesProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/dashboard/*" element={<MainLayout />} />
    </Routes>
  );
};

export default AppRoutes;