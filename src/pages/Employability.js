import React from 'react'

import { CourseCards } from "../components/Card";
import { InstructorCards } from "../components/Card";
import cvwrite from '../data/employability_softskills/cvwriting.json'

const Employability = () => {
	return (
		<div>
			<CVWriting />
			<OurInstructors />
		</div>
	);
};

let CVWriting = () => {
	return (
		<div className="webDev mx-5 px-5 my-5 pb-5">
			<div className="row">
				{cvwrite.cvwriting.map((singlecv) => {
					return (
						<div className="col-4" key={singlecv.id}>
							<CourseCards {...singlecv}></CourseCards>
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
        {cvwrite.instructors.map((singlecv) => {
          return (
            <div className="col-4" key={singlecv.id}>
              <InstructorCards {...singlecv}></InstructorCards>
            </div>
          );
        })} 
      </div>  
    </div>  
  )
}



export default Employability;
