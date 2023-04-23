import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loging from "./components/Loging";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Incme from "./lncme-expenditure/Incme";
import Expenditure from "./lncme-expenditure/Expenditure";
import Lncme1 from "./Lncme/Lncme1";
import Expenditure1 from "./Expenditure/expenditure1"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Loging" element={<Loging />} />
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Incme" element={<Incme/>}/>
        <Route path="/Expenditure" element={<Expenditure/>}/>
        <Route path="/Lncme1" element={<Lncme1/>}/>
        <Route path="/Expenditure1" element={<Expenditure1/>}/>
      </Routes>
    </BrowserRouter>
  );
}
