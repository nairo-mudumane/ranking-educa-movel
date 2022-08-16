import { Route, Routes } from "react-router-dom";
import { Slider } from "../pages";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Slider />} />
      <Route path="*" element={<Slider />} />
    </Routes>
  );
}
