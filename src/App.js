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
import { CourseCategoryCards, TechCards } from "./components/Card";
import { CourseCategoriesCards } from "./components/Card";
import { BlogCards } from "./components/Card";
import { InstructorCards } from "./components/Card";
import techacademy from "./data/tech_academy_details/techacademy.json";  
import categories from "./data/categories.json";

// function App() {
// 	return (
// 		<div className="App">
{
	/* <CoursepageHero /> */
}
{
	/* <Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="techacademy" element={<TechAcademy />} />
				<Route path="business" element={<BusinessSupportAcademy />} />
				<Route path="employability" element={<Employability />} />
				<Route path="entrepreneurship" element={<Entrepreneurship />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<Error404 />} />
			</Routes> */
}
{
	/* </div>
	);
} */
}

function App() {
	return (
		<div className="App">
			<h3>Programming and Web Dev</h3>
			<div className="row">
				{categories.coursecategories.map((singleweb) => {
					return (
						<div className="col-4" key={singleweb.id}>
							<CourseCategoryCards {...singleweb}></CourseCategoryCards>
						</div>
					);
				})}
			</div>
			{/* <CourseCards />
			<BlogCards />

			<TechCards />
			<InstructorCards /> */}
		</div>
	);
}
export default App;
