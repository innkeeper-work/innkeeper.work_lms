import emailjs from "emailjs-com";
import { SendButton } from "../components/Buttons";
// import { useState, useRef } from "react";
// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";
// function ContactForm() {
// 	const [state, handleSubmit] = useForm("myyodwgk");
// 	if (state.succeeded) {
// 		return <p>Thanks for contacting us</p>;
// 	}
// 	return (
// 		<form onSubmit={handleSubmit}>
// 			{/* <label htmlFor="fullname">Fullname</label>
// 			<input id="fullname" type="text" name="fullname" /> */}
// 			<label htmlFor="email">Email Address</label>
// 			<input id="email" type="email" name="email" />
// 			<ValidationError prefix="Email" field="email" errors={state.errors} />
// 			<textarea id="message" name="message" />
// 			<ValidationError prefix="Message" field="message" errors={state.errors} />
// 			<button type="submit" disabled={state.submitting}>
// 				Submit
// 			</button>
// 		</form>
// 	);
// }
// export default ContactForm;

import React from "react";
function ContactForm() {
	// const form = useRef();
	const sendMessage = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_dll3w3m",
				"template_tyu5sq8",
				e.target,
				"cwTEWIt7UFDMpdP1O"
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));

		// e.target.reset();
	};

	return (
		<form onSubmit={sendMessage}>
			<div className="pb-3">
				<label>Your Fullname: </label>
				<input type="text" name="fullname" className="form-control" />
			</div>

			<div className="pb-3">
				<label>Your Email: </label>
				<input type="email" name="email" className="form-control" />
			</div>

			<div>
				<label>Your Message: </label>
				<textarea name="message" rows="4" className="form-control"></textarea>
			</div>

			<div className="pt-3 d-flex justify-content-center">
				<SendButton />
			</div>
		</form>
	);
}
export default ContactForm;
