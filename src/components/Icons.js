import React from "react";

// course info icons
export const BookIcon = () => {
	return (
		<div>
			<i className="bi bi-journals iconCol"></i>
		</div>
	);
};

export const AlarmIcon = () => {
	return (
		<div>
			<i className="bi bi-alarm iconCol"></i>
		</div>
	);
};
export const CreditCardIcon = () => {
	return (
		<div>
			<i className="bi bi-credit-card iconCol"></i>
		</div>
	);
};

// social media icons
export const FacebookIcon = () => {
	return (
		// <div>
		<a
			href="https://www.facebook.com/innkeeper.work/"
			target="_blank"
			rel="noreferrer"
			style={{
				textDecoration: "none",
			}}>
			<i className="bi bi-facebook"></i>
		</a>
		// </div>
	);
};
export const WhatsAppIcon = () => {
	return (
		<div>
			<i className="bi bi-whatsapp"></i>
		</div>
	);
};
export const InstagramIcon = () => {
	return (
		<div>
			<i className="bi bi-instagram"></i>
		</div>
	);
};
export const LinkedInIcon = () => {
	return (
		<div>
			<i className="bi bi-linkedin"></i>
		</div>
	);
};
