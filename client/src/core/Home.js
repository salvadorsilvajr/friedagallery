import React, { useState, useEffect }from 'react';
import Layout from './layout'
// import Footer from './Footer'
import  { getProducts } from './apiCore'
import Card from './Card';
import Search from './Search';


const Home = () => {

   const [productsBySell, setProductsBySell] = useState([]);
   const [productsByArrival, setProductsByArrival] = useState([]);
   const [error, setError] = useState([]);

   const loadProductsBySell = () => {
      let lim = ''
      if (window.innerWidth >= 800) {
          lim = 'limit=6'
      } else {
          lim = 'limit=4'
      }
      getProducts('sold', lim).then(data => {
         if(data.error){
            setError(data.error)
         } else {
            setProductsBySell(data)
         }
      })
   }
   

   const loadProductsByArrival = () => {
      let lim = ''
      if (window.innerWidth >= 800) {
          lim = 'limit=6'
      } else {
          lim = 'limit=4'
      }

       getProducts('createdAt', lim).then(data => {
         if(data.error){
            setError(data.error)
         } else {
            setProductsByArrival(data)
         }
      })
   }

   useEffect(() => {
      loadProductsByArrival()
      loadProductsBySell()
   },[])

   return (
      <Layout title='Home Page' description='Coffee, Grinders, Expresso Machines and more ...'className='container homepage'>
         <Search/>
         <h2 className="mb-4">New Arrivals</h2>
         <div className="row">
            {productsByArrival.map((product, i) => (
               <div key={i} className="col-sm-6 col-lg-4 mb-3">   
                  <Card  product={product}/>
               </div>
            ))}
         </div>
         
         <h2 className="mb-4">Best Sellers</h2>
         <div className="row">
            {productsBySell.map((product, i) => (
               <div key={i} className="col-sm-6 col-lg-4  mb-3">   
                  <Card  product={product}/>
               </div>
            ))}
         </div>
      </Layout>
   
   )
}

export default Home;