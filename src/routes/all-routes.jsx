import { createBrowserRouter } from "react-router-dom";


// pages
import LANDING_PAGE from "pages/landing-page";
import NOT_FOUND_PAGE from "pages/not-found-page";
import SERVICE_CARDS_PAGE from "pages/course-cards-page";
import SERVICE_DETAILS_PAGES from "pages/course-details-page";
import LOGIN_PAGE from "pages/login-page";
import SIGNUP_PAGE from "pages/signup-page";
import PRIVATE_ROUTE from "./private-route";

import MY_PROFILE_PAGE from "pages/profile-page";
import BLOG_PAGE from "pages/blog-page";
import CHECKOUT_PAGE from "pages/checkout-page";




// all routes
const allRoutes = createBrowserRouter([



    /* ✅ Landing Page */
    {
        path: "/",
        element: <LANDING_PAGE />,
    },


    /* ✅ Not found Page */
    {
        path: "*",
        element: <NOT_FOUND_PAGE />,
    },


    /* ✅ Login Page */
    {
        path: "/login",
        element: <LOGIN_PAGE />,
    },


    /* ✅ Signup Page */
    {
        path: "/signup",
        element: <SIGNUP_PAGE />,
    },




    /* ✅ Course Cards Page*/
    {
        path: "/course/cards",
        element: <SERVICE_CARDS_PAGE />,
    },


    /* ✅ Course Details Pages */
    {
        path: "/course/details/:id",
        element: <SERVICE_DETAILS_PAGES />,
    },


    /* ✅ Checkout Page */
    {
        path: "/checkout",
        element: (
            <PRIVATE_ROUTE>
              <CHECKOUT_PAGE />
            </PRIVATE_ROUTE>
        )
    },





    /* ✅ My Profile Page */
    {
        path: "/my-profile",
        element: (
            <PRIVATE_ROUTE>
                <MY_PROFILE_PAGE />
            </PRIVATE_ROUTE>
        )
    },


    /* ✅ Blog */
    {
        path: "/blog",
        element: <BLOG_PAGE />
    }


]);



export default allRoutes