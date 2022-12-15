// mui components
import { Box, Button } from '@mui/material'

// styled components
import { STYLED_CALL_TO_ACTION_SECTION, STYLED_SVG_LANDING_PAGE_ILLUSTRATION } from './style.js'


// hook
import { useTheme } from '@mui/material';


// mui color
import { blueGrey, pink, teal } from '@mui/material/colors'

import { useContext } from 'react';
import { AuthContext } from 'contexts/auth-context.js';

import STYLED_LINK from 'styles/styled-components/router-link/router-link.js';




// ✅ functional l component
export default function LANDING() {

  const { user } = useContext(AuthContext)

  const theme = useTheme()


  return (

    <>


      <STYLED_CALL_TO_ACTION_SECTION>


        <div className='left'>

          <h2 className='_text_margin _font_yatra'>Learn Programming from world's best teachers!</h2>

          <h5 className='_text_margin_2xl _font_monospace'> Want to learn  programming languages but not getting good resources? Your wait is over. Some of the world's best teacher has collabed to make some best programming courses! Hurry up and get premium access of the best programming courses. Happy learning!   </h5>



          {!user?.email &&

            <STYLED_LINK to='/signup'>
              <Button variant='contained'>Register Now</Button>
            </STYLED_LINK>

          }


        </div>


        <div className='right'>


          {theme.palette.mode === 'dark' ?

            <STYLED_SVG_LANDING_PAGE_ILLUSTRATION firstColor={teal[100]} secondColor={blueGrey[700]} thirdColor={pink[400]} fourthColor={blueGrey[100]} fifthColor={blueGrey[500]} />
            :

            <STYLED_SVG_LANDING_PAGE_ILLUSTRATION firstColor={teal[300]} secondColor={blueGrey[900]} thirdColor={pink[400]} fourthColor={blueGrey[300]} fifthColor={blueGrey[800]} />
          }


        </div>



      </STYLED_CALL_TO_ACTION_SECTION>



   


    </>

  )
}