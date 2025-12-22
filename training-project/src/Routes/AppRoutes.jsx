import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home.jsx";
import TrainingList from "../Pages/TrainingList.jsx";
import TrainingDetail from "../Pages/TrainingDetail.jsx";
import TrainingLogg from "../Pages/TrainingLogg.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/training" element={<TrainingList />} />
      <Route path="/training/:Id" element={<TrainingDetail />} />
      <Route path="/Logg" element={<TrainingLogg />} />
    </Routes>
  );
}
