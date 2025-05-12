import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { db } from './firebase-config'
import {doc, getDoc} from 'firebase/firestore'
import { DateTime } from 'luxon'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import HomePageComponent from './components/HomePageComponent'
import AboutComponent from './components/AboutComponent'
import SettingsComponent from './components/SettingsComponent'

function App() {

  const [ridesObject, setRidesObject] = useState({name: 'John Doe'})

  const [rideFilter, setRideFilter] = useState({})

  const [dataNotAvailable, setDataNotAvailable] = useState(false)
  
  const rideNames = Object.keys(ridesObject[Object.keys(ridesObject)[0]]).sort()

  const getTodaysDocument = async () => {

    // const now = DateTime.now().setZone('America/Los_Angeles').toFormat('yyyy-MM-dd');
    const yesterday = DateTime.now().setZone('America/Los_Angeles').minus({ days: 1 }).toFormat('yyyy-MM-dd');

    const today = String(new Date().toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" }));

    try {
      const docRef = doc(db, "waitTimes", today);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log(docSnap.id);
        // rides = docSnap.data()['0801']
        setRidesObject(docSnap.data())
        console.log(ridesObject)
        setDataNotAvailable(false)
        return docSnap.data();
      } else {
        console.log("Today's document not available. Attempting Yesterday's data.");
        console.log(ridesObject);
        setDataNotAvailable(true)

        const yesterdaysDocRef = doc(db, "waitTimes", yesterday);
        const yesterdaysDocSnap = await getDoc(yesterdaysDocRef);

        if (yesterdaysDocSnap.exists()) {
          console.log(yesterdaysDocSnap.id);
          setRidesObject(yesterdaysDocSnap.data())
          console.log(ridesObject)

          return yesterdaysDocSnap.data();
      }}
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
        <Route path='/' element={ <HomePageComponent ridesObject={ridesObject} getTodaysDocument={getTodaysDocument} rideFilter={rideFilter} dataNotAvailable={dataNotAvailable} /> } />
        <Route path='/about' element={ <AboutComponent /> } />
        <Route path='/settings' element={ <SettingsComponent rideFilter={rideFilter} setRideFilter={setRideFilter} rideNames={rideNames} /> } />
      </Routes>

      <FooterComponent />
    </>
  )
}

export default App
