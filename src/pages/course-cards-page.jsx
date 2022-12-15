import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";
import SERVICE_CARDS from "components/page-specific/course-cards/course-cards";


// ✅ service page
export default function COURSE_CARDS_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Course Cards</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <SERVICE_CARDS />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}