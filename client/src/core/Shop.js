import React, { useState, useEffect }from 'react';
import Layout from './layout'
import Card from './Card';
import { getCategories, getFilteredProducts } from './apiCore';
import Checkbox from './Checkbox';
import Radiobox from './Radiobox';
import { prices } from './fixedPrices';

const Shop = () => {

   const [myFilters, setMyFilters] = useState({
      filters: { category: [], price: []}
   });
   const [categories, setCategories ] = useState([])
   const [error, setError ] = useState(false)
   const [limit, setlimit ] = useState(6)
   const [skip, setSkip ] = useState(0)
   const [size, setSize ] = useState(0)
   const [filteredResults, setFilteredResults ] = useState([])


   // load categories and set form data
   const init = () => {
      getCategories().then(data => {
         if(data.error){
            setError(data.error)
         } else {
            setCategories(data)
         }
      })
   }

   const loadFilteredResult = (newFilters ) => {
      // console.log(newFilters)
      getFilteredProducts(skip, limit, newFilters).then(data => {
         if(data.error){
            setError(data.error)
         } else {
            setFilteredResults(data.data)
            setSize(data.size);
            setSkip(0)
         }
      })
   }

   const loadMore = ( ) => {
      let toSkip = skip + limit 
      // console.log(newFilters)
      getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
         if(data.error){
            setError(data.error)
         } else {
            setFilteredResults([...filteredResults, ...data.data])
            setSize(data.size);
            setSkip(toSkip)
         }
      })
   }

   const loadMoreButton = () => {
      return (
         size > 0 && (
            <button onClick={loadMore} className="btn btn-warning mb-5">Load More</button>
         )
      )
   }

   useEffect(() => {
      init()
      loadFilteredResult(skip, limit, myFilters.filters);
   },[] )

   const handleFilters = (filters, filterBy) => {
      // console.log("SHOP", filters, filterBy);
      const newFilters = {...myFilters}
      newFilters.filters[filterBy] = filters
      if(filterBy == 'price'){
         let priceValues = handlePrice(filters);
         newFilters.filters[filterBy] = priceValues;
      }
      loadFilteredResult(myFilters.filters)
      setMyFilters(newFilters)
   }
   
   const handlePrice = value => {
      const data = prices
      let array = []
      for(let key in data) {
         if(data[key]._id === parseInt(value)) {
            array = data[key].array
         }
      }
      return array;
   }
   

   return (
      <Layout title='Shop Page' description='Search true all the Items in our webSite'className='container'>
         <div className="row shop">
            <div className="shopsearch col-lg-3 col-sm-12">
               <div className='shopsec1'>
                  <h4>By Categories</h4>
                  <ul className="p-1">
                  <Checkbox categories={categories}
                  handleFilters={filters =>
                  handleFilters(filters, 'category')}/>
                  </ul>
               </div>
               <div className='shopsec1'>
                  <h4>By Price </h4>
                  <div >
                  <Radiobox prices={prices}
                  handleFilters={filters =>
                  handleFilters(filters, 'price')}/>
                  </div>
               </div>
            </div>  
            <div className="col-lg-9 col-sm-12">
               <h2 className="mb-4">Products</h2>
               <div className="row">
                  {filteredResults.map((product, i) => (
                  <div className="pricerange" key={i} className="col-sm-6 col-lg-4 mb-3">   
                     <Card  product={product}/>
                  </div>
                  ))}
               </div>
               <hr/>
               {loadMoreButton()}
            </div>  
         </div>
      </Layout>
   )
}

export default Shop;