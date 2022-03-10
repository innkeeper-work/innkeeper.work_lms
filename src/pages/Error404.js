import React from 'react';
import img404 from '../images/404.png'

import { SignInButton } from "../components/Buttons";


const Error404 = () => {
  return (

			<div class="row g-5">                
				<div class="col-md-7">
					
						<img src={img404} alt="error_page" />
						
				</div>
				<div class="col-md-5 m-auto">
					<h5 className='herotextColored'>UH OH! Page Not Found</h5>
					<p>The page you are looking for does not exist. Please click on the buttons below to either go back to the homepage or contact us</p>
					<div className=''>
						<SignInButton className='p-4'></SignInButton>
						<SignInButton />
					</div>
					
				</div>
			</div>
  );
};

export default Error404;
