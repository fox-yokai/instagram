// import 'tailwindcss/tailwind.css'
import '../../styles/globals.css'

import FirebaseContext from '../context/firebase';
import firebase from '../lib/firebase';

function MyApp({ Component, pageProps }) {
  return <FirebaseContext.Provider value={{ firebase }}>
    <Component {...pageProps} />
  </FirebaseContext.Provider>
}

export default MyApp
