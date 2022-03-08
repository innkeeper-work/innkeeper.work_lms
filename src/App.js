import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./sassfiles/app.css";
import { CourseCards } from "./components/Card";
import { BlogCards } from "./components/Card";
import { InstructorCards } from "./components/Card";
import techacademy from "./data/tech_academy_details/techacademy.json";
import TechAcademy from "./pages/TechAcademy.js";

function App() {
  return (
    <div className="App">
      <TechAcademy />
    </div>
  );
}
export default App;

// function App() {
// 	return (
// 		<div className="App">
// 			<h3>Programming and Web Dev</h3>
// 			<div className="row">
// 				{techacademy.webdev.map((singleweb) => {
// 					return (
// 						<div className="col-4" key={singleweb.id}>
// 							<TechCards {...singleweb}></TechCards>
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
