// hook
import { useContext, useState } from 'react'

// router
import { useLocation, useNavigate } from 'react-router-dom'


// context
import { AuthContext } from 'contexts/auth-context';


// router
import STYLED_LINK from 'styles/styled-components/router-link/router-link';

// rhf
import { useForm } from 'react-hook-form';

// styles
import { STYLED_EMAIL_LOGIN_WRAPPER } from './style'


// components
import { Button } from '@mui/material'

import { MUI_RHF_INPUT, MUI_RHF_PASSWORD } from 'components/reusable/for-any-project/mui-rhf-form'
import { toast } from 'react-toastify';



// ✅ functional component
export default function LOGIN_WITH_EMAIL() {


  // router
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  // context
  const { signin, resetPassword, signInWithGoogle } = useContext(AuthContext)


  const { handleSubmit, control, reset } = useForm({

    mode: 'onChange',

  })


  // the following function will run after the form is submitted
  const submittedData = (allData) => {

    console.log(allData)

    // signin() from AuthContext
    signin(allData.email, allData.password)
      .then(result => {
        toast.success('Login Success!')
        navigate(from, { replace: true })
        console.log(result.user)
      })
      .catch(error => toast.error(error.message))


    reset()
  }





  // ✨ rules for form validation 
  const validationRules = {

    email: {
      required: 'Email is required',
      pattern: {
        value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/,
        message: `Provide a valid Email`
      }
    },

    password: {
      required: 'Password is required.',
      minLength: {
        value: 8,
        message: 'Password must be 8 characters long.'
      },
      maxLength: {
        value: 32,
        message: 'Password must not be longer than 32 characters.'
      },
      pattern: {
        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)^[^ ]+$/,
        message: "Password must have at least one uppercase letter, one lowercase letter, one number, one special character & no space."
      }
    },

  }



  //✅ jsx
  return (

    <STYLED_EMAIL_LOGIN_WRAPPER onSubmit={handleSubmit(submittedData)} noValidate>


      {/* Email */}
      <MUI_RHF_INPUT control={control} label='Email' propertyName='email' validationObj={validationRules.email} variant='standard' />

      {/* Password */}
      <MUI_RHF_PASSWORD control={control} label='Password' propertyName='password' validationObj={validationRules.password} variant='standard' />


      {/* Forgot Password Link */}
      <STYLED_LINK to='/'> <h5 className='forgot_password'>Forgot Password</h5></STYLED_LINK>


      {/* Login Button */}
      <Button type="submit" variant="contained">Log in</Button>


    </STYLED_EMAIL_LOGIN_WRAPPER>
  )
}
