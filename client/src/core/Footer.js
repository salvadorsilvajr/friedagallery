import React from 'react'
import "../styles.css"
import { Link, withRouter} from 'react-router-dom';
import logotop from '../img/logo_top_BD.png'

const Footer = () =>  ( 
	<footer className="footer-bs">
   	<div className="jumbotron">
			<div className="row">
				<div className="ml-3 col-lg-3 px-5 footer-brand animated fadeInLeft">
					<div className="footsec1"><Link className="navbar-brand" to="/">
							<img className='img-fluid' src={logotop} alt="bean Doctor Logo"/>
						</Link>
					<p>We provide on-site service for hot/cold beverage equipment & we sell beverage equipment as well. We
						truly believe healthy equipment is essential.</p>
					</div>
				</div>
				<div className="footsec2 col-lg-4 px-5 social-media animated fadeInDown">
					<h4>Follow Us</h4>
					<ul className='d-flex mb-2 justify-content-around'>
						<li className="nav-item">
							<Link className="nav-link facebook" to="https://www.facebook.com/thebeandoctor"><i className="fab fa-facebook-square"></i></Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link twitter" to="https://twitter.com/TheBeanDoctorMO"><i	className="fab fa-twitter-square"></i></Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link youtube" to="https://www.facebook.com/thebeandoctor"><i className="fab fa-youtube"></i></Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link instagram" to="https://www.facebook.com/thebeandoctor"><i className="fab fa-instagram"></i></Link>
						</li>
					</ul>
					<h5 className="animate__animated animate__bounce text-warning" id="text-rights">© 2020, All rights reserved Website
					Design by Salvador
					Silva </h5>
				</div>
				<div className="col-lg-4 px-5 footer-ns animated fadeInRight">
					<h4>Subcribe Newsletter</h4>
					<p>Don't know about you but to us..... coffee is ESSENTIAL!! </p>
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