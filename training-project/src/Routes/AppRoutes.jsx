import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home.jsx";
import TrainingList from "../Pages/TrainingList.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/training" element={<TrainingList />} />
    </Routes>
  );
}
