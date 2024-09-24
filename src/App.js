import {getFirestore, collection, onSnapshot, query, where} from "firebase/firestore";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { UseContextData } from './ContextFolder/Context/UseContextData';
import { Loading } from "./Components/Loading";
import { IdLayout } from "./Components/IdLayout";
import { UseContextAuth } from "./ContextFolder/Context/UseContextAuth";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messageingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebase method
export const db = getFirestore();
export const colRef = collection(db, 'apartment');
export const auth = getAuth();
export const userRef = collection(db, 'user')




function App() {
  const {dispatch, loading} = UseContextData();
  const { loading:load, dispatch:dis} = UseContextAuth();


  useEffect(() => {
    dispatch({ type: 'loading', payload: true });
  
    const unSubscribe = onSnapshot(colRef, (snapshot) => {
      // Create an array of documents with their data and ID
      const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  
      // Dispatch data after gathering all documents
      dispatch({ type: 'getData', payload: data });
      console.log(data);
  
      // Turn off loading state after data is loaded
      dispatch({ type: 'loading', payload: false });
    }, (error) => {
      console.error("Error fetching data:", error);
      dispatch({ type: 'loading', payload: false });
    });
  
    // Cleanup function to unsubscribe from the snapshot listener
    return () => unSubscribe();
  }, []);


  // check auth
  useEffect(()=>{
    dis({type:'loading', payload:true})
    const order = async ()=>{
      try{
        const unsubscribe = onAuthStateChanged(auth, user=>{
          if(user){
            const user = auth.currentUser;
            dis({type:'signUser', payload:user});
            console.log('signed in')
          }else{
            dis({type:'signUser', payload:null});
            console.log('logged out')
          }

        })
      }catch(error){
        console.error(error)
      }
    }

    order();

  
        
    
    return ()=>{
      order();
    }
  },[]);

  if(loading || load){
    return(<>
    <Loading/>
    </>)
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
       <>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path=":id" element={<IdLayout/>} />
        </Route>


        <Route path="/apartments" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path=":id" element={<IdLayout/>} />
        </Route>

      </>
    )
  )
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
