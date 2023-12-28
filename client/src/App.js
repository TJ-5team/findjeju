import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from "./Main";
import MainContents from "./pages/MainContents";


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:"/",
        element:<MainContents />
      }
    ]
  }

])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
