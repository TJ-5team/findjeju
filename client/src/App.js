import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from "./Main";
import MainContents from "./pages/MainContents";
import Recommand from "./components/main/recommand/Recommand";
import Fiesta from "./components/main/fiesta/Fiesta";
import FestivalSubPage from "./pages/FestivalSubPage";
import FestivalDetailPage from "./pages/FestivalDetailPage";

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
          <Fiesta/>
        </MainContents>
      },
      {
        path:"/festival",
        element:
        <MainContents>
          <FestivalSubPage/>
        </MainContents>
      },
      {
        path:"/festival/:contentid",
        element:
        <MainContents>
          <FestivalDetailPage/>
        </MainContents>
      },
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
