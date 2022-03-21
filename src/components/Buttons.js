import React from "react";
import { Link } from "react-router-dom";


export const SignInButton = () => {

  return (
    <a href="http://app.innkeeper.work" rel="noreferrer">
      <button type="button" className="btn signinbtnapply">
        Sign In
      </button>
    </a>
  );
};


export const GetStartedButton = () => {
	return (
		<a href="#categories" rel="noreferrer">
			<button type="button" className="btn callToAction">
				Get Started
			</button>
		</a>
	);

};
export const LearnMoreButton = () => {
  return (
    <button type="button" className="btn callToAction">
      Learn More
    </button>
  );
};
export const BeginCoursesButton = () => {
  return (
    <button type="button" className="btn callToAction">
      Begin Courses
    </button>
  );
};
export const ForwardButton = () => {
  return (
    <button type="button" className="btn callToAction">
      Forward
    </button>
  );
};
export const ApplyNowButton = () => {
  return (
    <button type="button" className="btn signinbtnapply">
      Apply Now
    </button>
  );
};

export const SubscribeButton = () => {
  return (
    <button type="button" className="btn callToAction">
      Subscribe
    </button>
  );
};
export const SendButton = () => {
  return (
    <button type="button" className="btn signinbtnapply">
      Send
    </button>
  );
};
export const Home = () => {

  return (
    <Link to="/">
    <button type="button" className="btn callToAction px-5 me-2">
      <strong>Home</strong>
    </button>
    </Link>
  );
};

export const ContactUs = () => {
  return (
    <Link to="contact">
    <button type="button" className="btn callToAction px-4 ms-2">
      <strong>Contact Us</strong>
    </button>
    </Link>
  );


