import React from "react";
import netacad from "../images/netacad.png";
import vmware from "../images/vmware.png";
import eightgear from "../images/eightgear.png";
import microsoft from "../images/microsoft.png";

export let OurPartners = () => {
	return (
		<div className="container partnersBg">
			<div className="row p-5 d-flex justify-content-center">
				{/* <div className="col-lg-12 col-md-12 text-center position-relative"> */}
				<img
					src={netacad}
					alt=""
					className="w-25 h-25"
					// style={{ width: "25%", height: "30%" }}
				/>
				{/* </div> */}
				{/* <div> */}
				<img
					src={vmware}
					alt=""
					className="w-25 h-25"
					// style={{ width: "25%", height: "30%" }}
				/>
				{/* </div> */}
				{/* <div> */}
				<img
					src={eightgear}
					alt=""
					className="w-25"
					// style={{ width: "25%", height: "30%" }}
				/>
				{/* </div> */}
				{/* <div> */}
				<img
					src={microsoft}
					alt=""
					className="w-25 h-25"
					// style={{ width: "25%", height: "30%" }}
				/>
				{/* </div> */}
			</div>
		</div>
	);
};
