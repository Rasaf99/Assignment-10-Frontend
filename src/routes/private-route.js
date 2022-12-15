// hook
import { useContext } from 'react'

// router
import { Navigate, useLocation } from 'react-router-dom'

// context
import { AuthContext } from 'contexts/auth-context'

// components
import { LOADING_SPINNER } from 'components/reusable/for-any-project'




// ✅ functional component
export default function PRIVATE_ROUTE({ children }) {

  // AuthContext
  const { user, loading } = useContext(AuthContext)

  // router
  const location = useLocation()

  // loading state
  if (loading) {
    return <LOADING_SPINNER />
  }

  if (user && user.uid) {
    return children
  }


  return (

    <Navigate to='/login' state={{ from: location }} replace />

  )

}


