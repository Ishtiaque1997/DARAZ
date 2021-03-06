import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImages from '../../images/giphy.gif'
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {
 const [cart,setCart]=useState([]);
 const [orderPlaced,setOrderPlaced]=useState(false);
 const auth=useAuth();
 const handlePlaceOrder=()=>{
  setCart ([]);  
  setOrderPlaced(true);
  processOrder();
 }
 const RemoveProduct=(productKey)=>{
  console.log('remove clicked',productKey);
  const newCart=cart.filter(pd=>pd.key!==productKey);
  setCart(newCart);
  removeFromDatabaseCart(productKey)
 }
 useEffect(()=>{
  const savedCart=getDatabaseCart();
  const productKeys=Object.keys(savedCart);

  const cartProducts=productKeys.map(key=>{
   const product=fakeData.find(pd=>pd.key==key);
   product.quantity=savedCart[key];
   return product;
  });
  setCart(cartProducts)

 },[])

 let thankYou;
 if(orderPlaced){
    thankYou= <img src={happyImages}alt=""/>
 }
 return (
   <div className="twin-container">
     <div className="product-container">
       {cart.map(pd =>
         <ReviewItem



         RemoveProduct={RemoveProduct}
           product={pd}
         ></ReviewItem>)
       }
       {
        thankYou
       }
       {
         !cart.length && <h1>You have not added anything yet...<a href="/shop">Keep shopping</a> </h1>
       }

     </div>
     <div className="cart-container">
       <Cart cart={cart}>
         <Link to="shipment">
           {
             auth.user ? 
             <button className="button">Proceed checkout</button>
               : <button className="button">Login to proceed</button>
           }
         </Link>
       </Cart>
     </div>
   </div>
 );
 }

export default Review;