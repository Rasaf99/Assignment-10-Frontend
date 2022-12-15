// mui
import { useTheme } from '@mui/material'

// style
import { STYLED_LOGO } from './style'

// component
import STYLED_LINK from 'styles/styled-components/router-link/router-link'

// icon
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';




// ✅ functional component
export default function LOGO(props) {

    const theme = useTheme()

  

    return (

        <>

            {/* Logo & Title */}

            <STYLED_LINK to='/'>

                <STYLED_LOGO>

                    <OndemandVideoIcon sx={{width:'1.8rem' , height:'1.8rem'}}/>
            
                    <h4 className='_font_lobster'>CourseTube</h4>

                </STYLED_LOGO>

            </STYLED_LINK>

        </>

    )
}





