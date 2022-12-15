import { Helmet, HelmetProvider } from "react-helmet-async";

import MAIN_LAYOUT from "components/layout/main-layout";
import MY_PROFILE from "components/page-specific/my-profile/my-profile";



// ✅ service page
export default function MY_PROFILE_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>My Profile</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <MY_PROFILE />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}