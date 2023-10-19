import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// components
import Footer from "./components/Footer";
import { SalesPageFooter } from "./components/Footer";

// pages
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import TechAcademy from "./pages/Courses/TechAcademy";
import BusinessSupportAcademy from "./pages/Courses/BusinessSupportAcademy";
import Employability from "./pages/Courses/Employability";
import Entrepreneurship from "./pages/Courses/Entrepreneurship";
import Studentloan from "./pages/Payments/Studentloan";
import Trainingbond from "./pages/Payments/Trainingbond";
import Scholarships from "./pages/Payments/Scholarships";
import Error404 from "./pages/Error404";
import Talent from "./pages/Talent";
import Vacancy from "./pages/Vacancy";
import CorporatePage from "./pages/Corporate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UnderConstruction from "./pages/UnderConstruction";
import InnkeeperTraining from "./pages/InnkeeperTraining";

// courseinfo pages
import Frontend from "./pages/Courseinfo/techacademy/prog_web_dev/Frontend";
import Backend from "./pages/Courseinfo/techacademy/prog_web_dev/Backend";
import Fullstack from "./pages/Courseinfo/techacademy/prog_web_dev/Fullstack";
import Devops from "./pages/Courseinfo/techacademy/cloudcomputing/Devops";
import Architectdesign from "./pages/Courseinfo/techacademy/cloudcomputing/Architectdesign";
import Architecttech from "./pages/Courseinfo/techacademy/cloudcomputing/Architecttech";
import Relationaldb from "./pages/Courseinfo/techacademy/cloudcomputing/Relationaldb";
import Riskmgt from "./pages/Courseinfo/techacademy/cybersecurity/Riskmgt";
import Reverseengineering from "./pages/Courseinfo/techacademy/cybersecurity/Reverseengineering";
import Pentesting from "./pages/Courseinfo/techacademy/cybersecurity/Pentesting";
import Bigdata from "./pages/Courseinfo/techacademy/bigdata_iot/Bigdata";
import Python from "./pages/Courseinfo/techacademy/bigdata_iot/Python";
import IoT from "./pages/Courseinfo/techacademy/bigdata_iot/IoT";
import Securityaudit from "./pages/Courseinfo/techacademy/cybersecurity/Securityaudit";
import Sales from "./pages/Courseinfo/business_support/Sales";
import Customerexperience from "./pages/Courseinfo/business_support/Customerexperience";
import Digitalmarketing from "./pages/Courseinfo/business_support/Digitalmarketing";
import Stillandmotion from "./pages/Courseinfo/business_support/Stillandmotion";
import Videoediting from "./pages/Courseinfo/business_support/Videoediting";
import DigitalAdminTools from "./pages/Courseinfo/business_support/DigitalAdminTools";
// import Business from "./pages/Courseinfo/archived/Business";
// import ContentMgt from "./pages/Courseinfo/archived/ContentMgt";
// import Criticalthinking from "./pages/Courseinfo/archived/Criticalthinking";
// import Devopportunity from "./pages/Courseinfo/archived/Devopportunity";
// import Financing from "./pages/Courseinfo/archived/Financing";
// import Growth from "./pages/Courseinfo/archived/Growth";
// import Personaldevt from "./pages/Courseinfo/archived/Personaldevt";
// import Successfulteam from "./pages/Courseinfo/archived/Successfulteam";
// import Workshop from "./pages/Courseinfo/archived/Workshop";

function App() {
  // const { pathname } = useLocation();

  return (
    <div className="App">
      <Routes>
        {/* pages */}
        <Route path="/" element={<InnkeeperTraining />} />
        {/* <Route path="/" element={<Homepage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="techacademy" element={<TechAcademy />} />
        <Route
          path="businesssupportacademy"
          element={<BusinessSupportAcademy />}
        />
        <Route path="employability" element={<Employability />} />
        <Route path="entrepreneurship" element={<Entrepreneurship />} />
        <Route path="studentloan" element={<Studentloan />} />
        <Route path="scholarships" element={<Scholarships />} />
        <Route path="trainingbond" element={<Trainingbond />} /> */}
        <Route path="talent" element={<Talent />} />
        <Route path="vacancy" element={<Vacancy />} />
        <Route path="corporate" element={<CorporatePage />} />
        {/* <Route path="privacypolicy" element={<PrivacyPolicy />} /> */}
        {/* <Route path="/" element={<UnderConstruction />} /> */}
        <Route path="*" element={<Error404 />} />
        {/* course info pages */}
        {/* techacademy */}
        {/* <Route path="frontend" element={<Frontend />} />
        <Route path="backend" element={<Backend />} />
        <Route path="fullstack" element={<Fullstack />} />
        <Route path="devops" element={<Devops />} />
        <Route path="architectdesign" element={<Architectdesign />} />
        <Route path="architecttech" element={<Architecttech />} />
        <Route path="relationaldb" element={<Relationaldb />} />
        <Route path="riskmgt" element={<Riskmgt />} />
        <Route path="reverseengineering" element={<Reverseengineering />} />
        <Route path="pentesting" element={<Pentesting />} />
        <Route path="bigdata" element={<Bigdata />} />
        <Route path="python" element={<Python />} />
        <Route path="iot" element={<IoT />} />
        <Route path="securityaudit" element={<Securityaudit />} />
        <Route path="sales" element={<Sales />} />
        <Route path="customerexperience" element={<Customerexperience />} />
        <Route path="digitalmarketing" element={<Digitalmarketing />} />
        <Route path="videoediting" element={<Videoediting />} />
        <Route path="stillandmotion" element={<Stillandmotion />} />
        <Route path="businessupport" element={<BusinessSupportAcademy />} />
        <Route path="digitaladmintools" element={<DigitalAdminTools />} /> */}
        {/* <Route path="innkeeperTraining" element={<InnkeeperTraining />} /> */}
        {/* <Route path="business" element={<Business />} />
				<Route path="contentmgt" element={<ContentMgt />} />
				<Route path="criticalthinking" element={<Criticalthinking />} />
				<Route path="devopportunity" element={<Devopportunity />} />
				<Route path="financing" element={<Financing />} />
				<Route path="growthstrategy" element={<Growth />} />
				<Route path="personaldevt" element={<Personaldevt />} />
				<Route path="successfulteam" element={<Successfulteam />} />
				<Route path="workshop" element={<Workshop />} /> */}{" "}
        {/* <Route */}
      </Routes>

      {/* {pathname === "/innkeeperTraining" ||
      pathname === "/InnkeeperTraining" ||
      pathname === "/" ? null : (
        <Footer />
      )} */}

      <footer>
        <SalesPageFooter />
      </footer>
    </div>
  );
}

export default App;
