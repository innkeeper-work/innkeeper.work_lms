import React from 'react'

import { CourseCards } from "../components/Card";
import { InstructorCards } from "../components/Card";
import launchbiz from '../data/entrepreneurship/entrepreneurship.json'

const Entrepreneurship = () => {
	return (
		<div>
			<Launchbiz />
			<OurInstructors />
		</div>
	);
};

let Launchbiz = () => {
	return (
		<div className="webDev mx-5 px-5 my-5 pb-5">
			<div className="row">
				{launchbiz.entrepreneur.map((singlebiz) => {
					return (
						<div className="col-4" key={singlebiz.id}>
							<CourseCards {...singlebiz}></CourseCards>
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
        {launchbiz.instructors.map((singlebiz) => {
          return (
            <div className="col-4" key={singlebiz.id}>
              <InstructorCards {...singlebiz}></InstructorCards>
            </div>
          );
        })} 
      </div>  
    </div>  
  )
}



export default Entrepreneurship;
