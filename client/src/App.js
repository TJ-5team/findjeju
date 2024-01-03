import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from "./Main";
import MainContents from "./pages/MainContents";
import Recommand from "./components/main/recommand/Recommand";
import Join from "./pages/JoinPage";
import Rest from "./components/main/rest/Rest";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element:
          <MainContents>
            <Recommand />
            <Rest />
          </MainContents>
      },
      {
        path: "/join",
        element:
          <Join />
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
