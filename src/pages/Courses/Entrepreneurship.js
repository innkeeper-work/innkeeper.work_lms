import React from "react";

import { CoursepageHero } from "../../components/Hero";
import { CourseCards } from "../../components/Card";
import { InstructorCards } from "../../components/Card";
import entskills from "../../data/entrepreneurship/entrepreneurship.json";
import { OurInstructors } from "../../components/Ourinstructors";

const Entrepreneurship = () => {
	return (
		<div>
			<CourseHero />
			<Enterpreneur />
			<OurInstructors />
			<Instructors />
		</div>
	);
};
let CourseHero = () => {
	return (
		<div className="">
			{entskills.entrepreneurheroinfo.map((singlehero) => {
				return (
					<div className="" key={singlehero.id}>
						<CoursepageHero {...singlehero}></CoursepageHero>
					</div>
				);
			})}
		</div>
	);
};

let Enterpreneur = () => {
	return (
		<div className="p-4 mx-3 my-4">
			<div className="row lg-3 p-1 d-flex justify-content-center">
				{entskills.entrepreneur.map((singleEnt) => {
					return (
						<div
							className="col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex align-items-stretch py-4"
							key={singleEnt.id}>
							<CourseCards {...singleEnt}></CourseCards>
						</div>
					);
				})}
			</div>
		</div>
	);
};

let Instructors = () => {
	return (
		<div className="webDev m-5 p-5">
			<div className="row d-flex justify-content-around">
				{entskills.instructors.map((singleEnt) => {
					return (
						<div className="col-lg-4 col-sm-4 col-md-4" key={singleEnt.id}>
							<InstructorCards {...singleEnt}></InstructorCards>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Entrepreneurship;
