import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action';
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  Avatar,
  Button,
  Card,
  CardHeader,
  AvatarGroup,
} from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const OrdersTable = () => {

  const dispatch = useDispatch();

  const {adminOrder} = useSelector(store=>store);
  console.log(adminOrder);

  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event,index) => {
    // setAnchorEl(event.currentTarget);
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index]=event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };

  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index]=null;
    setAnchorEl(newAnchorElArray);
  };
  

  useEffect(()=>{
      dispatch(getOrders())
  },[adminOrder.confirmed,adminOrder.shipped,adminOrder.delivered,adminOrder.deletedOrder]);

  const handleShippedOrder = (orderId)=>{
    dispatch(shipOrder(orderId));
    handleClose();
  }


  
  const handleConfirmedOrder = (orderId)=>{
    dispatch(confirmOrder(orderId));
    handleClose();
  }

  
  const handleDeliveredOrder = (orderId)=>{
    dispatch(deliveredOrder(orderId));
    handleClose();
  }

  const handleDeleteOrder = (orderId)=>{
    dispatch(deleteOrder(orderId));
    handleClose();
  }

  return (
    <div className='p-10'>
       <Card className="mt-2" >
        <CardHeader title="ALL Products" />
        <TableContainer component={Paper} sx={{ width: "100%", overflowX: "hidden" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder?.orders?.length > 0 ? (
                adminOrder.orders.map((item,index) => (
                  <TableRow key={item?.id}>
                    <TableCell align="left">

                      <AvatarGroup max={3} sx={{justifyContent:"start"}}>
                        {item.orderItems.map((orderItem)=> <Avatar src={orderItem.product.imageUrl}></Avatar>)}
                      </AvatarGroup>
                      {/* <Avatar src={item.imageUrl}></Avatar> */}
                    </TableCell>
                    <TableCell align="left" scope="row">
                      {/* {item?.title} */}
                      {item.orderItems.map((orderItem)=> <p>{orderItem.product.title}</p>)}

                    </TableCell>

                    <TableCell align="left">{item?.id}</TableCell>
                    <TableCell align="left">{item?.totalPrice}</TableCell>
                    <TableCell align="left"><span className={`text-white px-5 py-2 rounded-full ${item.orderStatus==="CONFIRMED"?"bg-green-600":item.orderStatus==="SHIPPED"?"bg-blue-600":item.orderStatus==="PLACED"?"bg-gray-500":item.orderStatus==="PENDING"?"bg-orange-500":"bg-red-600"}`}>{item?.orderStatus}</span></TableCell>

                    <TableCell align="left">
                    <Button
        id="basic-button"
        // aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        // aria-expanded={open ? 'true' : undefined}
        onClick={(event)=>handleClick(event,index)}
        aria-controls={`basic-menu ${item.id}`} aria-expanded={Boolean(anchorEl[index])}
      >
        Status
      </Button>
      <Menu
        id={`basic-menu -${item.id}`}
        anchorEl={anchorEl[index]}
        open={Boolean(anchorEl[index])}
        onClose={()=>handleClose(index)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>handleConfirmedOrder(item?.id)}>Confirmed Order</MenuItem>
        <MenuItem onClick={()=>handleShippedOrder(item?.id)}>Shipped Order</MenuItem>
        <MenuItem onClick={()=>handleDeliveredOrder(item?.id)}>Delivered Order</MenuItem>
      </Menu>
                    </TableCell>

                    <TableCell align="left">
                      <Button onClick={()=>handleDeleteOrder(item.id)}   variant="outlined">Delete</Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No products available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default OrdersTable
