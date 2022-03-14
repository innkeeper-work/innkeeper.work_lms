import React from 'react';
import img404 from '../images/404.png';
import { Facebook } from 'react-bootstrap-icons';


import { Home } from "../components/Buttons";
import { ContactUs } from "../components/Buttons";


const Error404 = () => {
  return (
			<div className="row g-5">                
				<div class="col-md-7">
					<img src={img404} alt="error_page" />
				</div>
				<div className="col-md-5 m-auto">
					<h5 className='herotextColored'>UH OH! Page Not Found</h5>
					<p >The page you are looking for does not exist. Please click on the buttons below to either go back to the homepage or contact us</p>
					<div className="btn">
						<Home />
					</div>
					<div className="btn">
						<ContactUs />
					</div>
					<div className="btn">
						<Home />
					</div>
					<div className="btn">
						<ContactUs />
					</div>
				</div>
				<div>
					
				</div>
			</div>
  );
};

export default Error404;
