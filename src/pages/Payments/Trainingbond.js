import React from "react";
import { TrainingBondHero } from "../../components/Hero";
import trainingbond from "../../images/trainingbond.png";
import { Submit } from "../../components/Buttons";
import { CreditCardIcon } from "../../components/Icons";
import { Link } from "react-router-dom";
import { OurPartners } from "../../components/OurPartners";
import BondRequestForm from "../../components/BondRequestForm";

let Trainingbondpage = () => {
	return (
		<>
			<TrainingBondHero />
			{/* <CourseinfoHero coursename="Apply for training via training bond" /> */}
			<OurPartners />
			<Trainingbond />
			{/* <Trainingbonddetails /> */}
		</>
	);
};

let Trainingbond = () => {
	return (
		<div>
			<div className="container-fluid py-4">
				<div className="row justify-content-center id=loanform">
					<div className="col-lg-4 col-md-5 mt-lg-5 mt-md-5">
						<p className="card-text">
							Many organizations are in dire need of talents but there’s a gap
							in harnessing the available talents as they even seem not
							employable.{" "}
						</p>
						<p className="card-text">
							This is what innkeeper.work has emphatically come to bridge. We’ve
							made our payment flexible to accommodate your excuse.
						</p>
						<p className="card-text">
							{" "}
							Kindly fill the form below to receive your request for the bond.
						</p>
					</div>
					<div className="col-lg-6 col-md-7 my-auto mt-lg-5 mt-md-5 mainBg">
						<div className="card-body">
							<BondRequestForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// let Trainingbonddetails = () => {
//   return (
//     <div className="row g-0 mainBg px-5">
//       <div className="col-lg-6 col-md-6 col-sm-12">
//         <div className="">
//           <div className="card-body" id="loanform">
//             <ContactForm />
//           </div>
//         </div>
//       </div>
//       <div className="col-lg-6 col-md-6 col-sm-12">
//         <div className="">
//           <div className="card-body">
//             <h5 className="card-title">Special title treatment</h5>
//             <p className="card-text">
//               With supporting text below as a natural lead-in to additional
//               content.
//             </p>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 value=""
//                 id="flexCheckDefault"
//               />
//               <label className="form-check-label" for="flexCheckDefault">
//                 I agree to the terms and conditions
//               </label>
//             </div>
//             <div className="d-flex justify-content-end my-3 me-5">
//               <Submit />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Trainingbondpage;
