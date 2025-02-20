import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Constants from 'expo-constants'

// ✅ Kontrollera att `expoConfig.extra` finns
if (!Constants.expoConfig || !Constants.expoConfig.extra) {
  throw new Error('Firebase-konfigurationen saknas i app.json')
}

// 🔹 Firebase konfiguration
const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.API_KEY,
  authDomain: Constants.expoConfig.extra.AUTH_DOMAIN,
  projectId: Constants.expoConfig.extra.PROJECT_ID,
  storageBucket: Constants.expoConfig.extra.STORAGE_BUCKET,
  messagingSenderId: Constants.expoConfig.extra.MESSAGING_SENDER_ID,
  appId: Constants.expoConfig.extra.APP_ID,
}

// 🔹 Initiera Firebase en gång
const app = initializeApp(firebaseConfig)

// 🔹 Se till att auth använder AsyncStorage för att spara sessioner
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})

export { app, auth }


// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: Constants.expoConfig.extra.API_KEY,
//   authDomain: Constants.expoConfig.extra.AUTH_DOMAIN, //'project-id.firebaseapp.com',
//   databaseURL: 'https://project-id.firebaseio.com',
//   projectId: Constants.expoConfig.extra.PROJECT_ID,
//   storageBucket: Constants.expoConfig.extra.STORAGE_BUCKET, //'project-id.appspot.com',
//   messagingSenderId: Constants.expoConfig.extra.MESSAGING_SENDER_ID,
//   appId: Constants.expoConfig.extra.APP_ID,
//   measurementId: 'G-measurement-id',
// }

// const app = initializeApp(firebaseConfig)
// // For more information on how to access Firebase in your project,
// // see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// // Exportera autentisering
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// })

// export { auth }