import React from 'react';
import { TrendingUp} from "@mui/icons-material"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const salesData = [
    {
        stats:"245K",
        title:"Sales",
        color:"#EEC213",
        icon: <TrendingUp sx={{fontSize:"1.75rem"}}/>
    },

    {
        stats:"12.5K",
        title:"Customers",
        color:"#2ecc72",
        icon: <AccountCircleOutlinedIcon sx={{fontSize:"1.75rem"}}/>
    },

    {
        stats:"1.55K",
        title:"Products",
        // color:"#B4161B",
        color:"#E83350",
        icon: <ImportantDevicesOutlinedIcon sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats:"88K",
        title:"Revenue",
        color:"#12B0E8",
        icon: <AttachMoneyOutlinedIcon sx={{fontSize:"1.75rem"}}/>
    },
]

const renderState =     ()=>{
    return salesData.map((item,index)=>(
        <Grid item xs={12} sm={3} key={index}>
                <Box sx={{
                    display:"flex",alignItems:"center"
                }}>

                    <Avatar variant='rounded' sx={{
                        mr:3,
                        width:44,
                        height:44,
                        boxShadow:3,
                        color:"white",
                        background:`${item.color}`}}>
                        {item.icon}
                    </Avatar>

                    <Box sx={{display:"flex",flexDirection:"column"}}>
                        <Typography variant='caption'>{item.title}</Typography>
                        <Typography variant='h6'>{item.stats}</Typography>
                    </Box>

                </Box>
        </Grid>
    ))
}

const MonthlyOverview = () => {
  return (
    <Card sx={{bgcolor:"#242B2E",color:"white"}}>
        <CardHeader title="Monthly Overview" action={
            <IconButton size='small'>
                <MoreVertOutlinedIcon />
            </IconButton>
        }
        subheader={
            <Typography variant='body2'>
                <Box component="span" sx={{fontWeight:600,mx:0.5}}>
                    Total 48.5% growth
                </Box>
                😎 This month
            </Typography>
        }

        titleTypographyProps={{
            sx:{
                mb:2.5,
                lineHeight:'2rem !important',
                letterSpacing:'.15px !important'
            }
        }}
        />

        <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
                <Grid container spacing={[5,0]}>
                        {renderState()}
                </Grid>
            </CardContent>
    </Card>
  )
}

export default MonthlyOverview
