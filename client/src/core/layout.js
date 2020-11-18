import React, { Fragment } from 'react'
import Menu from './Menu';
import "../styles.css"
import { Link } from 'react-router-dom';
import logo from '../img/logo_lower_BD.png'
import Footer from './Footer';

const Layout = ({title='Title', description = 'Description', className, children }) =>  ( 
   <div>
      
      <Menu/>
      <div id="header">
         <div class="imgbg">
         {/* <h2>{title}</h2>
         <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div> */}
         </div>

         <div class="mb">
            <img id="friedaPic" src="img/photo.jpg" class="mx-auto d-block" alt="Frieda Silva" />
         </div>
      </div>

         

      <Footer/>
   </div>
   
);

export default Layout