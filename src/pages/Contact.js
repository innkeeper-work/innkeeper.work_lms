import React from "react";
import contact_image from "../images/contact_image.png";

const Contact = () => {
	return (
		<div className="p-2 m-3">
			<h2 className="d-flex justify-content-center">Contact Us</h2>
			<div className="row g-5">
				<div className="col-md-7 col-sm-12">
					<input
						type="text"
						className="form-control"
						placeholder="First name"
						aria-label="First name"
					/>
				</div>
				<div className="col col-md-5 col-sm-12">
					<img src={contact_image} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Contact;
