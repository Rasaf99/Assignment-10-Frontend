// hook
import { useContext, useState } from 'react'

// router
import { useLocation, useNavigate } from 'react-router-dom'


// context
import { AuthContext } from 'contexts/auth-context';


// styles
import { STYLED_JSX_WRAPPER, STYLED_FORM } from './style'


// icons
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';


// components
import { Button, Divider } from '@mui/material'

import LOGIN_WITH_EMAIL from './login-with-email/login-with-email';
import STYLED_LINK from 'styles/styled-components/router-link/router-link';
import LOGO from 'components/reusable/for-any-project/logo/logo';


// ✅ functional component
export default function FORM_LOGIN() {


  // router
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  // context
  const {signInWithGoogle } = useContext(AuthContext)


  // 🔥 handleGoogleSignin function
  const handleGoogleSignin = () => {

    // signInWithGoogle() form AuthContext
    signInWithGoogle()
      .then(result => {
        console.log(result.user)
        navigate(from, { replace: true })
      })
  }


  // state to show and hide dropdown
  const [showDropdown, setShowDropdown] = useState(false)

  const handleClick = () => {

    setShowDropdown(!showDropdown)
  }



  return (

    <STYLED_JSX_WRAPPER>

      <STYLED_FORM>

        <LOGO />



        <h3 className='form_title'>Log in</h3>

        <Button onClick={() => handleGoogleSignin()} variant="contained" startIcon={<GoogleIcon />}>
          Login With Google
        </Button>


        <Divider />

        <Button onClick={handleClick} variant="contained" startIcon={<EmailIcon />}>
          Login With Email
        </Button>

        {showDropdown &&

          <LOGIN_WITH_EMAIL />

        }



        {/* Not Member Signup Link */}
        <div className='not_a_member'>

          <h5> Don't have an account?</h5>

          <STYLED_LINK to='/signup'>
            <h5 className='sign_up_link'>Sign Up</h5>
          </STYLED_LINK>
        </div>


      </STYLED_FORM>

    </STYLED_JSX_WRAPPER>

  )
}
