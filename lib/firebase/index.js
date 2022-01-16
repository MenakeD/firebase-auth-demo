import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD9MxaQMiCin0bRttJ2Y15V9BiRlmuOkEc',
  authDomain: 'fir-auth-demo-a296b.firebaseapp.com',
  projectId: 'fir-auth-demo-a296b',
  storageBucket: 'fir-auth-demo-a296b.appspot.com',
  messagingSenderId: '499488735559',
  appId: '1:499488735559:web:d0d4339e9815e3ff268c62',
}

// Initialize Firebase

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage }
