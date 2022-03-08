import React from "react";

export const CourseCards = () => {
	return <div>CoursesCard</div>;
};
export const BlogCards = () => {
	return <div>CoursesCard</div>;
};
export const TechCards = (props) => {
	const { techimg, techtitle, techdescription } = props;
	return (
		<div className="card">
			<img src={techimg} className="card-img-top" alt={techtitle} />
			<div className="card-body">
				<h5 className="card-title">{techtitle}</h5>
				<p className="card-text">{techdescription}</p>
				<a href="#" className="btn signinbtnapply">
					Apply Now
				</a>
			</div>
		</div>
	);
};
// {07044699120-mtn}
export const InstructorCards = (props) => {
	const { techimg, instructorname, role, linkedinprofile } = props;
	return (
		<>
			{/* <div className="card">
				<img src={techimg} alt="" />
			</div>
			<div className="card w-75 inst">{instructorname}</div> */}

			<div className="card">
				<img src={techimg} className="card-img-top" alt={instructorname} />
				<div className="card-body">
					<h5 className="card-title">{role}</h5>
					<p className="card-text">{linkedinprofile}</p>
				</div>
			</div>
		</>
	);
};
