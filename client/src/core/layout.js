import React, { Fragment } from 'react'
import Menu from './Menu';
import "../styles.css"
import { Link } from 'react-router-dom';
import photo from '../img/photo.jpg'
import Footer from './Footer';

const Layout = ({title='Title', description = 'Description', className, children }) =>  ( 
   <div>
      
      <div className="header">
         <div className="imgbg">
         <Menu/>
         <h2 id="artisname">Frieda Silva</h2>
         </div>

         <div className="mb">
            <img id="friedaPic" src={photo} className="mx-auto d-block " alt="Frieda Silva" />
         </div>
         <h2>{title}</h2>
         <p className="lead">{description}</p>
         <div className={className}>{children}</div>
      </div>

         

      <Footer/>
   </div>
   
);

export default Layout