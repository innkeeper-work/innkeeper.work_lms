import { Routes, Route } from "react-router-dom";
// pages
import Homepage from "./pages/Homepage";
// import { CoursepageHero } from "./components/Hero";
import Courseinfo from "./pages/Courseinfo";
import TechAcademy from "./pages/TechAcademy";
import BusinessSupportAcademy from "./pages/BusinessSupportAcademy";
import Employability from "./pages/Employability";
import Entrepreneurship from "./pages/Entrepreneurship";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="techacademy" element={<TechAcademy />} />
        <Route path="business" element={<BusinessSupportAcademy />} />
        <Route path="employability" element={<Employability />} />
        <Route path="entrepreneurship" element={<Entrepreneurship />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courseinfo" element={<Courseinfo />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
