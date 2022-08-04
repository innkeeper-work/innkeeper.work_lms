import React from "react";
import { Link } from "react-router-dom";

// Components
import { HomepageHero } from "../components/Hero";
// import { OurPartners } from "../components/OurPartners";
import categories from "../data/categories.json";
import { CourseCategoryCards } from "../components/Card";
import { BeginCoursesButton } from "../components/Buttons";
import { BlogCards } from "../components/Card";
import { BlogCardsTwo } from "../components/Card";
import { SubscribeButton } from "../components/Buttons";

// Images
import aiki from "../assets/images/home/aiki.png";
import whychooseus from "../assets/images/home/whychooseus.png";
import videoicon from "../assets/images/partnerLogos/videoicon.png";

const Home = () => {
  return (
    <div>
      <HomepageHero />
      {/* <OurPartners /> */}
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
      <div className="w-75 mx-auto">
        <hr />
      </div>

      <Newsletter />
    </div>
  );
};

let Homepagemain = () => {
  return (
    <div className="container-fluid p-5 mainBg">
      {" "}
      <h3 className="text-center pb-4">Why Choose Us</h3>
      <div className="card-group row justify-content-center">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-5">
          <img src={whychooseus} className="card-img-top" alt="..." />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 m-auto ">
          <div className="col d-lg-flex d-md-flex mb-5 ">
            <div className="col">
              <i
                className="bi bi-book iconCol"
                style={{ fontSize: "28px" }}
              ></i>
              <h3>Self-Paced Learning</h3>
              <p>
                We are empathic on serving you with the best based on your
                convenience.
              </p>
            </div>
            <div className="col">
              <i
                className="bi bi-credit-card-2-front iconCol"
                style={{ fontSize: "28px" }}
              ></i>
              <h3>Flexibility-support</h3>
              <p>Classes are stress-free with our flexible payment system.</p>
            </div>
          </div>
          <div className="col d-lg-flex d-md-flex ">
            <div className="col">
              <i
                className="bi bi-bookmarks iconCol"
                style={{ fontSize: "28px" }}
              ></i>
              <h3>Instructor-Led Learning</h3>
              <p>
                Our instructors are top- notch in the various courses of
                interest Be assured of getting the best.
              </p>
            </div>
            <div className="col">
              <i
                className="bi bi-wallet2 iconCol"
                style={{ fontSize: "28px" }}
              ></i>
              <h3>Scholarship-Support</h3>
              <p>
                {" "}
                We provide fully-funded training in collaboration with
                organizations that share the same goals so as to ensure
                upskilling of youths in Nigeria.
              </p>
            </div>
          </div>
        </div>
        {/* 
        <div className="col-lg-">
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
        </div> */}
      </div>
    </div>
  );
};
// let Homepagemain = () => {
//   return (
//     <div className="container-fluid p-5 mainBg">
//       {" "}
//       <h3 className="text-center pb-4">Why Choose Us</h3>
//       <div className="card-group justify-content-around">
//         <div className="col-lg-4 col-md-4 col-sm-12 pb-5">
//           <img src={whychooseus} className="card-img-top" alt="..." />
//         </div>
//         <div className="col-lg-3 col-md-3 col-sm-12 d-sm-flex d-md-block mt-lg-5">
//           <div className="row">
//             <div className="">
//               <i className="bi bi-book iconCol"></i>
//               <h3>Self-Paced Learning</h3>

//               <p>
//                 We are empathic on serving you with the best based on your
//                 convenience.
//               </p>
//             </div>
//           </div>
//           <div className="row">
//             <div className="">
//               <i className="bi bi-credit-card-2-front iconCol"></i>

//               <h3>Flexibility-support</h3>
//               <p>Classes are stress-free with our flexible payment system.</p>
//             </div>
//           </div>
//         </div>

//         <div className="col-lg-3 col-md-3 col-sm-12 d-sm-flex d-md-block my-lg-auto">
//           <div className="row">
//             <div>
//               {" "}
//               <i className="bi bi-tv iconCol"></i>
//               <h3>Instructor-Led Learning</h3>
//               <p>
//                 Our instructors are top- notch in the various courses of
//                 interest Be assured of getting the best.
//               </p>
//             </div>
//           </div>
//           <div className="row">
//             <div className="">
//               <i className="bi bi-pip iconCol"></i>
//               <h3>Scholarship-Support</h3>
//               <p>
//                 We provide fully-funded training in collaboration with
//                 organizations that share the same goals so as to ensure
//                 upskilling of youths in Nigeria.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

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
                key={category.id}
              >
                <CourseCategoryCards {...category}></CourseCategoryCards>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
// let CourseCategory = () => {
// 	const [current, setCurrent] = useState(0);
// 	const slidelength = categories.coursecategories.length;
// 	// console.log(slidelength);
// 	const nextSlide = () => {
// 		setCurrent(current === slidelength - 1 ? 0 : current + 1);
// 	};
// 	const prevSlide = () => {
// 		setCurrent(current === 0 ? slidelength - 1 : current - 1);
// 	};

// 	// console.log(current);
// 	if (
// 		!Array.isArray(categories.coursecategories) ||
// 		categories.coursecategories.length <= 3
// 	) {
// 		return null;
// 	}
// 	return (
// 		<div className="categoryBg py-4">
// 			<div className="mx-md-5 px-md-3" id="categories">
// 				<h3 className="text-center pt-5">Our Courses</h3>
// 				<div className="row g-0 justify-content-center">
// 					{categories.coursecategories.map((category) => {
// 						return (
// 							<div
// 								className={`${
// 									category.id === current ? `slide active` : `slide`
// 								}col-lg-4 col-md-6 col-sm-6 col-xs-12
//                 `}
// 								key={category.id}>
// 								{category.id === current && (
// 									<CourseCategoryCards {...category}></CourseCategoryCards>
// 								)}
// 							</div>
// 						);
// 					})}
// 				</div>
// 				<div className="slide-icon d-flex justify-content-center">
// 					<i className="bi-chevron-left left ps-3" onClick={prevSlide}></i>
// 					<i className="bi-chevron-right right ps-3" onClick={nextSlide}></i>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

let Homepagetest = () => {
  return (
    <div
      className="text-center py-5
     bgSoft"
    >
      <div className="row g-0 justify-content-center">
        <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12">
          <div className="card-body herotextWhite ">
            <p className="card-title">
              "My entire team was good to go at the end of the training! The
              soft skills available on innkeeper platform was used to train my
              team. This was needful because my team relates with people often.
              I witnessed some part of the role plays and it was impactful.
              Thanks to innkeeper.work”
            </p>

            <img
              src={aiki}
              className="img-fluid rounded-start mt-4"
              alt="..."
            />

            <p className="card-title mt-3">Hafsatu Shinkafi</p>
            <p className="card-text">CEO, AIKI Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// style={{ width: '25%' }}
// let Testimonial = () => {
//   return (
//     <div className="row g-0 d-flex justify-content-around">
//       <div className="col-lg-3 col-md-12 my-auto py-md-5 py-sm-5">
//         <h3 className="testimonial ms-5">
//           "What Our
//           <br /> Students Are Saying
//         </h3>
//       </div>
//       <div className="col-lg-3 col-md-4 p-lg-5 ps-4 pb-4">
//         <img src={lady} className="card-img-top" alt="..." />
//       </div>
//       <div className="col-lg-5 col-md-6 testimonials card my-auto">
//         <div className="card-body">
//           <p className="card-text testimonialtext">
//             It was a wonderful training session and I will encourage others
//             especially youths to take advantage of it. Kudos to LSETF, USADF and
//             8thGear.
//           </p>
//           <p className="card-title testimonialname">
//             Bolarinwa Olayiwola Quadri
//           </p>
//           <p className="card-title testimonialname">Data Analyst Trainee</p>
//         </div>
//       </div>
//     </div>
//   );
// };
let Testimonial = () => {
  return (
    <div className="row g-0 justify-content-center">
      <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12 col-xs-12 p-5 text-center testBg">
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
    </div>
  );
};

let Faq = () => {
  return (
    <div className="py-5 faqBg">
      <h3 className="text-center">Frequently Asked Questions</h3>
      <div
        className="container accordion accordion-flush"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <p className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What are the available payment options?
            </button>
          </p>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              We have various payment options available below:
              <ul className="list-content">
                <li className="list-item pb-2">
                  Pay now: You can pay upfront. We also have an Installment
                  payment plan that helps you to pay with ease.
                </li>
                <li className="list-item pb-2">
                  Student loan: You can access the student loan on the sterling
                  Edu banc platform{" "}
                  <Link to="studentloan" className="text-decoration-none">
                    here.
                  </Link>
                </li>
                <li className="list-item pb-2">
                  Pay as you earn: You are expected to Pay 20% upfront and Pay
                  the rest as you earn.
                </li>
              </ul>
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
              aria-controls="flush-collapseTwo"
            >
              What is the mode of learning?
            </button>
          </p>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              We adopt both blends of virtual and in-class training that is
              instructor-led and encourages self-paced learning.
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
              aria-controls="flush-collapseThree"
            >
              Can I get a professional certification for these courses?
            </button>
          </p>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Yes, you can get a professional for our courses but the payment is
              done independently of the training fee.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <p className="accordion-header" id="flush-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              How do I be a part of Innkeeper Fellow?
            </button>
          </p>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              The Innkeeper fellow is a thriving community of individuals who
              have gone through the innkeeper training academy. To be a part of
              our Innkeeper fellows, you must have completed any of our training
              programs.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <p className="accordion-header" id="flush-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              What is the average duration of training at Innkeeper?
            </button>
          </p>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              The average training ranges from between 4weeks to 10weeks
              depending on the course being enrolled for. Kindly view the
              training Calander{" "}
              <Link to="https://docs.google.com/spreadsheets/d/1nv3J8chHfVVGy0_jKx6QgA5vPwv6YHhM7GmaqTSIXgE/edit?usp=sharing">
                here
              </Link>{" "}
              for more details.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <p className="accordion-header" id="flush-headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              I have more questions, who can I talk to? 
            </button>
          </p>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingSix"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Please fill out the contact us form or send us a mail to{" "}
              <a
                href="mailto:info@innkeeper.work"
                className="text-decoration-none"
              >
                info@innkeeper.work
              </a>
              &nbsp;and we will get back to you as soon as possible.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

let Newsletter = () => {
  return (
    <div className="text-center py-5 newsBg">
      <div className="card-body">
        <h3 className="card-title">Our News Channel</h3>
        <p className="card-text">
          Welcome to our news channel, subscribe to receive daily updates.
        </p>
        <input
          type="email"
          className="form-control w-25 mx-auto"
          id="exampleFormControlInput1"
          placeholder="Email"
        ></input>
        <div className="mt-3">
          <SubscribeButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
