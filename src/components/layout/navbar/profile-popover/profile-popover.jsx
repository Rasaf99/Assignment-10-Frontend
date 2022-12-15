// hook
import { useState, useContext } from "react";

// context
import { AuthContext } from "contexts/auth-context";


// components
import { Avatar, Popover } from "@mui/material";

import POPOVER_CONTENT from "./popover-content/popover-content";
import { toast } from "react-toastify";



// ✅ functional component
export default function PROFILE_POPOVER() {


    const [showPopover, SetShowPopover] = useState(null);

    const handleClick = (event) => {
        SetShowPopover(event.currentTarget);
    }

    const handleClose = () => {
        SetShowPopover(null);
    }


    // AuthContext
    const { user, logout } = useContext(AuthContext)

    console.log(user)
    // handleLogout function
    const handleLogout = () => {

        // logout from AuthContext
        logout()
            .then(toast.success('User logged out!'))
            .catch(error => console.log(error))
    }


    return (

        <>
            <Avatar onClick={handleClick} src={user?.photoURL} alt={user?.displayName} />



            <Popover
                open={Boolean(showPopover)}
                anchorEl={showPopover}
                onClose={handleClose}

                anchorOrigin={{
                    vertical: 42,
                    horizontal: 'center',
                }}

                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}>


                <POPOVER_CONTENT handleLogout={handleLogout} />


            </Popover>

        </>

    )
}