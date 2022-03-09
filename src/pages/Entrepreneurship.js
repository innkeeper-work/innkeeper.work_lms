import React from 'react'

import { CourseCards } from "../components/Card";
import { InstructorCards } from "../components/Card";
import entskills from '../data/entrepreneurship/entrepreneurship.json'
import { OurInstructors } from '../components/Ourinstructors';

const Entrepreneurship = () => {
	return (
		<div>
			<Enterpreneur />
			<OurInstructors />
			<Instructors />
		</div>
	);
};

let Enterpreneur = () => {
	return (
		<div className="webDev m-5 p-5 ">
		<div className="row p-1 d-flex justify-content-between">
				{entskills.entrepreneur.map((singleEnt) => {
					return (
						<div className="col-md-3 col-sm-6 pb-5" key={singleEnt.id}>
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
	<div className="row p-1 d-flex justify-content-around">
        {entskills.instructors.map((singleEnt) => {
          return (
            <div className="col-4" key={singleEnt.id}>
              <InstructorCards {...singleEnt}></InstructorCards>
            </div>
          );
        })} 
      </div>  
    </div>  
  )
}



export default Entrepreneurship;
