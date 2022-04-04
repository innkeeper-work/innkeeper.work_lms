import React, { useState } from "react";
import { SendButton } from "../components/Buttons";
import contact_image1 from "../images/contact_image1.png";
import contact_image2 from "../images/contact_image2.png";
import Navbar from "../components/Navbar";

const Contact = () => {
	// const [fullName, setFullName] = useState("");
	// const [email, setEmail] = useState("");
	// const [message, setMessage] = useState("");
	const [details, setDetails] = useState({
		fullName: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		// console.log(name, value);
		setDetails({ ...details, [name]: value });
	};
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	// console.log(fullName, email, message);
	// 	if (fullName && email && message) {
	// 		// console.log("submitted");
	// 		const detail = { fullName, email, message };
	// 		// console.log(detail);
	// 		setFullName("");
	// 		setEmail("");
	// 		setMessage("");
	// 	} else {
	// 		console.log("empty");
	// 	}
	// };
	const handleSubmit = (e) => {
		e.preventDefault();
		if (details.fullName && details.email && details.message) {
			setDetails("");
		}
	};

	return (
		<>
			<div className="homeheroBg mx-auto d-none d-md-block mb-5">
				<Navbar />
			</div>

			<div className="col-md-5 col-sm-12 heroBg d-block mx-lg-auto d-xs-block d-md-none col-12 mb-4">
				<Navbar />
				<img
					src={contact_image2}
					alt="Innkeeper.work contact us"
					className="d-block mx-lg-auto d-xs-block d-md-none col-12"
				/>
			</div>

			<div className="row mx-4">
				<h2 className="d-flex justify-content-center herotextColored pt-3 pb-4">
					<strong> Contact Us</strong>
				</h2>
				<div className="col-md-7 col-sm-12 g-2 mb-5 px-4">
					<li className="mb-4">
						Do you have other questions? Don't worry, there aren't any dumb
						questions. Just fill out the form below and we'll get back to you as
						soon as possible.
					</li>
					<li className="mb-4">
						Got a news tip or inside information about a topic we covered? we
						would love to hear from you. Please fill out the form below or send
						a mail to
						<a href="mailto:info@innkeeper.work">info@innkeeper.work</a>
						or you contact
						<a href="tel:+2348098468885"> +2348098468885</a>
					</li>
					{/* <form action="" className="form-control" onSubmit={handleSubmit}> */}
					<form action="" className="form-control">
						<label htmlFor="fullName">Name: </label>
						<input
							type="text"
							name="fullName"
							id="fullName"
							value={details.fullName}
							// onChange={(e) => setFullName(e.target.value)}
							onChange={handleChange}
						/>
						<label htmlFor="email">Email: </label>
						<input
							type="text"
							name="email"
							id="email"
							value={details.email}
							// onChange={(e) => setEmail(e.target.value)}
							onChange={handleChange}
						/>
						<label htmlFor="message">Message: </label>
						<input
							type="text"
							name="message"
							id="message"
							value={details.message}
							// onChange={(e) => setMessage(e.target.value)}
							onChange={handleChange}
						/>
						<button type="submit" onClick={handleSubmit}>
							Send
						</button>
					</form>
					{/* <form className="card-body form mx-4">
						<input
							type="text"
							className="form-control mb-3"
							placeholder="Your Fullname"
							aria-label="Your Fullname"
							// id="fullName"
							// name="fullName"
							// value={person.fullName}
							// onChange={handleChange}
						/>

						<input
							type="text"
							className="form-control mb-3"
							placeholder="Your email"
							aria-label="Your email"
							// id="email"
							// name="email"
							// value={person.email}
							// onChange={handleChange}
						/>

						<input
							type="text"
							className="form-control mb-3"
							placeholder="Subject"
							aria-label="Subject"
							// id="subject"
							// name="subject"
							// value={person.subject}
							// onChange={handleChange}
						/>
						<div>
							<textarea
								name="message"
								aria-label="Subject"
								className="form-control"
								id="exampleFormControlTextarea1"
								rows="3"
								placeholder="Message"
								// value={person.message}
								// onChange={handleChange}
							></textarea>
						</div>

						<div className="d-flex justify-content-center mx-5">
							<a
								href={<SendButton />}
								type="submit"
								className="btn contact-btn bg-bark"
								onClick={handleSubmit}>
								<SendButton
								// onClick={() => (
								// 	<a href="mailto:sammiebechh@gmail.com">Send</a>
								// )}
								/>
							</a>
						</div>
					</form> */}
				</div>

				<div className="col-md-5 col-sm-12">
					<img
						src={contact_image1}
						alt="Innkeeper.work contact us"
						className="d-block mx-lg-auto img-fluid d-none d-md-block"
					/>
				</div>
			</div>
		</>
	);
};

export default Contact;
