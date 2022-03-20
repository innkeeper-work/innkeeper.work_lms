import React from "react";
import { CourseCards } from "../components/Card";
import { OurInstructors } from "../components/Ourinstructors";
import businessSupport from "../data/bus_support_details/business_support.json";
import { CoursepageHero } from "../components/Hero";
import { InstructorCards } from "../components/Card";

const BusinessSupportAcademy = () => {
	return (
		<div>
			<BusinessHero />
			<Business />
			<OurInstructors />
			<BusinessInstructors />
		</div>
	);
};

let BusinessHero = () => {
	return (
		<div>
			{businessSupport.businessheroinfo.map((singlebushero) => {
				return (
					<div key={singlebushero.id}>
						<CoursepageHero {...singlebushero}></CoursepageHero>
					</div>
				);
			})}
		</div>
	);
};

let Business = () => {
	return (
		<div className="webDev m-5 p-5">
			<div className="row p-1 d-flex justify-content-around">
				{businessSupport.business.map((singlebus) => {
					return (
						<div
							className="col-lg-4 col-md-6 d-flex align-items-stretch py-4"
							key={singlebus.id}>
							<CourseCards {...singlebus}></CourseCards>
						</div>
					);
				})}
			</div>
		</div>
	);
};

let BusinessInstructors = () => {
	return (
		<div className="webDev m-5 p-5">
			<div className="row p-1 d-flex justify-content-around">
				{businessSupport.instructors.map((singleInstr) => {
					return (
						<div className="col-md-4 col-sm-6" key={singleInstr.id}>
							<InstructorCards {...singleInstr}></InstructorCards>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default BusinessSupportAcademy;
