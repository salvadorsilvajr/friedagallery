import React from 'react'
import Menu from './Menu';
import "../styles.css"
import { Link } from 'react-router-dom';
import logo from '../img/logo_lower_BD.png'
import Footer from './Footer';

const Layout = ({title='Title', description = 'Description', className, children }) =>  ( 
   <div>
      
      <Menu/>
      <div className="jumbotron">
         <div className='layout'>
            <img src={logo} className='img-fluid d-flex animate__animated animate__flip' 
            alt="bean Doctor Logo"/>
         </div>
         <div className= 'mr-4'>
            <ul className="social-media d-flex justify-content-end">
               <li >
                  <Link className="nav-link facebook" to="www.facebook.com/thebeandoctor"><i
                        className="fab fa-facebook-square"></i></Link>
               </li>
               <li >
                  <Link className="nav-link twitter" to="twitter.com/TheBeanDoctorMO"><i
                        className="fab fa-twitter-square"></i></Link>
               </li>
               <li >
                  <Link className="nav-link youtube" to="#!"><i className="fab fa-youtube"></i></Link>
               </li>
               <li >
                  <Link className="nav-link instagram" href="#!"><i className="fab fa-instagram"></i></Link>
               </li>
            </ul>
         </div>

         

         <h2>{title}</h2>
         <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
      <Footer/>
   </div>
   
);

export default Layout