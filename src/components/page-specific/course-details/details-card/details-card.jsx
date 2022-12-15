import STYLED_LINK from "styles/styled-components/router-link/router-link";


// styles
import { whole_component_css, all_contents_css, poster_image_wrapper_css, poster_img_css, title_css, a_info_section_css, info_title_css, info_value_css, everything_without_poster_title_css } from './style'

// components
import { Box, Button, Divider, Typography } from "@mui/material";



// ✅ functional component
export default function DETAILS_CARD({ data, id_from_params }) {




    // ✅ jsx
    return (

        <>


            <Box sx={{ ...whole_component_css }}>


            
                <Box sx={{ ...all_contents_css }}>


                    <Box sx={{ ...poster_image_wrapper_css }}>
                           
                        <Box component="img" sx={{ ...poster_img_css }} src={data.image_link} alt={data.title} />
                        
                    </Box> 



                    <Typography variant="h3" sx={{ ...title_css }}>{data.title}</Typography>



                    <Box sx={{ ...everything_without_poster_title_css }}>

            
                        {/* Course Topic */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Course Topic
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.course_topic}
                            </Box>

                        </Box>

   
                        {/* Ratings */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Ratings
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.ratings}
                            </Box>

                        </Box>


                        {/* Price */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Price
                            </Box>

                            <Box sx={{ ...info_value_css }} >
                                {data.price}$
                            </Box>

                        </Box>

                        
                        {/* Already Enrolled */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Already Enrolled
                            </Box>

                            <Box sx={{ ...info_value_css }} >
                                {data.already_enrolled}
                            </Box>

                        </Box>



                        {/* Course Language */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Course Language
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.course_language}
                            </Box>

                        </Box>      

                        
                        {/* Instructor Name */}
                        <Box sx={{ ...a_info_section_css }}>

                            <Box sx={{ ...info_title_css }}>
                                Instructor Name
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.instructor_name}
                            </Box>

                        </Box>                       
   

                        {/* description */}
                        <Box sx={{ ...a_info_section_css, gridRow: 'span 2' }}>

                            <Box sx={{ ...info_title_css }} >
                                Description
                            </Box>

                            <Box sx={{ ...info_value_css }}>
                                {data.description}
                            </Box>

                        </Box>


                    </Box> 



                    <STYLED_LINK to='/checkout'>
                        <Button variant='contained'>Get Premium Access</Button>
                    </STYLED_LINK>



                </Box> 





            </Box> 
        </>

    )

}