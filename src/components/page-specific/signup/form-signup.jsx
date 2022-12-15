// router
import { useNavigation, useLocation } from 'react-router-dom';

// useState
import { useContext, useState } from 'react';


// context
import { AuthContext } from 'contexts/auth-context';



// styles
import { STYLED_JSX_WRAPPER, STYLED_FORM } from './style'


// icons
import EmailIcon from '@mui/icons-material/Email';
import GoogleIcon from '@mui/icons-material/Google';

// components
import { Button, Divider } from '@mui/material'

import STYLED_LINK from 'styles/styled-components/router-link/router-link';
import SIGNUP_WITH_EMAIL from './signup-with-email/signup-with-email';
import LOGO from 'components/reusable/for-any-project/logo/logo';





// ✅ functional component
export default function SIGNUP() {

  // context
  const { signInWithGoogle } = useContext(AuthContext)

  // router
  const navigate = useNavigation()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'


  // state to show and hide dropdown
  const [showDropdown, setShowDropdown] = useState(false)

  const handleClick = () => {

    setShowDropdown(!showDropdown)
  }



  // Google Signin
  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user)
        navigate(from, { replace: true })
      })

  }


  return (

    <STYLED_JSX_WRAPPER>


      <STYLED_FORM>

        <LOGO />



        <h3 className='form_title'>Sign up</h3>

        <Button onClick={handleGoogleSignin} variant="contained" startIcon={<GoogleIcon />}>
          Signup With Google
        </Button>

        <Divider />



        <Button onClick={handleClick} variant="contained" startIcon={<EmailIcon />}>
          Signup With Email
        </Button>

        {showDropdown &&

          <SIGNUP_WITH_EMAIL navigate={navigate} from={from} />

        }




        {/* extra (privacy policy & have an account) */}
        <div className='extra'>

          <h5>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</h5>

          <div className='have_an_account'>

            <h5> Have an account already?</h5>

            <STYLED_LINK to='/login'>
              <h5 className='log_in_link'>Log in</h5>
            </STYLED_LINK>

          </div>

        </div>


      </STYLED_FORM>

    </STYLED_JSX_WRAPPER>

  )
}
