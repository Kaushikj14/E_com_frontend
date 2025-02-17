import { Button } from '@headlessui/react';
import { Grid, TextField } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log(data);

    const userData = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    }
    console.log("userData",userData);
    // console.log(e.target.name.value);

  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                 required
                 id='firstName'
                label="First Name"
                name="firstName"
                fullWidth
                autoComplete='given-name'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                 required
                 id='lastName'
                label="Last Name"
                name="lastName"
                fullWidth
                autoComplete='given-name'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 required
                 id='email'
                label="Email"
                name="email"
                fullWidth
                autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 type='password'
                 required
                 id='password'
                label="Password"
                name="password"
                fullWidth
                autoComplete='password'
                />
              </Grid>
              <Grid item xs={12}>
                <Button 
                className='bg-[#9155fd] w-full text-white h-[3.5rem] font-medium text-lg' 
                type='submit' 
                variant='contained' 
                size='large' 
                sx={{padding:".8rem 0"}}>Register</Button>
              </Grid>
             
            </Grid>
            
        </form>

        <div className='flex justify-center flex-col items-center'>
          <div className='py-3 flex items-center'>
            <p>If you already have an account?</p>
            <Button onClick={()=>navigate('/login')} className='ml-5 text-indigo-600' size="small">Login</Button>
          </div>
        </div>
    </div>
  )
}

export default RegisterForm
 