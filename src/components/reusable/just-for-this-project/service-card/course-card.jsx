
// styles
import STYLED_LINK from 'styles/styled-components/router-link/router-link';

import { STYLED_ALL_CARDS_WRAPPER, STYLED_A_CARD } from './style'

// components
import { Button, Typography } from '@mui/material';





// ✅ functional component
export default function COURSE_CARD({ data }) {


    return (


        <>

            <STYLED_ALL_CARDS_WRAPPER>



                {data.map((service) => {

                    return (

                        <STYLED_A_CARD key={service._id}>

                            {/* card_image_wrapper */}
                            <div className='card_image_wrapper'>

                                <img className='card_image' src={service.image_link} alt='quiz_name' />

                            </div>

                            {/* card_all_content_except_image */}
                            <div className='card_all_content_except_image'>

                                <h4> {service.title}</h4>

                                <p>Price: {service.price} $ </p>

                                <STYLED_LINK to={`/course/details/${service._id}`}>

                                    <Button size="small" color="primary" variant='contained'>
                                        View Details
                                    </Button>

                                </STYLED_LINK>

                            </div>


                        </STYLED_A_CARD>

                    )


                })}


            </STYLED_ALL_CARDS_WRAPPER>

        </>
    )
}