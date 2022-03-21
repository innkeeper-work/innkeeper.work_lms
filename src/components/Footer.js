import React from "react";
import innkeeperlogo from "../images/innkeeperlogo.png";
import { Link } from "react-router-dom";
import {
	FacebookIcon,
	InstagramIcon,
	LinkedInIcon,
	WhatsAppIcon,
} from "../components/Icons";

const Footer = () => {
	return (
		<>
			<footer className="text-left text-lg-start bgSoft">
				<div className="card-body herotextWhite">
					<div className="container text-left text-lg-start mt-5">
						<div className="row mt-3 ms-5">
							<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
								<img src={innkeeperlogo} alt="Innkeeper.work" />
								<h5 className="text-uppercase fw-bold mb-4">
									<span />
								</h5>
								<p>
									The 8thGear Hub, 11b Colin Onabule Crescent, Diamond Estate
									Off CMD Road (beside Secretariat/Magodo gate) Lagos Nigeria.
									+234 (0) 809-846-8885 info@innkeeper.work
								</p>
							</div>

							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-md-block ms-5">
								<h5 className="text-uppercase fw-bold mb-4">Menu</h5>
								<p>
									<Link
										to="/"
										className="text-reset"
										style={{ textDecoration: "none" }}>
										Home
									</Link>
								</p>
								<p>
									<a
										href="#!"
										className="text-reset"
										style={{ textDecoration: "none" }}>
										Events
									</a>
								</p>
								<p>
									<Link
										to="contact"
										className="text-reset"
										style={{ textDecoration: "none" }}>
										Contact
									</Link>
								</p>
								<a
									href="#faq"
									className="text-reset"
									style={{ textDecoration: "none" }}>
									FAQ
								</a>
							</div>

							<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-md-block">
								<h5 className="text-uppercase fw-bold mb-4">Courses</h5>
								<p>
									<Link
										to="businessupport"
										className="text-reset"
										style={{ textDecoration: "none" }}>
										Business Support Academy
									</Link>
								</p>
								<p>
									<Link
										to="techacademy"
										className="text-reset"
										style={{ textDecoration: "none" }}>
										Tech Academy
									</Link>
								</p>
								<p>
									<Link
										to="employability"
										className="text-reset"
										style={{ textDecoration: "none" }}>
										Employability/Soft Skills
									</Link>
								</p>
								<p>
									<Link
										to="entrepreneurship"
										className="text-reset"
										style={{ textDecoration: "none" }}>
										Entrepreneurship
									</Link>
								</p>
							</div>

							<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 sm-3">
								<div className="d-flex d-md-block ms-5 flex-wrap">
									<p>
										<a
											href="https://www.facebook.com/innkeeper.work/"
											className="btnText d-flex"
											target="_blank"
											rel="noreferrer"
											style={{ textDecoration: "none", marginRight: "50px" }}>
											<FacebookIcon />
											<p
												className="d-none d-md-block "
												style={{ textDecoration: "none", marginLeft: "5px" }}>
												Facebook
											</p>
										</a>
									</p>
									<p>
										<a
											href="https://twitter.com/"
											className="btnText d-flex"
											target="_blank"
											rel="noreferrer"
											style={{ textDecoration: "none", marginRight: "50px" }}>
											<WhatsAppIcon />
											<p
												className="d-none d-md-block "
												style={{ textDecoration: "none", marginLeft: "5px" }}>
												{" "}
												WhatsApp
											</p>
										</a>
									</p>
									<p>
										<a
											href="https://www.instagram.com/innkeeper.work__/"
											className="btnText d-flex"
											target="_blank"
											rel="noreferrer"
											style={{ textDecoration: "none", marginRight: "50px" }}>
											<InstagramIcon />
											<p
												className="d-none d-md-block "
												style={{ textDecoration: "none", marginLeft: "5px" }}>
												{" "}
												Instagram
											</p>
										</a>
									</p>
									<p>
										<a
											href="https://www.linkedin.com/company/innkeeper-work/"
											className="btnText d-flex"
											target="_blank"
											rel="noreferrer"
											style={{ textDecoration: "none", marginRight: "50px" }}>
											<LinkedInIcon />
											<p
												className="d-none d-md-block "
												style={{ textDecoration: "none", marginLeft: "5px" }}>
												{" "}
												Linkedin
											</p>
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
