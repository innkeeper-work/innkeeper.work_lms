import { Link } from "react-router-dom";

let CourseEnroll = () => {
	return (
		<div className="card-body">
			<h3 className="card-title">Available Enrolment Options</h3>
			<ul className="list-content">
				<li className="list-item pb-2">
					Click to{" "}
					<a
						href="https://soft.innkeeper.work/login/index.php"
						rel="noreferrer">
						<b>Pay Now</b>
					</a>
				</li>
				<li className="list-item pb-2">
					Click to{" "}
					<Link to="" className="text-decoration-none">
						<b>Installmental Payment</b>
					</Link>
				</li>
				<p className="">NB: Instalmental payment is accepted (T and C Apply)</p>
				<li className="list-item pb-2">
					Apply for Student loan{" "}
					<Link to="" className="text-decoration-none">
						<b>HERE</b>
					</Link>
				</li>
				<li className="list-item pb-2">
					Apply via our training bond{" "}
					<Link to="" className="text-decoration-none">
						<b>HERE</b>
					</Link>
				</li>
				<li className="list-item pb-2">Apply for scholarship.</li>
				<p className="">
					(See available ones{" "}
					<Link to="" className="text-decoration-none">
						<b>HERE</b>
					</Link>
					)
				</p>
			</ul>
		</div>
	);
};

export default CourseEnroll;
