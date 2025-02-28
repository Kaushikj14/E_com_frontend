import { Table, TableCell, TableContainer, TableHead, TableRow,TableBody, Paper } from '@mui/material'
import React, { useEffect } from 'react'
import { findProducts } from '../../State/Product/Action';
import { useDispatch, useSelector } from 'react-redux';

const ProductsTable = () => {

    const dispatch = useDispatch();
    const {products} = useSelector(store=>store);

    console.log("products",products);

    useEffect(()=>{
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
            colors:  [], // Convert to array
            sizes:  [], // Convert to array
            minPrice:0,
            maxPrice:1000000,
            minDiscount:  0,
            sort:  "price_low",
            pageNumber: 0,
            pageSize: 10,
            stock: "in_stock",
            };
        
            console.log("API Request Payload: ", data);
            dispatch(findProducts(data));
          
    },[]);
  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ProductsTable
