import React from 'react';

import { CoursepageHero } from "../components/Hero";
import { CourseCards } from "../components/Card";
import { InstructorCards } from "../components/Card";
import entskills from '../data/entrepreneurship/entrepreneurship.json'
import { OurInstructors } from '../components/Ourinstructors';

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
		<div className="webDev m-5 p-5 ">
		<div className="row lg-3 p-1 d-flex justify-content-between">
				{entskills.entrepreneur.map((singleEnt) => {
					return (
						<div className="col-md-3 col-lg-3 col-sm-6 pb-5" key={singleEnt.id}>
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
  )
}




export default Entrepreneurship;
