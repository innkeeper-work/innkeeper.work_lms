import React from "react";
import infoimage from "../../images/infoimage.png";
import adamu from "../../images/adamu.png";
import techacademy from "../../data/tech_academy_details/techacademy.json";
import HowToApply from "../../components/HowToApply";
import CourseEnroll from "../../components/CourseEnroll";
import { BookIcon, AlarmIcon, CreditCardIcon } from "../../components/Icons";
import { Link } from "react-router-dom";
import { CourseinfoHero } from "../../components/Hero";
import { ApplyNowButton } from "../../components/Buttons";
import { CourseCards } from "../../components/Card";

let DevopsInfo = () => {
	return (
		<div>
			<CourseinfoHero coursename="Designing and Implementing Microsoft DevOps Solutions" />
			<div className="row justify-content-center">
				<div className="col-lg-7 col-md-6 col-sm-10">
					<AboutDevops />
					<HowToApply />
				</div>
				<div className="col-lg-4 col-md-5 col-sm-10 sectiontwoBg mt-5 h-100">
					<DevopsReq />
					<CourseEnroll />
					<DevopsInstructor />
				</div>
			</div>
			<DevopsRelated />
		</div>
	);
};

let AboutDevops = () => {
	return (
		<div className="">
			<div className="navbar-expand-lg">
				<div className="mt-5">
					<ul className="navbar-nav ">
						<li className="">
							<div className="d-flex px-3">
								<div className="px-2">
									<BookIcon />
								</div>

								<div>
									<h3>COURSES</h3>
									<p>04 Weeks</p>
								</div>
							</div>
						</li>
						<li className="">
							<div className="d-flex px-3">
								<div className="px-2">
									<AlarmIcon />
								</div>

								<div>
									<h3>DURATION</h3>
									<p>50 Hours</p>
								</div>
							</div>
						</li>
						<li className="">
							<div className="d-flex px-3">
								<div className="px-2">
									<CreditCardIcon />
								</div>
								<div>
									<h3>FEE</h3>
									<p>300,000.00</p>
								</div>
							</div>
						</li>
						<li className="px-3">
							<ApplyNowButton />
						</li>
					</ul>
				</div>
			</div>
			<img src={infoimage} className="card-img-top" alt="..." />
			<div className="card-body">
				<h3 className="card-title">About Course</h3>
				<p className="card-text">
					This course provides the knowledge and skills to design and implement
					DevOps processes and practices. Students will learn how to plan for
					DevOps, use source control, scale Git for an enterprise, consolidate
					artifacts, design a dependency management strategy, manage secrets,
					implement continuous integration, implement a container build
					strategy, design a release strategy, set up a release management
					workflow, implement a deployment pattern, and optimize feedback
					mechanisms.
				</p>
			</div>
		</div>
	);
};

let DevopsReq = () => {
	return (
		<div className="card-body">
			<h3 className="card-title">Requirements</h3>
			<ul className="list-content">
				<li className="list-item pb-2">
					Cloud computing concepts, including an understanding of PaaS, SaaS,
					and IaaS implementations.
				</li>
				<li className="list-item pb-2">
					Both Azure administration and Azure development with proven expertise
					in at least one of these areas.
				</li>
				<li className="list-item pb-2">
					Version control, Agile software development, and core software
					development principles. It would be helpful to have experience in an
					organization that delivers software.
				</li>
			</ul>
		</div>
	);
};

let DevopsInstructor = () => {
	return (
		<div className="mb-3">
			<div className="instructor_card d-flex align-items-md-center">
				<div>
					<img
						src={adamu}
						alt=""
						width="100px"
						height="100px"
						className="rounded-circle"
					/>
				</div>

				<div className="ms-3">
					<h5>About Instructor</h5>
					<p>AbdulRahman Adamu</p>
					<p>Frontend Developer</p>
				</div>
				{/* <Link to=""></Link> */}
			</div>
		</div>
	);
};

let DevopsRelated = () => {
	return (
		<div className="webDev mx-5 px-5 my-5 pb-5">
			<h3 className="techHead px-5 my-5 pt-5">Related Courses</h3>
			<div className="row">
				{techacademy.bigdata.map((singlebig) => {
					return (
						<div className="col-lg-4 col-md-6 col-sm-12" key={singlebig.id}>
							<CourseCards {...singlebig}></CourseCards>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default DevopsInfo;
