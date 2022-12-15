// router
import { useNavigation, useLocation, useNavigate } from 'react-router-dom';

// useState
import { useContext } from 'react';


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
export default function SIGNUP_WITH_EMAIL() {


  const { handleSubmit, control, reset } = useForm({

    mode: 'onChange',

  })



  // context
  const { createUser, updateName } = useContext(AuthContext)



  const navigate = useNavigate()

  // the following function will run after the form is submitted
  const submittedData = (allData) => {

    console.log(allData)


    //1. Create Account
    createUser(allData.email, allData.password)
      .then(result => {
        console.log(result.user)

        //2. Update Name
        updateName(allData.username)
          .then(() => {
            toast.success('Name Updated')
            navigate('/')
          })
          .catch(error => {
            toast.error(error.message) 
          })
      })
      .catch(error => console.log(error))





    reset()
  }





  // ✨ rules for form validation 
  const validationRules = {

    username: {
      required: 'Username is required',
      minLength: {
        value: 4,
        message: 'Username must be 4 characters long.'
      },
      maxLength: {
        value: 20,
        message: 'Username must not be longer than 20 characters.'
      },
      pattern: {
        value: /^[A-Za-z0-9_]*$/,
        message: "You can only use English letter, number & underscore."
      }
    },

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


      {/* Username */}
      <MUI_RHF_INPUT control={control} label='Username' propertyName='username' validationObj={validationRules.username} variant='standard' />


      {/* Email */}
      <MUI_RHF_INPUT control={control} label='Email' propertyName='email' validationObj={validationRules.email} variant='standard' />

      {/* Password */}
      <MUI_RHF_PASSWORD control={control} label='Password' propertyName='password' validationObj={validationRules.password} variant='standard' />


      {/* Forgot Password Link */}
      <STYLED_LINK to='/'> <h5 className='forgot_password'>Forgot Password</h5></STYLED_LINK>


      {/* Signup Button */}
      <Button type="submit" variant="contained">Signup</Button>


    </STYLED_EMAIL_LOGIN_WRAPPER>
  )
}
