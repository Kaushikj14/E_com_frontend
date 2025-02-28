import { Grid } from '@mui/material'
import React from 'react'
import Achievements from './Achievements'
import MonthlyOverview from './MonthlyOverview'
import ProductDetails from '../../customer/components/ProductDetails/ProductDetails'
import ProductsTable from './ProductsTable'

const Dashboard = () => {
  return (
    <div className='p-10'>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Achievements/>
            </Grid>

            <Grid item xs={12} md={8}>
                <MonthlyOverview  />
            </Grid>

            <Grid item xs={12} md={6}>
                <ProductsTable />
                {/* <MonthlyOverview  /> */}
            </Grid>
        </Grid>
    </div>
  )
}

export default Dashboard
