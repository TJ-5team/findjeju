import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from "./Main";
import MainContents from "./pages/MainContents";
import Recommand from "./components/main/recommand/Recommand";
import VisualSlide from "./components/main/visual/VisualSlide";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:"/",
        element:
        <MainContents>
          <VisualSlide/>
          {/* <Recommand/> */}
        </MainContents>
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
