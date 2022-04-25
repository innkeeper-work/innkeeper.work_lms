import React from "react";
import infoimage from "../../../images/infoimage.png";
import HowToApply from "../../../components/HowToApply";
import { PaymentOptions } from "../../../components/CourseEnroll";
import businessSupport from "../../../data/bus_support_details/business_support.json";
import { BookIcon, AlarmIcon, CreditCardIcon } from "../../../components/Icons";
import { CourseinfoHero } from "../../../components/Hero";
import { ApplyNowButton } from "../../../components/Buttons";
import { CourseCards } from "../../../components/Card";
import { Link } from "react-router-dom";

let VideoeditingInfo = () => {
	return (
		<div>
			<CourseinfoHero coursename="Video Editing" />
			<div className="row justify-content-center g-0">
				<div className="col-lg-7 col-md-6 col-sm-10">
					<AboutVideoediting />
					<HowToApply />
				</div>
				<div className="col-lg-4 col-md-5 col-sm-10 sectiontwoBg mt-5 h-100">
					{/* <VideoeditingReq /> */}
					<CourseEnroll />
					{/* <VideoeditingInstructor /> */}
				</div>
			</div>
			<VideoeditingRelated />
		</div>
	);
};

let AboutVideoediting = () => {
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
									<p>80 Hours</p>
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
									<p>100,000.00</p>
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
			{/* <div className="card-body">
        <h3 className="card-title">About Course</h3>
        <p className="card-text">
         
        </p>
      </div> */}
		</div>
	);
};

// let VideoeditingReq = () => {
//   return (
//     <div className="card-body">
//       <h3 className="card-title">Requirement</h3>
//       <ul className="list-content">
//         <li className="list-item pb-2">
//           Basic TCP/IP networking including cabling, and connecting and
//           configuring devices in a LAN and to the Internet.
//         </li>
//         <li className="list-item pb-2">
//           Familiarity with Cisco Packet Tracer.
//         </li>
//         <li className="list-item pb-2">
//           Experience using any programming language to solve basic algorithmic
//           problems.
//         </li>
//         <li className="list-item pb-2">
//           Foundational knowledge of physics including current, voltage,
//           resistance, and power.
//         </li>
//       </ul>
//     </div>
//   );
// };

let CourseEnroll = () => {
	return (
		<div className="card-body">
			<h3 className="card-title">Available Enrolment Options</h3>
			<ul className="list-content">
				<li className="list-item pb-2">
					Click to{" "}
					<a
						className="text-decoration-none"
						href="https://paystack.com/pay/innkeeper-business-support"
						target="_blank"
						rel="noopener noreferrer">
						<b>Pay Now</b>
					</a>
				</li>
				<li className="list-item pb-2">
					Click to{" "}
					<a
						href="https://paystack.com/pay/innkeeper-business-support-part-payment"
						className="text-decoration-none"
						target="_blank"
						rel="noopener noreferrer">
						<b>Pay Installmentally</b>
					</a>
				</li>
			</ul>
			<PaymentOptions />
		</div>
	);
};

let VideoeditingRelated = () => {
	return (
		<div className="webDev mx-5 px-5 my-5 pb-5">
			<h3 className="techHead px-5 my-5 pt-5">Related Courses</h3>
			<div className="row">
				{businessSupport.business.map((singlebus) => {
					if (singlebus.id !== 4) {
						return (
							<div
								className="col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex align-items-stretch py-4"
								key={singlebus.id}>
								<CourseCards {...singlebus}></CourseCards>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
};
export default VideoeditingInfo;
