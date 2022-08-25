import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App'
// @ts-ignore
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store/store'
import {initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";

//initialize firebase
const firebaseApp = initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
})

export const firebaseDb = getFirestore(firebaseApp)
export const firebaseAuth = getAuth(firebaseApp)

//setup FirebaseUI Auth
let ui = new firebaseui.auth.AuthUI(firebaseAuth);
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult(authResult: any, redirectUrl?: string): boolean {
      console.log(authResult)
      return false;
    }
  },
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
}
firebaseAuth.onAuthStateChanged((user)=>{
  if(user){
    document.getElementById('root')!.style.display = 'block';
  }
  else{
    document.getElementById('root')!.style.display = 'none';
    ui.start('#firebaseui-auth-container', uiConfig);
  }
})

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
