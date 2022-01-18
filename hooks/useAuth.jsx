import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth'
import { auth } from '../lib/firebase'

const userAuthContext = createContext()

export const UserAuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setAuthUser(currentUser)
    })
    return unsub
  }, [])

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = () => {
    return signOut(auth)
  }

  return (
    <userAuthContext.Provider
      value={{
        authUser,
        signUp,
        login,
        logOut,
        signInWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </userAuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(userAuthContext)
}
