import emailjs from "emailjs-com";
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
	// const [state, handleSubmit] = useForm("myyodwgk");
	// if (state.succeeded) {
	// 	return <p>Thanks for contacting us</p>;
	// }
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
	};
	return (
		<form onSubmit={sendMessage}>
			<label>Your Fullname: </label>
			<input type="text" name="fullname" className="form-control" />
			<label>Your Email: </label>
			<input type="email" name="email" className="form-control" />
			<label>Your Message: </label>
			<textarea name="message" rows="4" className="form-control"></textarea>
			<button type="submit">Send</button>
		</form>
	);
}
export default ContactForm;
