// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from "react-bootstrap";
import digitalmarketing from "../assets/images/innkeeperaugustcohort/digitalmarketing.png";
import frontend from "../assets/images/innkeeperaugustcohort/frontend.png";
import customerexperience from "../assets/images/innkeeperaugustcohort/customerexperience.png";
import ifunanya from "../assets/images/innkeeperaugustcohort/ifunanya.jpg";
import ifunanyaa from "../assets/images/innkeeperaugustcohort/ifunanyaa.png";
import kolade from "../assets/images/innkeeperaugustcohort/kolade.jpg";
import ruthijere from "../assets/images/innkeeperaugustcohort/ruthijere.JPG";
import omotola from "../assets/images/innkeeperaugustcohort/omotola.png";
import tomisin from "../assets/images/innkeeperaugustcohort/tomisin.png";

import { Icon } from "@iconify/react";

export const TestimonialCarousel = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide pb-3"
        data-bs-ride="carousel"
      >
        <h4 className="text-center pt-5">WHAT OUR STUDENTS ARE SAYING</h4>
        <div className="carousel-inner">
          <div className="carousel-item active " data-bs-interval="6000">
            <div
              className="row mx-auto mb-5"
              style={{
                width: "27rem",
              }}
            >
              {" "}
              <div
                className="pt-4 px-4 mt-5 "
                style={{
                  backgroundColor: "#ffffff",

                  boxShadow: "4px 4px 15px 2px rgba(0, 0, 0, 0.25)",
                  borderRadius: "0.3rem",
                }}
              >
                <div className="card-body">
                  <p className="card-text">
                    I would recommend learning at Innkeeper to anyone who
                    desires to smash their tech transitioning goals early.
                    Innkeeper presents opportunities in three months that a year
                    of learning elsewhere wouldn't give you. They gave me the
                    best transition and mentorship experience.
                  </p>
                </div>
                <div className="mb-3">
                  <div className="instructor_card d-flex align-items-md-center mt-3">
                    <div>
                      <img
                        src={ruthijere}
                        alt=""
                        width="100px"
                        height="100px"
                        className="rounded-circle ms-2 mb-3 border border-light border-5"
                      />
                    </div>

                    <div className="ms-3 mt-3">
                      <p className="course-instructor">Ruth Ijere</p>
                      <h6>
                        <b>Co-founder, Mind Afrik</b>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <img src="..." className="d-block w-100" alt="..." /> */}
          </div>
          <div className="carousel-item " data-bs-interval="6000">
            <div
              className="row mx-auto mb-5"
              style={{
                width: "27rem",
              }}
            >
              <div
                className="pt-4 px-4 mt-5  "
                style={{
                  backgroundColor: "#ffffff",

                  boxShadow: "4px 4px 15px 2px rgba(0, 0, 0, 0.25)",
                  borderRadius: "0.3rem",
                }}
              >
                <div className="card-body">
                  <p className="card-text">
                    I endorse innkeeper for anyone looking to kickstart a tech
                    career because they address most of the greatest challenges
                    of doing so. From giving mentored training, to securing
                    internship and job placement, to building real-life projects
                    or new businesses. They are simply the best. They also have
                    the best instructors.
                  </p>
                </div>
                <div className="mb-3">
                  <div className="instructor_card d-flex align-items-md-center mt-3">
                    <div>
                      <img
                        src={ifunanya}
                        alt=""
                        width="100px"
                        height="100px"
                        className="rounded-circle ms-2 mb-3 border border-light border-5 "
                      />
                    </div>

                    <div className="ms-3  mt-3">
                      <p className="course-instructor">Ifunanya Omanukwue</p>
                      <h6>
                        <b>Data Analyst, 8thGear Hub</b>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <img src="..." className="d-block w-100" alt="..." /> */}
          </div>
          <div className="carousel-item " data-bs-interval="6000">
            <div
              className="row mx-auto mb-5"
              style={{
                width: "27rem",
              }}
            >
              <div
                className="pt-4 px-4 mt-5  "
                style={{
                  backgroundColor: "#ffffff",

                  boxShadow: "4px 4px 15px 2px rgba(0, 0, 0, 0.25)",
                  borderRadius: "0.3rem",
                }}
              >
                <div className="card-body">
                  <p className="card-text">
                    Innkeeper Academy deploys a practical and project -based
                    approach blended with soft skills which makes me understand
                    there is more to the technical skill as a content creator. I
                    will advise anyone interested in tech and creative course to
                    go to innkeeper for the best learning experience.
                  </p>
                </div>
                <div className="mb-3">
                  <div className="instructor_card d-flex align-items-md-center mt-3">
                    <div>
                      <img
                        src={kolade}
                        alt=""
                        width="100px"
                        height="100px"
                        className="rounded-circle ms-2 mb-3 border border-light border-5"
                      />
                    </div>

                    <div className="ms-2  mt-3">
                      <p className="course-instructor">Kolade Ogboneyenetan</p>
                      <h6>
                        <b>Content researcher, Dacurateinsight</b>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <img src="..." className="d-block w-100" alt="..." /> */}
          </div>
          <div className="carousel-item " data-bs-interval="6000">
            <div
              className="row mx-auto mb-5"
              style={{
                width: "27rem",
              }}
            >
              <div
                className="pt-4 px-4 mt-5  "
                style={{
                  backgroundColor: "#ffffff",

                  boxShadow: "4px 4px 15px 2px rgba(0, 0, 0, 0.25)",
                  borderRadius: "0.3rem",
                }}
              >
                <div className="card-body">
                  <p className="card-text">
                    It was an amazing period of much learning with expert
                    facilitators who have done a wonderful job helping me become
                    a confident digital marketer. Besides the interesting
                    classes I had the chance to meet great people, I recommend
                    innkeeper academy to everyone planning to transition
                    smoothly into tech.
                  </p>
                </div>
                <div className="mb-3">
                  <div className="instructor_card d-flex align-items-md-center mt-3">
                    <div>
                      <img
                        src={omotola}
                        alt=""
                        width="100px"
                        height="100px"
                        className="rounded-circle ms-2 mb-3 border border-light border-5"
                      />
                    </div>

                    <div className="ms-2  mt-3">
                      <p className="course-instructor">Omotola Adaramaja </p>
                      <h6>
                        <b>COO, Haven Edu-Services</b>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <img src="..." className="d-block w-100" alt="..." /> */}
          </div>
          <div className="carousel-item " data-bs-interval="6000">
            <div
              className="row mx-auto mb-5"
              style={{
                width: "27rem",
              }}
            >
              <div
                className="pt-4 px-4 mt-5  "
                style={{
                  backgroundColor: "#ffffff",

                  boxShadow: "4px 4px 15px 2px rgba(0, 0, 0, 0.25)",
                  borderRadius: "0.3rem",
                }}
              >
                <div className="card-body">
                  <p className="card-text">
                    Learning at Innkeeper was a wonderful and insightful
                    experience. The facilators don't just teach,they hold your
                    hands and lead and mentor you into the digital world. It
                    wasn't just digital skills that were taught, soft skills and
                    entrepreneurial skills were also taught. I would strongly
                    recommend learning at Innkeeper for anyone planning to go
                    into tech.
                  </p>
                </div>
                <div className="mb-3">
                  <div className="instructor_card d-flex align-items-md-center mt-3">
                    <div>
                      <img
                        src={tomisin}
                        alt=""
                        width="100px"
                        height="100px"
                        className="rounded-circle ms-2 mb-3 border border-light border-5"
                      />
                    </div>

                    <div className="ms-2  mt-3">
                      <p className="course-instructor">
                        Oluwatola Oluwatomisin{" "}
                      </p>
                      <h6>
                        <b>EA to the CEO, Wouessi</b>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <img src="..." className="d-block w-100" alt="..." /> */}
          </div>
        </div>

        <div className="mx-auto">
          <button
            className="carousel-control-prev d-none d-sm-none d-md-block d-lg-block"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              style={{
                backgroundColor: "#F27216",
                borderRadius: "0.5rem",
                boxShadow: "4px 4px 15px 2px rgba(0, 0, 0, 0.25)",
              }}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next d-none d-sm-none d-md-block d-lg-block"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon "
              style={{
                backgroundColor: "#F27216",
                borderRadius: "0.5rem",
                boxShadow: "4px 4px 15px 2px rgba(0, 0, 0, 0.25)",
              }}
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon "
            style={{ backgroundColor: "#000" }}
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
        <p className="text-center">
          Visit our{" "}
          <a
            href="https://www.youtube.com/watch?v=rkP42Wz7hMI"
            target="_blank"
            className="textBold"
            style={{ color: "#F27216" }}
          >
            {" "}
            youtube channel{" "}
          </a>{" "}
          for more.
        </p>
      </div>
    </>
  );
};
// export const TestimonialCarousel = () => {
//   return (
//     <>
//       <div
//         id="carouselExampleFade"
//         className="carousel slide carousel-fade "
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-inner">
//           <div
//             className="carousel-item active d-flex justify-content-center"
//             style={{ width: "33rem" }}
//           >
//             <div
//               className="pt-4 px-4 mt-5 "
//               style={{
//                 backgroundColor: "#ffffff",

//                 boxShadow: "4px 4px 15px 2px rgba(0, 0, 0, 0.25)",
//                 borderRadius: "0.3rem",
//               }}
//             >
//               <div className="card-body">
//                 <p className="card-text">
//                   I would recommend learning at Innkeeper to anyone who desires
//                   to smash their tech transitioning goals early. Innkeeper
//                   presents opportunities in three months that a year of learning
//                   elsewhere wouldn't give you. They gave me the best transition
//                   and mentorship experience.
//                 </p>
//               </div>
//               <div className="mb-3">
//                 <div className="instructor_card d-flex align-items-md-center mt-3">
//                   <div>
//                     <img
//                       src={ruthijere}
//                       alt=""
//                       width="100px"
//                       height="100px"
//                       className="rounded-circle ms-2 mb-3 border border-light border-5"
//                     />
//                   </div>

//                   <div className="ms-3 mt-3">
//                     <p className="course-instructor">Ruth Ijere</p>
//                     <h6>
//                       <b>Co-founder, Mind Afrik</b>
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item" style={{ width: "33rem" }}>
//             <div
//               className="pt-4 px-4 mt-5  "
//               style={{
//                 backgroundColor: "#ffffff",

//                 boxShadow: "4px 4px 15px 2px rgba(0, 0, 0, 0.25)",
//                 borderRadius: "0.3rem",
//               }}
//             >
//               <div className="card-body">
//                 <p className="card-text">
//                   I endorse innkeeper for anyone looking to kickstart a tech
//                   career because they address most of the greatest challenges of
//                   doing so. From giving mentored training, to securing
//                   internship and job placement, to building real-life projects
//                   or new businesses. They are simply the best. They also have
//                   the best instructors.
//                 </p>
//               </div>
//               <div className="mb-3">
//                 <div className="instructor_card d-flex align-items-md-center mt-3">
//                   <div>
//                     <img
//                       src={ifunanya}
//                       alt=""
//                       width="100px"
//                       height="100px"
//                       className="rounded-circle ms-2 mb-3 border border-light border-5 "
//                     />
//                   </div>

//                   <div className="ms-3  mt-3">
//                     <p className="course-instructor">Ifunanya Omanukwele</p>
//                     <h6>
//                       <b>Data Analyst, 8thGear Hub</b>
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <img src={{ ifunanya }} className="d-block w-100" alt="..." /> */}
//           </div>
//           <div className="carousel-item" style={{ width: "33rem" }}>
//             <div
//               className="pt-4 px-4 mt-5  "
//               style={{
//                 backgroundColor: "#ffffff",

//                 boxShadow: "4px 4px 15px 2px rgba(0, 0, 0, 0.25)",
//                 borderRadius: "0.3rem",
//               }}
//             >
//               <div className="card-body">
//                 <p className="card-text">
//                   Innkeeper Academy deploys a practical and project -based
//                   approach blended with soft skills which makes me understand
//                   there is more to the technical skill as a content creator. I
//                   will advise anyone interested in tech and creative course to
//                   go to innkeeper for the best learning experience.
//                 </p>
//               </div>
//               <div className="mb-3">
//                 <div className="instructor_card d-flex align-items-md-center mt-3">
//                   <div>
//                     <img
//                       src={kolade}
//                       alt=""
//                       width="100px"
//                       height="100px"
//                       className="rounded-circle ms-2 mb-3 border border-light border-5"
//                     />
//                   </div>

//                   <div className="ms-2  mt-3">
//                     <p className="course-instructor">Kolade Ogboneyenetan</p>
//                     <h6>
//                       <b>Content researcher, Dacurateinsight</b>
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* <img src={{ kolade }} className="d-block w-100" alt="..." /> */}
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="prev"
//           // style={{ color: "#F27216"}}
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleFade"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </>
//   );
// };

const CarouselContainer = () => {
  return (
    <div className="container-fluid pt-5">
      <div
        className="row justify-content-evenly pb-5 px-3 px-lg-5"
        style={{ backgroundColor: "#E6F4F1" }}
      >
        <h4 className="text-center mt-5">WHAT OUR STUDENTS ARE SAYING</h4>

        <div className="col-lg-6 col-md-6 col-sm-10 px-2 d-flex">
          <div
            className="pt-4 px-4 mt-5  "
            style={{
              backgroundColor: "#ffffff",

              boxShadow: "4px 4px 15px 2px rgba(0, 0, 0, 0.25)",
              borderRadius: "0.3rem",
            }}
          >
            <div className="card-body">
              <p className="card-text">
                I would recommend learning at Innkeeper to anyone who desires to
                smash their tech transitioning goals early. Innkeeper presents
                opportunities in three months that a year of learning elsewhere
                wouldn't give you. They gave me the best transition and
                mentorship experience.
              </p>
            </div>
            <div className="mb-3">
              <div className="instructor_card d-flex align-items-md-center mt-3">
                <div>
                  <img
                    src={ruthijere}
                    alt=""
                    width="100px"
                    height="100px"
                    className="rounded-circle ms-2 mb-3 border border-light border-5"
                  />
                </div>

                <div className="ms-3 mt-3">
                  <p className="course-instructor">Ruth Ijere</p>
                  <h6>
                    <b>Co-founder, Mind Afrik</b>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 px-2 d-flex">
          {" "}
          <div
            className="pt-4 px-4 mt-5  "
            style={{
              backgroundColor: "#ffffff",

              boxShadow: "4px 4px 15px 2px rgba(0, 0, 0, 0.25)",
              borderRadius: "0.3rem",
            }}
          >
            <div className="card-body">
              <p className="card-text">
                I endorse innkeeper for anyone looking to kickstart a tech
                career because they address most of the greatest challenges of
                doing so. From giving mentored training, to securing internship
                and job placement, to building real-life projects or new
                businesses. They are simply the best. They also have the best
                instructors.
              </p>
            </div>
            <div className="mb-3">
              <div className="instructor_card d-flex align-items-md-center mt-3">
                <div>
                  <img
                    src={ifunanya}
                    alt=""
                    width="100px"
                    height="100px"
                    className="rounded-circle ms-2 mb-3 border border-light border-5 "
                  />
                </div>

                <div className="ms-3  mt-3">
                  <p className="course-instructor">Ifunanya Omanukwele</p>
                  <h6>
                    <b>Data Analyst, 8thGear Hub</b>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="card mb-5 p-3"  style={{borderStyle: "solid", borderWidth: "3px", borderColor: "#00114C", borderRadius: "10px"}}>
              <div>
                {" "}
                <img src={frontend} className="card-img-top"  alt="..." />
              </div>

              <div className="card-body">
                <h5 className="card-title" style={{color : "#00114C"}}><b>Frontend Development</b></h5>
<ul class="">
                <li class="bullet">HTML and CSS</li>
                <li class="bullet">Bootstrap </li>
                <li class="bullet">Intro to UI/UX</li>
                <li class="bullet">JavaScript</li>
                <li class="bullet">Git/GitHub</li>
                <li class="bullet">React</li>
                <li class="bullet">Intro to Product Management</li>
                <li class="bullet">With loads of benefits</li>
                </ul>

                <h4 className="text-center "  style={{color : "#00114C"}}>Payment Plan</h4>
                <ul class="bullet">
                <li class="bullet">Full payment:</li>
                <li class="bullet">Spread Payment: </li>
                </ul>
              </div>
            </div> */}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-10 px-2 d-flex">
          <div
            className="pt-4 px-4 mt-5  "
            style={{
              backgroundColor: "#ffffff",

              boxShadow: "4px 4px 15px 2px rgba(0, 0, 0, 0.25)",
              borderRadius: "0.3rem",
            }}
          >
            <div className="card-body">
              <p className="card-text">
                Innkeeper Academy deploys a practical and project -based
                approach blended with soft skills which makes me understand
                there is more to the technical skill as a content creator. I
                will advise anyone interested in tech and creative course to go
                to innkeeper for the best learning experience.
              </p>
            </div>
            <div className="mb-3">
              <div className="instructor_card d-flex align-items-md-center mt-3">
                <div>
                  <img
                    src={kolade}
                    alt=""
                    width="100px"
                    height="100px"
                    className="rounded-circle ms-2 mb-3 border border-light border-5"
                  />
                </div>

                <div className="ms-2  mt-3">
                  <p className="course-instructor">Kolade Ogboneyenetan</p>
                  <h6>
                    <b>Content researcher, Dacurateinsight</b>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="text-center"><SalesPageSignInButton /></div> */}
      </div>
    </div>
  );
};

// const CarouselContainer = () => {
//     const slideLeft = () => {
//         const slider = document.getElementById('slider');
//         slider.scrollLeft = slider.scrollLeft - 500;
//     };
//     const slideRight = () => {
//         const slider = document.getElementById('slider');
//         slider.scrollLeft = slider.scrollLeft + 500;
//     };
//     return (
//         <>
//         <Icon
//         icon='eva:arrow-ios-backfill'
//         color='#ffffff'
//         onClick={slideLeft}
//         className='arrow-right'
//         width='30'

//         />
//        <div id="slider" className=" scrolling--wrapper row d-flex align-center justify-content-center ">
//         <div className='col desktop--scroll'>
//             <div className='testimonial-card d-flex'>
//             <img src='../../images/frontend/frontend.png' className='w-25' alt='test images'/>
//             <img src='../../images/frontend/frontend.png' className='w-25' alt='test images'/>
//             <img src='../../images/frontend/frontend.png' className='w-25' alt='test images'/>
//             <img src='../../images/frontend/frontend.png' className='w-25' alt='test images'/>
//             <img src='../../images/frontend/frontend.png' className='w-25' alt='test images'/>
//             <img src='../../images/frontend/frontend.png' className='w-25' alt='test images'/>
//             <img src='../../images/frontend/frontend.png' className='w-25' alt='test images'/>
//             <img src='../../images/frontend/frontend.png' className='w-25' alt='test images'/>
//             <img src='../../images/frontend/frontend.png' className='w-25' alt='test images'/>

//             </div>
//         </div>
//        </div>
//        <Icon
//         icon='eva:arrow-ios-forward-fill'
//         color='#ffffff'
//         onClick={slideRight}
//         className='arrow-left'
//         width='30'

//         />
//        </>
//     )
// }
// const CarouselContainer = () => {
//     return (
//         <Carousel className="container d-flex justify-content-center">
//         <Carousel.Item interval={2000} >
//           <img
//             className="d-block w-50"
//             src={digitalmarketing}
//             alt="First slide"
//           />
//           {/* <Carousel.Caption>
//             <h3>First slide label</h3>
//             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//           </Carousel.Caption> */}
//         </Carousel.Item>
//         <Carousel.Item interval={2000}>
//           <img
//             className="d-block w-50"
//             src={frontend}
//             alt="Second slide"
//           />
//           {/* <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption> */}
//         </Carousel.Item>
//         <Carousel.Item interval={2000}>
//           <img
//             className="d-block w-50"
//             src={customerexperience}
//             alt="Third slide"
//           />
//           {/* <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption> */}
//         </Carousel.Item>
//       </Carousel>
//     )
// }

export default CarouselContainer;
