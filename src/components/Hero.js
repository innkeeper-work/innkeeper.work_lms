import React from "react";

import heroimage from "../images/heroimage.png";
import Navbar from "./Navbar";
import { GetStartedButton } from "../components/Buttons";

export let HomepageHero = () => {
  return (
    <div className="px-4 py-2 heroBg">
      <Navbar />
      <div className="row flex-sm-row-reverse align-items-center">
        <div className="col-lg-5 col-md-5">
          <img
            src={heroimage}
            className="d-block mx-lg-auto img-fluid"
            alt=""
            loading=""
          />
        </div>
        <div className="col-lg-5 col-md-6">
          <h3 className="herotextWhite">
            Mentored Upskilling For Improved <br />
            <span className="herotextColored">Learning Opportunities</span>
          </h3>
          <div className="mt-4">
            <GetStartedButton />
          </div>
        </div>
      </div>
    </div>
  );
};

// export let HomepageHero = () => {
//   return (
//     <div className="px-4 py-2 heroBg">
//       <Navbar />
//       <div className="row flex-sm-row-reverse align-items-center">
//         <div className="col-lg-5 col-md-2 col-sm-6">
//           <img
//             src={heroimage}
//             className="d-block mx-lg-auto img-fluid"
//             alt=""
//             loading=""
//           />
//         </div>
//         <div className="col-lg-5 col-md-10 col-sm-6">
//           <h2 className="herotextWhite">
//             Mentored Upskilling For Improved <br />
//             <span className="herotextColored">Learning Opportunities</span>
//           </h2>
//           <div className="py-4">
//             <GetStartedButton />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const CoursepageHero = () => {
  return (
    <div className="px-4 py-2 heroBg">
      <Navbar />
      <div className="row align-items-center g-5 p-md-4 m-5">
        <div className="col-lg-6 col-sm-12">
          <h3 className="herotextWhite">
            Mentored Upskilling For Improved <br />
            <span className="herotextColored">Learning Opportunities</span>
          </h3>
          <GetStartedButton />
        </div>
      </div>
    </div>
  );
};
