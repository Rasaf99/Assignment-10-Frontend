import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";
import SERVICE_DETAILS from "components/page-specific/course-details/course-details";



// ✅ service page
export default function COURSE_DETAILS_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Course Details</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <SERVICE_DETAILS />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}