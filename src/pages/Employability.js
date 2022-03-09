import React from "react";

import { CourseCards } from "../components/Card";
import { InstructorCards } from "../components/Card";
import empsoftskill from "../data/employability_softskills/employability_softskills.json";

const Employability = () => {
	return (
		<div>
			<EmpSoftSkills />
			<OurInstructors />
		</div>
	);
};

let EmpSoftSkills = () => {
	return (
		<div className="webDev mx-5 px-5 my-5 pb-5">
			<div className="row">
				{empsoftskill.empsoftskills.map((singleEmp) => {
					return (
						<div className="col-4" key={singleEmp.id}>
							<CourseCards {...singleEmp}></CourseCards>
						</div>
					);
				})}
			</div>
		</div>
	);
};

let OurInstructors = () => {
	return (
		<div className="webDev mx-5 px-5 my-5 pb-5">
			<div className="row">
				{empsoftskill.instructors.map((singlecv) => {
					return (
						<div className="col-4" key={singlecv.id}>
							<InstructorCards {...singlecv}></InstructorCards>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Employability;
