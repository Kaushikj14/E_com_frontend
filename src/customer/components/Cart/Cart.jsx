import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {

  const navigate = useNavigate();
  const cart = useSelector(store=>store);
  console.log("Cart state:", cart); // Debugging: check structure

  const cartItemsData = cart?.cart?.cartItems?.cartItems || []; 
  console.log("data from cart of cart.jsx",cart);
  
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(getCart())
  },[cart.cart.updateCartItem,cart.cart.deleteCartItem])

  const handleCheckOut = ()=>{  
      navigate("/checkout?step=2");
  } 


  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
         {/* {cartItemsData.map((item)=><CartItem key={item.id} item={item} />) } */}
         {cartItemsData.length > 0 ? (
  cartItemsData.map((item) => (
    <CartItem key={item.id || item._id} item={item} />
  ))
) : (
  <p>Your cart is empty.</p>
)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
                <p className="uppercase opacity-60 pb-4">Price Details</p>
                <hr/>
                <div className="space-y-4 font-semibold mb-10">
                        <div className="flex justify-between pt-3 text-black">
                            <span>Price</span>
                            <span>₹{cart.cart?.cart?.totalPrice}</span>
                        </div>

                        <div className="flex justify-between pt-3 ">
                            <span>Discount</span>
                            <span className="text-green-600">-₹{cart.cart?.cart?.discount}</span>
                        </div>

                        <div className="flex justify-between pt-3">
                            <span>Delivery Chaarge</span>
                            <span className="text-green-600">Free</span>
                        </div>

                        <div className="flex justify-between pt-3 font-bold">
                            <span>Total Amount</span>
                            <span className="text-green-600">₹{cart.cart?.cart?.totalDiscountPrice}</span>
                        </div>
                </div>

                <Button onClick={handleCheckOut} variant="contained" className="w-full mt-5" sx={{ px:"2.5rem", py:".7rem", bgcolor:"#9155fd" }}>
  Checkout
</Button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
