import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from "./pages/Main";


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
