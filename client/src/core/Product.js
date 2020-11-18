import React, { useState, useEffect }from 'react';
import Layout from './layout'
import  { read, listRelated } from './apiCore'
import Card from './Card';

const Product = (props) => {
   
   const [product, setProduct] = useState({})
   const [relatedProduct, setRelatedProduct] = useState([])
   const [error, setError] = useState(false)

   const loadSingleProduct = productId => {
      read(productId).then(data => {
         if(data.error){
            setError(data.error);
         } else {
            setProduct(data)
            // fetch related Products 
            listRelated(data._id).then(data => {
               if(data.error) {
                  setError(data.error)
               } else {
                  setRelatedProduct(data);
               }
            } )
         }
      })
   }

   useEffect(() => {
      const productId = props.match.params.productId
      loadSingleProduct(productId)
   } , [props]);

   return (
      <Layout title={product && product.name} description={product &&product.description && product.description.substring(0, 100)} className='container contproduct'>
         <div className="row">
            <div className="col-lg-5 col-sm-4">
            {product && product.description && (
            <Card product={product} showViewProductButton={false} />
            )}
            </div>
            <div className="col-lg-6 col-sm-8 relateproducts">
               <h4>Related Products</h4>
               <div className="row">
                  {relatedProduct.map((p, i) => (
                     <div key={i} className="col-6 mb-3">
                        <Card  product={p} />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default Product
