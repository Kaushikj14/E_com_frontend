import { Grid } from '@mui/material'
import React from 'react'
import Achievements from './Achievements'
import MonthlyOverview from './MonthlyOverview'
import ProductDetails from '../../customer/components/ProductDetails/ProductDetails'
import ProductsTable from './ProductsTable'
import OrdersTable from '../View/OrderTableView'
import OrderTableView from '../View/OrderTableView'
import ProductTableView from '../View/ProductTableView'

const Dashboard = () => {
  return (
    <div className='p-10'>
        <Grid container spacing={3}>
            <Grid  item xs={12} md={4}>
                <div className='shadow-lg shadow-gray-600'>
                    <Achievements/>
                </div>
            </Grid>

            <Grid  item xs={12} md={8}>
                <div className='shadow-lg shadow-gray-600'>
                    <MonthlyOverview  />
                </div>
            </Grid>

            <Grid  item xs={12} md={6}>

                <div className='shadow-lg shadow-gray-600'>
                <OrderTableView />
                </div>
                {/* <MonthlyOverview  /> */}
            </Grid>

            <Grid  item xs={12} md={6}>

                <div className='shadow-lg shadow-gray-600'>
                <ProductTableView />
                </div>
                {/* <MonthlyOverview  /> */}
            </Grid>
        </Grid>
    </div>
  )
}

export default Dashboard
