import React, { useRef, useState } from "react";
import axios from "axios";
// import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
// import { SendButton } from "../components/Buttons";

function ContactForm() {
  const formID = "1nbz0s2E";
  const formURL = `https://submit-form.com/${formID}`;
  // const recaptchaKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  // const recaptchaRef = useRef();

  const initialFormState = {
    fullname: "",
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState();
  // const [recaptchaToken, setRecaptchaToken] = useState();

  const sendMessage = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await submitForm();

    setSubmitting(false);
  };

  const submitForm = async () => {
    // const payload = {
    // 	message: "Test form submission",
    // };
    const payload = {
      ...formState,
      // "g-recaptcha-response": recaptchaToken,
    };

    try {
      const result = await axios.post(formURL, payload);
      console.log(result);
      setSubmitMessage({
        className: "bg-success",
        text: "Thanks, someone will be in touch with you soon",
      });
      // if (formState.fullName && formState.email && formState.message) {
      setFormState(initialFormState);
      // recaptchaRef.current.reset();
      // }
    } catch (error) {
      console.log(error);
      setSubmitMessage({
        className: "bg-danger",
        text: "Sorry, there was a problem filling the form. Please try again",
      });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormState({ ...formState, [name]: value });
    // setFormState((prevState) => ({
    // 	...prevState,
    // 	[e.target.name]: e.target.value,
    // }));
  };

  // const { register, errors } = useForm();

  // const updateRecaptchaToken = (token) => {
  // 	setRecaptchaToken(token);
  // };

  return (
    <form onSubmit={sendMessage}>
      {/* <div>
				{submitMessage && (
					<div className={`m-2 text-white ${submitMessage.className}`}>
						{submitMessage.text}
					</div>
				)}
			</div> */}
      <div className="pb-3">
        <label htmlFor="fullname">Your Fullname: </label>
        <input
          type="text"
          className="form-control"
          name="fullname"
          id="fullname"
          onChange={handleChange}
          value={formState.fullname}
          // ref={register }
          // required
        />
        {/* {errors.name && errors.name.type === "required" && (
					<p className="errorMsg">Name is required</p>
				)} */}
      </div>

      <div className="pb-3">
        <label>Your Email: </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          onChange={handleChange}
          value={formState.email}
          // required
        />
      </div>

      <div className="pb-3">
        <label>Your Message: </label>
        <textarea
          name="message"
          rows="4"
          className="form-control"
          id="message"
          onChange={handleChange}
          value={formState.message}
          // required
        ></textarea>
      </div>

      {/* <div className="d-flex justify-content-center">
				<ReCAPTCHA
					ref={recaptchaRef}
					sitekey={recaptchaKey}
					onChange={updateRecaptchaToken}
				/>
			</div> */}
      <div className="pt-3 d-flex justify-content-center">
        <button
          disabled={submitting}
          type="submit"
          className="btn signupbtnapply px-5"
        >
          {submitting ? "Submitting..." : "Send"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
