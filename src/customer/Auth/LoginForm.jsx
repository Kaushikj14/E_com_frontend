import { Button } from '@headlessui/react';
import { Grid, TextField } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getUser, register,login } from '../../State/Auth/Action';
import { useDispatch } from 'react-redux';

const LoginForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();



  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log(data);

    const userData = {
      email: data.get('email'),
      password: data.get('password'),
    }


    dispatch(login(userData));
    console.log("userData",userData);
    // console.log(e.target.name.value);

  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              
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
                sx={{padding:".8rem 0"}}>Login</Button>
              </Grid>
             
            </Grid>
            
        </form>
        <div className='flex justify-center flex-col items-center'>
          <div className='py-3 flex items-center'>
            <p>If you don't have an account?</p>
            <Button onClick={()=>navigate('/register')} className='ml-5 text-indigo-600' size="small">Register</Button>
          </div>
        </div>
    </div>
  )
}

export default LoginForm;
 