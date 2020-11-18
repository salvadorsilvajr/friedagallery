import React, { useState, useEffect } from 'react';
import Layout from './layout'
import {Link} from 'react-router-dom';
import  { getCart } from './cartHelpers'
import Card from './Card';
import Checkout from './Checkout';


const Cart = () => {
   const [items, setItems] = useState([])
   const [run, setRun] = useState(false);

   useEffect(() => {
      setItems(getCart());
   }, [run])

   const showItems = items => {
      return (
         <div>
            <h2>Your cart has {`${items.length}`}</h2>
              <hr/>
            {items.map((product, i) => (
               <Card key={i}
                product={product}
                showAddToCartButton={false}
                cartUpdate= {true}
                showRemoveProductButton = {true} 
                setRun={setRun}
                run={run} /> ))}
                
         </div>
      )
   }

   const noitemsMessage = () => (
      <h2>Your Cart is empty. <br/>
         <Link to='/shop'>Continue Shopping...</Link>
      </h2>
   )

   return (
      <Layout title='Shopping Cart' description="Checkout Now"className='container'>
         <div className="row d-flex sumcart justify-content-around">
            <div className="col-lg-4 col-sm-4 mx-4 my-3">
               {items.length > 0 ? showItems(items) : noitemsMessage()}
            </div>

            <div className="col-lg-4 col-sm-6 mx-4 my-3">
               <h2 className="mb-4">Your Cart Summary</h2>
               <hr />
               <Checkout products={items} setRun={setRun} run={run}/>
            </div>
         </div>

      </Layout>
   )
}

export default Cart;