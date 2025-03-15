import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { db } from './firebase-config'
import {doc, getDoc} from 'firebase/firestore'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import HomePageComponent from './components/HomePageComponent'
import AboutComponent from './components/AboutComponent'
import ContactComponent from './components/ContactComponent'

function App() {

  const getTodaysDocument = async () => {

    const today = String(new Date().toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" }));

    try {
      const docRef = doc(db, "waitTimes", today);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log(docSnap.data());
        return docSnap.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving document:", error);
      return null;
    }
  };

  useEffect(() => {
    getTodaysDocument()
  }, [])
  

  return (
    <>
      <HeaderComponent />

      <Routes>
        <Route path='/' element={ <HomePageComponent /> } />
        <Route path='/about' element={ <AboutComponent /> } />
        <Route path='/contact' element={ <ContactComponent /> } />
      </Routes>

      <FooterComponent />
    </>
  )
}

export default App
