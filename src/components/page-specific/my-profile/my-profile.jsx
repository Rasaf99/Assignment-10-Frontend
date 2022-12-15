import { Avatar, Box, Typography } from "@mui/material"
import { AuthContext } from "contexts/auth-context"
import { useContext } from "react"



// ✅
export default function MY_PROFILE(){

    const {user} = useContext(AuthContext)

    console.log(user)

    // ✅
    return(
        <>
          <Box sx={{display:'flex', flexDirection:'column', gap:'1rem', textAlign:'center', alignItems:'center', margin:'1rem', backgroundColor:'background.variation', padding:'1rem' }}>
          
             <Avatar src={user.photoURL} alt={user.displayName}/>
             <Typography> Name: {user.displayName}</Typography>
             <Typography> ID: {user.uid}</Typography>
             <Typography> Email: {user.email}</Typography>
             
          
          </Box>
        </>
    )
}