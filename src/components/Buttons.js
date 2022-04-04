import React from "react";
import { Link } from "react-router-dom";

export const SignUpButton = () => {
  return (
    <a href="https://soft.innkeeper.work/login/index.php" rel="noreferrer">
      <button type="button" className="btn signupbtnapply">
        Sign Up
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
    <a href="http://" target="_blank" rel="noreferrer">
      <button type="button" className="btn signupbtnapply">
        Apply Now
      </button>
    </a>
  );
};
export const SubscribeButton = () => {
  return (
    <button type="button" className="btn callToAction mt-3">
      Subscribe
    </button>
  );
};
export const SendButton = () => {
  return (
    <button type="button" className="btn signinbtnapply px-5">
      Send
    </button>
  );
};
export const Home = () => {
  return (
    <Link to="/">
      <button type="button" className="btn callToAction px-4 me-2">
        <strong>Home</strong>
      </button>
    </Link>
  );
};

export const ContactUs = () => {
  return (
    <Link to="contact">
      <button type="button" className="btn callToAction px-2 ms-2">
        <strong>Contact&nbsp;Us</strong>
      </button>
    </Link>
  );
};
export const Submit = () => {
  return (
    <Link to="">
      <button type="button" className="btn callToAction px-2 ms-2">
        <strong>Submit</strong>
      </button>
    </Link>
  );
};
