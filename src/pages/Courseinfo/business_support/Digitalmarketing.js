import React from "react";
import infoimage from "../../../images/infoimage.png";
import businessSupport from "../../../data/bus_support_details/business_support.json";
import HowToApply from "../../../components/HowToApply";
import { PaymentOptions } from "../../../components/CourseEnroll";
import { BookIcon, AlarmIcon, CreditCardIcon } from "../../../components/Icons";
import { Link } from "react-router-dom";
import { CourseinfoHero } from "../../../components/Hero";
import { ApplyNowButton } from "../../../components/Buttons";
import { CourseCards } from "../../../components/Card";

let DigitalmarketingInfo = () => {
	return (
		<div>
			<CourseinfoHero coursename="Digital Marketing" />
			<div className="row justify-content-center">
				<div className="col-lg-7 col-md-6 col-sm-10">
					<AboutDigitalmarketing />
					<HowToApply />
				</div>
				<div className="col-lg-4 col-md-5 col-sm-10 sectiontwoBg mt-5 h-100">
					<CourseEnroll />
					{/* <DigitalmarketingInstructor /> */}
				</div>
			</div>
			<DigitalmarketingRelated />
		</div>
	);
};

let AboutDigitalmarketing = () => {
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
			<div className="card-body">
				<h3 className="card-title">About Course</h3>
				<p className="card-text">
					This is a hybrid learning that blends self-paced and instructor-led
					learning for 4 weeks. Learn the fundamentals of digital marketing.
					Online Marketing Foundations, Google Analytics Essential Training, SEO
					Foundations, Google Ads (AdWords) Essential Training, Content
					Marketing Foundation,Social Media Marketing Foundations, Step by Step
					guide to setting up Facebook and Instagram Ads Campaign. Applicants
					are encouraged to pay in installments if full payment cannot be made.
					Instructors are seasoned industry-based and can be reached for
					post-class activities.
				</p>
			</div>
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
						href="https://paystack.com/pay/innkeeper-business-support"
						target="_blank"
						rel="noreferrer">
						<b>Pay Now</b>
					</a>
				</li>
				<li className="list-item pb-2">
					Click to{" "}
					<a
						href="https://paystack.com/pay/innkeeper-business-support-part-payment"
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

// let DigitalmarketingInstructor = () => {
//   return (
//     <div className="mb-3">
//       <div className="instructor_card d-flex align-items-md-center">
//         <div>
//           <img
//             src={adamu}
//             alt=""
//             width="100px"
//             height="100px"
//             className="rounded-circle"
//           />
//         </div>

//         <div className="ms-3">
//           <h5>About Instructor</h5>
//           <p>AbdulRahman Adamu</p>
//           <p>Frontend Developer</p>
//         </div>
//         {/* <Link to=""></Link> */}
//       </div>
//     </div>
//   );
// };

let DigitalmarketingRelated = () => {
	return (
		<div className="webDev mx-5 px-5 my-5 pb-5">
			<h3 className="techHead px-5 my-5 pt-5">Related Courses</h3>
			<div className="row">
				{businessSupport.business.map((singlebus) => {
					if (singlebus.id !== 3) {
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
export default DigitalmarketingInfo;
