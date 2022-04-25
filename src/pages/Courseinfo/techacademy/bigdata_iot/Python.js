import React from "react";
import infoimage from "../../../../images/infoimage.png";
import techacademy from "../../../../data/tech_academy_details/techacademy.json";
import HowToApply from "../../../../components/HowToApply";
import { PaymentOptions } from "../../../../components/CourseEnroll";
import {
	BookIcon,
	AlarmIcon,
	CreditCardIcon,
} from "../../../../components/Icons";
import { CourseinfoHero } from "../../../../components/Hero";
import { ApplyNowButton } from "../../../../components/Buttons";
import { CourseCards } from "../../../../components/Card";
import { Link } from "react-router-dom";

let PythonInfo = () => {
	return (
		<div>
			<CourseinfoHero coursename="Programming Essentials in Python I and II" />
			<div className="row justify-content-center g-0">
				<div className="col-lg-7 col-md-6 col-sm-10">
					<AboutPython />
					<HowToApply />
				</div>
				<div className="col-lg-4 col-md-5 col-sm-10 sectiontwoBg mt-5 h-100">
					<PythonReq />
					<CourseEnroll />
					{/* <PythonInstructor /> */}
				</div>
			</div>
			<PythonRelated />
		</div>
	);
};

let AboutPython = () => {
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
									<p>150,000.00</p>
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
					The PCAP: Programming Essentials in Python course covers all the
					basics of programming in Python 3, as well as general computer
					programming concepts and techniques. The course also familiarizes the
					student with the object-oriented approach. The course is broken down
					into two parts, each divided into four modules. Students have access
					to hands-on practice materials, quizzes, and assessments to learn how
					to utilize the skills and knowledge gained on the course and interact
					with Some real-life programming tasks and situations.
				</p>
			</div>
		</div>
	);
};

let PythonReq = () => {
	return (
		<div className="card-body">
			<h3 className="card-title">Requirement</h3>
			<ul className="list-content">
				<li className="list-item pb-2">
					Basic TCP/IP networking including cabling, and connecting and
					configuring devices in a LAN and to the Internet.
				</li>
				<li className="list-item pb-2">
					Familiarity with Cisco Packet Tracer.
				</li>
				<li className="list-item pb-2">
					Experience using any programming language to solve basic algorithmic
					problems.
				</li>
				<li className="list-item pb-2">
					Foundational knowledge of physics including current, voltage,
					resistance, and power.
				</li>
			</ul>
		</div>
	);
};

let CourseEnroll = () => {
	return (
		<div className="card-body">
			<h3 className="card-title">Available Enrolment Options</h3>
			<ul className="list-content">
				<li className="list-item pb-2">
					Click to{" "}
					<a
						className="text-decoration-none"
						href="https://paystack.com/pay/innkeeper-python"
						target="_blank"
						rel="noreferrer">
						<b>Pay Now</b>
					</a>
				</li>
				<li className="list-item pb-2">
					Click to{" "}
					<a
						href="https://paystack.com/pay/innkeeper-data-science-part-payment"
						className="text-decoration-none"
						target="_blank">
						<b>Pay Installmentally</b>
					</a>
				</li>
			</ul>
			<PaymentOptions />
		</div>
	);
};

let PythonRelated = () => {
	return (
		<div className="webDev mx-5 px-5 my-5 pb-5">
			<h3 className="techHead px-5 my-5 pt-5">Related Courses</h3>
			<div className="row">
				{techacademy.bigdata.map((singlecloud) => {
					if (singlecloud.id !== 2) {
						return (
							<div
								className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch"
								key={singlecloud.id}>
								<CourseCards {...singlecloud}></CourseCards>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};
export default PythonInfo;
