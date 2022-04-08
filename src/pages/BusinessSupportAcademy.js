import React from "react";
import { CourseCards } from "../components/Card";
import { OurInstructors } from "../components/Ourinstructors";
import businessSupport from "../data/bus_support_details/business_support.json";
import { CoursepageHero } from "../components/Hero";
import { InstructorCards } from "../components/Card";
import Slider from "react-slick";

const BusinessSupportAcademy = () => {
  return (
    <div>
      <BusinessHero />
      <Business />
      <OurInstructors />
      <BusinessInstructors />
    </div>
  );
};

let BusinessHero = () => {
  return (
    <div>
      {businessSupport.businessheroinfo.map((singlebushero) => {
        return (
          <div key={singlebushero.id}>
            <CoursepageHero {...singlebushero}></CoursepageHero>
          </div>
        );
      })}
    </div>
  );
};

let Business = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-4 mx-3 my-4">
      <div className="row p-1 d-flex justify-content-center">
        {businessSupport.business.map((singlebus) => {
          return (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-xs-12 d-flex align-items-stretch py-4"
              key={singlebus.id}
            >
              <CourseCards {...singlebus}></CourseCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};

let BusinessInstructors = () => {
  return (
    <div className="webDev m-5 p-5">
      <div className="row d-flex justify-content-around">
        {businessSupport.instructors.map((singleInstr) => {
          return (
            <div
              className="col-lg-4 col-sm-4 col-md-4 d-flex align-items-stretch"
              key={singleInstr.id}
            >
              <InstructorCards {...singleInstr}></InstructorCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BusinessSupportAcademy;

// let Instructors = () => {
//   return (
//     <div className="webDev m-5 p-5">
//       <div className="row d-flex justify-content-around">
//         {techacademy.instructors.map((singleInstr) => {
//           return (
//             <div className="col-lg-4 col-sm-4 col-md-4" key={singleInstr.id}>
//               <InstructorCards {...singleInstr}></InstructorCards>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// from bus_support json file
// {
//   "id": 6,
//   "img": "../../images/courses/content dev_t.png",
//   "title": "Content Management",
//   "description": "Video editing, copywriting, still and  motion graphics are some of the topics to be covered.",
//   "Link": "/contentmgt"
// }
