import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./sassfiles/app.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { CoursepageHero } from "./components/Hero";
import TechAcademy from "./pages/TechAcademy";
import BusinessSupportAcademy from "./pages/BusinessSupportAcademy";
import Employability from "./pages/Employability";
import Entrepreneurship from "./pages/Entrepreneurship";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
// testing purposes
import { TechCards } from "./components/Card";
import { CourseCards } from "./components/Card";
import { BlogCards } from "./components/Card";
import { InstructorCards } from "./components/Card";
import techacademy from "./data/tech_academy_details/techacademy.json";

function App() {
	return (
		<div className="App">
			<CoursepageHero />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="techacademy" element={<TechAcademy />} />
				<Route path="business" element={<BusinessSupportAcademy />} />
				<Route path="employability" element={<Employability />} />
				<Route path="entrepreneurship" element={<Entrepreneurship />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</div>
	);
}

// function Apps() {
// 	return (
// 		<div className="App">
// 			<h3>Programming and Web Dev</h3>
// 			<div className="row">
// 				{techacademy.instructors.map((singleweb) => {
// 					return (
// 						<div className="col-4" key={singleweb.id}>
// 							<InstructorCards {...singleweb}></InstructorCards>
// 						</div>
// 					);
// 				})}
// 			</div>
// 			<CourseCards />
// 			<BlogCards />

// 			<TechCards />
// 			<InstructorCards />
// 		</div>
// 	);
// }
export default App;
