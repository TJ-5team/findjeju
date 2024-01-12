import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from "./Main";
import MainContents from "./pages/MainContents";
import Recommand from "./components/main/recommand/Recommand";
import Weather from "./components/main/weather/Weather";
import TripCourse from "./components/tripCourse/TripCourse";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:"/",
        element:
        <MainContents>
          <Recommand/>
          <Weather/>
          <TripCourse/>
        </MainContents>
      },
      {
        path:"/coures",
        element: <TripCourse />
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
