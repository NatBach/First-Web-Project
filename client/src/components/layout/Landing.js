import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
						<h1 className="x-large">Where the internet speed is mistakenly as the light speed.</h1>
						<p className="lead">
							Congrats you have come to the right place for the right thing!!
						</p>
						
						<p>Xin Chào!</p>

						<div className="buttons">
							<Link to="/register" className="signupButton">Sign Up</Link>
							<Link to="/login" className="btn btn-light">Login</Link>
						</div>
				</div>
			</div>
		</section>
	);
}

export default Landing;
