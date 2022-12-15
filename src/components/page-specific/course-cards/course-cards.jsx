// redux-toolkit
import { useFetchCoursesQuery } from "redux-toolkit/api/course-api"


// components
import { Box, Typography } from "@mui/material"

import { ERROR_TEXT, LOADING_SPINNER } from "components/reusable/for-any-project"

import SERVICE_CARD from "components/reusable/just-for-this-project/service-card/course-card"





// functional component
export default function COURSE_CARDS() {


    const { data, error, isLoading, isSuccess } = useFetchCoursesQuery()



    return (

        <Box>

            {

                /*  Immediately invoked anonymous function */
                (() => {

                    if (isLoading) {
                        return (
                            <LOADING_SPINNER />
                        )
                    }

                    else if (error) {
                        return (

                            <ERROR_TEXT text='Something is wrong.' />
                        )
                    }


                    else if (isSuccess) {

                        return (
                            <div>

                                <Typography variant='h4' sx={{ textAlign: 'center', color: 'primary.main', marginTop: '1rem' }}> All the courses </Typography>

                                <SERVICE_CARD data={data} />


                            </div>

                        )
                    }




                })()  /* End: Immediately invoked anonymous function */

            }

        </Box>

    )
}