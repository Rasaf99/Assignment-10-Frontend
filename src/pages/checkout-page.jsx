
import { Helmet, HelmetProvider } from "react-helmet-async";


import MAIN_LAYOUT from "components/layout/main-layout";
import CHECKOUT from "components/page-specific/checkout/checkout";


export default function CHECKOUT_PAGE() {

    return (
        <>
            <HelmetProvider>

                <Helmet>
                    <title>Blog</title>
                </Helmet>


                <MAIN_LAYOUT>
                    {/* Component */}
                    <CHECKOUT />
                </MAIN_LAYOUT>


            </HelmetProvider>
        </>
    )
}