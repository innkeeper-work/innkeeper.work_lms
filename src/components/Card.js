import React from "react";

export const CourseCategoryCards = () => {
	return <h1>Hi</h1>;
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

export const InstructorCards = (props) => {
	const { techimg, instructorname, role, linkedinprofile } = props;
	return (
		<>
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img
							src={techimg}
							className="img-fluid rounded-start h-100"
							alt="..."
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{instructorname}</h5>
							<p className="card-text">{role}</p>
							<div className="card-text d-flex justify-content-end">
								<a href="https://www.linkedin.com" target="_blank">
									<i className="fa fa-linkedin iconCol" aria-hidden="true"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
