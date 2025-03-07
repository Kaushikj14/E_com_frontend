import React, { use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getOrderById } from "../../State/Order/Action";
import { updatePayment } from "../../State/Payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../components/Order/OrderTracker";
import AddressCard from "../components/AddressCard/AddressCard";

const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [refrenceId, setRefrenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();

  console.log("orderId", orderId);

  const dispatch = useDispatch();

  const { order } = useSelector((store) => store);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);

    setPaymentId(urlParam.get("razorpay_payment_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    const data = { orderId, paymentId };
    dispatch(getOrderById(orderId));
    dispatch(updatePayment(data));
    // if(paymentId)
  }, [orderId, paymentId]);

  return (

        <div className="px-2 lg:px-36">
            <div className="flex flex-col justify-center items-center">
                <Alert variant="filled" severity="success" sx={{mb:6,width:"fir-content"}}>
                    <AlertTitle>
                        Payment Success
                    </AlertTitle>
                    Congratulations Your Order get placed
                </Alert>
            </div>
            <OrderTracker activeStep={1}/>
            <Grid container className="space-y-5 py-5 pt-20">
                {/* order.order?.orderItems.map */}
                  {order.order?.orderItems?.map((item)=>  <Grid sx={{alignItems:"center",justifyContent:"space-between"}} container item className="shadow-xl rounded-md p-5 ">
                            <Grid item xs={6}>
                                <div className="flex items-center">
                                    <img className="w-[5rem] h-[5rem] object-cover object-top" 
                                    src={item.product.imageUrl} alt="" />

                                        <div className="ml-5 space-y-2">
                                            <p>{item.product.title}</p>
                                            <div className="opacity-50 text-xs font-semibold space-x-5">
                                                <span>Color : {item.color}</span>
                                                <span>Size : {item.size}</span>
                                            </div>
                                            <p>Seller : {item.product.brand}</p>
                                            <p>₹ {item.price}</p>
                                        </div>
                               
                                </div>
                            </Grid>

                            <Grid item>
                                                <AddressCard address={order.order?.shippingAddress}/>
                                </Grid>

                    </Grid>)}
            </Grid>

        </div>
  );
};

export default PaymentSuccess;
