import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {

  const navigate = useNavigate();


  return (
    <div onClick={()=>navigate(`/accpunt/order/${5}`)} className="p-5 shadow-lg hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item sx={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h[5rem] object-cover object-top"
              src="https://valintaformens.com/cdn/shop/products/photo_2023-03-27_02-27-21.jpg?v=1681723151&width=736"
              alt=""
            />

            <div className="ml-5 space-y-2">
              <p>Men's Kurta</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color : black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹1099</p>
        </Grid>

        <Grid item xs={4}>
            {true && 
            <div>

<p>
                <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2 text-sm" /> 
                <span>
                    Delivered on March 03
                </span>
                
            </p>
            <p className="text-sm">
            
                    Your Item Has Been Delivered
               
            </p>
                
            </div>
            }
            {false && <p>
                <span>
                    Expected Delivery on Mar 03
                </span>
            </p>}
        </Grid>



      </Grid>
    </div>
  );
};

export default OrderCard;
