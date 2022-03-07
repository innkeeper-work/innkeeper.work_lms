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
		<div className="card" style={{ width: "18rem" }}>
			<img src={techimg} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{techtitle}</h5>
				<p className="card-text">{techdescription}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
export const InstructorCards = () => {
	return <div>CoursesCard</div>;
};
