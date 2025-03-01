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
} from "@mui/material";
import React, { useEffect } from "react";
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { useDispatch, useSelector } from "react-redux";

const ProductsTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  console.log("products", products);


  const handleProductDelete = (productId)=>{
    dispatch(deleteProduct(productId));
  }

  useEffect(() => {
    const data = {
      //   category: "mens_kurta",
      //   colors:  [], // Convert to array
      //   sizes:  [], // Convert to array
      //   minPrice:0,
      //   maxPrice:100000000,
      //   minDiscount: 0,
      //   sort:  "price_low",
      //   pageNumber:  2,
      //   pageSize: 10,
      //   stock: "",
      category: "mens_kurta",
      colors: [], // Convert to array
      sizes: [], // Convert to array
      minPrice: 0,
      maxPrice: 1000000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 5,
      stock: "in_stock",
    };

    console.log("API Request Payload: ", data);
    dispatch(findProducts(data));
  }, [products.deletedProducts]);
  return (
    <div className="p-5 w-[full]">
      <Card className="mt-2" >
        <CardHeader title="ALL Products" />
        <TableContainer component={Paper} sx={{ width: "100%", overflowX: "hidden" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quanity</TableCell>

                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
          {products.products?.content.map((item) => (
            <TableRow
              key={item.category?.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item?.title}
              </TableCell>
              <TableCell align="right">{item.id}</TableCell>
              {/* <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell> */}
            {/* </TableRow> */}
            {/* ))} */}
            {/* </TableBody> */}
            <TableBody>
              {products?.products?.content?.length > 0 ? (
                products.products.content.map((item) => (
                  <TableRow key={item?.id}>
                    <TableCell align="left">
                      <Avatar src={item.imageUrl}></Avatar>
                    </TableCell>
                    <TableCell align="left" scope="row">
                      {item?.title}
                    </TableCell>

                    <TableCell align="left">{item?.category.name}</TableCell>
                    <TableCell align="left">{item?.price}</TableCell>
                    <TableCell align="left">{item?.quantity}</TableCell>

                    <TableCell align="left">
                      <Button onClick={()=>handleProductDelete(item?.id)} variant="outlined">Delete</Button>
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
  );
};

export default ProductsTable;
