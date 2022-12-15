// hook
import { createContext, useEffect, useState } from 'react'

// firebase configuration
import app from '../firebase/firebase.init'


// firebase functions
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'


// getAuth()
const auth = getAuth(app)


// context
export const AuthContext = createContext()


// ✅ functional component
export default function UserContext({ children }) {

  // state to handle user info
  const [user, setUser] = useState({})

  // state to handle loading
  const [loading, setLoading] = useState(true)


  // GoogleAuthProvider()
  const googleProvider = new GoogleAuthProvider()

  
  /* ✨ Step by step authentication is starting from here ✨ */

  // 1. Create User (signup with email and password)
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // 2. Update Name (While signing up)
  const updateName = (name) => {
    setLoading(true)
    return updateProfile(auth.currentUser, { displayName: name })
  }

  // 3. Verify Email (Just after signup)
  const verifyEmail = () => {
    setLoading(true)
    return sendEmailVerification(auth.currentUser)
  }

  // 4. Google Signin
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // 5. Logout
  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }

  //6. Login with Password
  const signin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  //7. Forget Password
  const resetPassword = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  // useEffect
  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe()
    }
  }, [])


  // storing everything in an object which will passed through the context
  const authInfo = {
    user,
    createUser,
    updateName,
    verifyEmail,
    signInWithGoogle,
    logout,
    signin,
    resetPassword,
    loading,
  }

  // ✅ jsx
  return (

    <AuthContext.Provider value={authInfo}>

          {children}

    </AuthContext.Provider>

  )
}




