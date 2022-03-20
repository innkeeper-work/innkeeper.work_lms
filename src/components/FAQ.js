import React from "react";

export const FAQ = (props) => {
	const { question, answer } = props;
	return (
		<div className="accordion-item">
			<p className="accordion-header" id="flush-headingOne">
				<button
					className="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#flush-collapseOne"
					aria-expanded="false"
					aria-controls="flush-collapseOne">
					{question}
				</button>
			</p>
			<div
				id="flush-collapseOne"
				className="accordion-collapse collapse"
				aria-labelledby="flush-headingOne"
				data-bs-parent="#accordionFlushExample">
				<div className="accordion-body">{answer}</div>
			</div>
		</div>
		// </div>
	);
};
