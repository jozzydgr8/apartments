import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        </Route>


        <Route path="/apartments" element={<Layout/>}>
        <Route index element={<Home/>} />
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
