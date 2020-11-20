import React from 'react'
import "../styles.css"
import { Link, withRouter} from 'react-router-dom';

const Footer = () =>  ( 
	<footer className="footer-bs">
   	<div className="jumbotron">
			<div className="row justify-content-between">
				<div className="footsec2 col-lg-4 px-5 social-media animated fadeInDown">
					<h4>Follow Us</h4>
					<ul className='d-flex mb-2 justify-content-around'>
						<li className="nav-item">
							<Link className="nav-link facebook" to="#"><i className="fab fa-facebook-square"></i></Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link twitter" to="#"><i	className="fab fa-twitter-square"></i></Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link youtube" to="#"><i className="fab fa-youtube"></i></Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link instagram" to="#"><i className="fab fa-instagram"></i></Link>
						</li>
					</ul>
				</div>
				<div className="col-lg-4">
					<h5 className="animate__animated animate__bounce text-warning " id="text-rights">© 2020, All rights reserved Website
					Design by Salvador
					Silva </h5>

				</div>
				<div className="col-lg-4 px-5 footer-ns animated fadeInRight">
					<h4>Subcribe Newsletter</h4>
					<p>Thomas Merton. “Art enables us to find ourselves and lose ourselves at the same time.”</p>
					<p>
						<span className="input-group">
							<input type="text" className="form-control" placeholder="Your Email here to Subcribe"/>
							<span className="input-group-btn">
								<button className="btn btn-light" type="button"><i className="fas fa-envelope-square"></i></button>
							</span>
						</span>
					</p>
				</div>
			</div>
		</div>
	</footer>
);

export default withRouter(Footer);