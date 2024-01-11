import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from "./Main";
import MainContents from "./pages/MainContents";
import Recommand from "./components/main/recommand/Recommand";
import Join from "./pages/JoinPage";
import Rest from "./components/main/rest/Rest";
import VisualSlide from "./components/main/visual/VisualSlide";
import SearchPage from "./pages/SearchPage";
import Fiesta from "./components/main/fiesta/Fiesta";
import FestivalSubPage from "./pages/FestivalSubPage";
import FestivalDetailPage from "./pages/FestivalDetailPage";
import SubPage from './pages/SubPage';
import Login from "./pages/LoginPage";
import Mypage from "./pages/Mypage";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element:
          <MainContents>
            <VisualSlide/>
            <Recommand />
            <Rest />
            <Fiesta/>
          </MainContents>
      },
      {
        path: "/join",
        element:
          <Join />
      },
      {
        path: "/login",
        element:
        <Login />
      },
      {
        path: "/mypage",
        element:
        <Mypage />
      },
      {
        path:"/search/:keyword",
        element:
        <SearchPage/>
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
      {
        path:"/lodging",
        element:
        <MainContents>
          <SubPage/>
        </MainContents>
      },
      {
        path:"/restaurant",
        element:
        <MainContents>
          <SubPage/>
        </MainContents>
      },
      {
        path:"/tourist",
        element:
        <MainContents>
          <SubPage/>
        </MainContents>
      },
      {
        path:"/cultural",
        element:
        <MainContents>
          <SubPage/>
        </MainContents>
      },
      {
        path:"/sports",
        element:
        <MainContents>
          <SubPage/>
        </MainContents>
      },
      {
        path:"/shopping",
        element:
        <MainContents>
          <SubPage/>
        </MainContents>
      },
    ]
  }

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;