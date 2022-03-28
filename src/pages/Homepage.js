import React from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import { HomepageHero } from "../components/Hero";
import aiki from "../images/aiki.png";
import whychooseus from "../images/whychooseus.png";
import categories from "../data/categories.json";
import faqs from "../data/faq.json";
import { CourseCategoryCards } from "../components/Card";
import { BlogCards } from "../components/Card";
import { BlogCardsTwo } from "../components/Card";
// import { LearnMoreButton } from "../components/Buttons";
import { BeginCoursesButton } from "../components/Buttons";
import { SubscribeButton } from "../components/Buttons";
import { FAQ } from "../components/FAQ";
import { ApplyNowButton } from "../components/Buttons";
import { OurPartners } from "../components/OurPartners";

import videoicon from "../images/videoicon.png";

const Home = () => {
	return (
		<div>
			<HomepageHero />
			<OurPartners />
			<Homepagemain />
			<Homepagewelcome />
			<Homepagesoft />
			<CourseCategory />
			<Homepagetest />
			<Testimonial />
			<Faq />
			<div className="row m-3">
				<h3 className="text-center my-5">Blog</h3>
				<div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 d-flex align-items-stretch py-3">
					<BlogCards>
						LSETF/USADF partners with us to begin a fully-funded scholarship for
						youths in Lagos.
					</BlogCards>
				</div>
				<div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 d-flex align-items-stretch py-3">
					<BlogCardsTwo>
						Two weeks intensive internship training commences.
					</BlogCardsTwo>
				</div>
			</div>
			<div className="w-75 mx-auto">{/* <hr /> */}</div>

			{/* <Newsletter /> */}
		</div>
	);
};

let Homepagemain = () => {
	return (
		<div className="container-fluid p-5 mainBg">
			{" "}
			<h3 className="text-center pb-4">Why Choose Us</h3>
			<div className="card-group justify-content-around">
				<div className="col-lg-4 col-md-4 col-sm-12 pb-5">
					<img src={whychooseus} className="card-img-top" alt="..." />
				</div>
				<div className="col-lg-3 col-md-3 col-sm-12 d-sm-flex d-md-block mt-lg-5">
					<div className="row">
						<div className="">
							<i className="bi bi-book iconCol"></i>
							<h3>Self-Paced Learning</h3>

							<p>
								We are empathic on serving you with the best based on your
								convenience.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="">
							<i className="bi bi-credit-card-2-front iconCol"></i>

							<h3>Flexibility-support</h3>
							<p>Classes are stress-free with our flexible payment system.</p>
						</div>
					</div>
				</div>

				<div className="col-lg-3 col-md-3 col-sm-12 d-sm-flex d-md-block my-lg-auto">
					<div className="row">
						<div>
							{" "}
							<i className="bi bi-tv iconCol"></i>
							<h3>Instructor-Led Learning</h3>
							<p>
								Our instructors are top- notch in the various courses of
								interest Be assured of getting the best.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="">
							<i className="bi bi-pip iconCol"></i>
							<h3>Scholarship-Support</h3>
							<p>
								We provide fully-funded training in collaboration with
								organizations that share the same goals so as to ensure
								upskilling of youths in Nigeria.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

let Homepagewelcome = () => {
	return (
		<div className="container text-center py-5">
			<div className="card-body">
				<h3 className="card-title">Welcome to our Inn</h3>
				<p className="card-text">
					We are that digital inn where you get equipped and positioned to
					become financially independent. Innkeeper.work is an upskilling
					platform that allows for collaborative learning, leveraging self-paced
					and instructor-led approaches.
				</p>
				{/* <LearnMoreButton /> */}
			</div>
		</div>
	);
};
let Homepagesoft = () => {
	return (
		<div className="text-center py-5 bgSoft">
			<div className="card-body herotextWhite">
				<p className="card-title">
					Join our community to get certified for that professional role you
					desire.
				</p>
				<p className="card-text">Take our free soft skill courses today!</p>
				<Link to="employability">
					<BeginCoursesButton />
				</Link>
			</div>
		</div>
	);
};

let CourseCategory = () => {
	return (
		<div className="categoryBg py-4">
			<div className="mx-md-5 px-md-3" id="categories">
				<h3 className="text-center pt-5">Our Courses</h3>
				<div className="row g-0 justify-content-center">
					{categories.coursecategories.map((category) => {
						return (
							<div
								className="col-lg-4 col-md-6 col-sm-6 col-xs-12
            "
								key={category.id}>
								<CourseCategoryCards {...category}></CourseCategoryCards>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

let Homepagetest = () => {
	return (
		<div
			className="text-center py-5
     bgSoft">
			<div className="card-body herotextWhite">
				<p className="card-title">
					"My entire team was good to go at the end of the training! The soft
					skills available on innkeeper platform was used to train my team. This
					was needful because my team relates with people often. I witnessed
					some part of the role plays and it was impactful. Thanks to
					innkeeper.work”
				</p>

				<img src={aiki} className="img-fluid rounded-start mt-4" alt="..." />

				<p className="card-title mt-3">Hafsatu Shinkafi</p>
				<p className="card-text">CEO, AIKI Services</p>
			</div>
		</div>
	);
};

// style={{ width: '25%' }}
let Testimonial = () => {
	return (
		<div className="col-xs-12 p-5 text-center testBg">
			<div className="card testTextBg m-auto p-3">
				<h3 className="">Success Story</h3>
				<div className="">
					<p>
						I opted for the Sales/Customer Service course and I was not
						disappointed. The trainers are competent and professionals.For me,
						my confidence grew during the Course and my interest in Sales as a
						career was ignited. I had a great experience and I will gladly
						recommend this program.
					</p>
					<b className="">Jelilat Akinremi</b>
					<p className="">Sales/Customer Service Graduate</p>
					<Link to="" className="">
						<img
							src={videoicon}
							className="d-block mx-auto img-fluid rounded-circle"
							alt=""
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

let Faq = () => {
	return (
		<div className="py-5 faqBg">
			<h3 className="text-center">Frequently Asked Questions</h3>
			<div
				className="container accordion accordion-flush"
				id="accordionFlushExample">
				<div className="accordion-item">
					<p className="accordion-header" id="flush-headingOne">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseOne"
							aria-expanded="false"
							aria-controls="flush-collapseOne">
							Accordion Item #1
						</button>
					</p>
					<div
						id="flush-collapseOne"
						className="accordion-collapse collapse"
						aria-labelledby="flush-headingOne"
						data-bs-parent="#accordionFlushExample">
						<div className="accordion-body">
							Placeholder content for this accordion, which is intended to
							demonstrate the <code>.accordion-flush</code> class. This is the
							first item's accordion body.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<p className="accordion-header" id="flush-headingTwo">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseTwo"
							aria-expanded="false"
							aria-controls="flush-collapseTwo">
							Accordion Item #2
						</button>
					</p>
					<div
						id="flush-collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="flush-headingTwo"
						data-bs-parent="#accordionFlushExample">
						<div className="accordion-body">
							Placeholder content for this accordion, which is intended to
							demonstrate the <code>.accordion-flush</code> class. This is the
							second item's accordion body. Let's imagine this being filled with
							some actual content.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<p className="accordion-header" id="flush-headingThree">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseThree"
							aria-expanded="false"
							aria-controls="flush-collapseThree">
							Accordion Item #3
						</button>
					</p>
					<div
						id="flush-collapseThree"
						className="accordion-collapse collapse"
						aria-labelledby="flush-headingThree"
						data-bs-parent="#accordionFlushExample">
						<div className="accordion-body">
							Placeholder content for this accordion, which is intended to
							demonstrate the <code>.accordion-flush</code> class. This is the
							third item's accordion body. Nothing more exciting happening here
							in terms of content, but just filling up the space to make it
							look, at least at first glance, a bit more representative of how
							this would look in a real-world application.
						</div>
					</div>
				</div>
			</div>
			<div className="text-center py-4">
				<ApplyNowButton />
			</div>
		</div>
	);
};

// let Newsletter = () => {
// 	const sendMessage = (e) => {
// 		e.preventDefault();
// 		emailjs
// 			.sendForm(
// 				"service_dll3w3m",
// 				"template_1p9duns",
// 				e.target,
// 				"cwTEWIt7UFDMpdP1O"
// 			)
// 			.then((res) => {
// 				console.log(res);
// 			})
// 			.catch((err) => console.log(err));
// 	};
// 	return (
// 		<div className="text-center py-5 newsBg">
// 			<div className="card-body">
// 				<h3 className="card-title">Our News Channel</h3>
// 				<p className="card-text">
// 					Welcome to our news channel, subscribe to receive daily updates.
// 				</p>

// 				<form onSubmit={sendMessage}>
// 					<input
// 						type="email"
// 						className="form-control w-25 mx-auto"
// 						id="exampleFormControlInput1"
// 						name="email"
// 						placeholder="Email"></input>
// 					<div className="mt-3">
// 						<SubscribeButton />
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
export default Home;
