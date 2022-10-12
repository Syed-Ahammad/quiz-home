import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/home/Home";
import Statistics from "./components/statistics/Statistics";
import Blogs from "./components/blog/Blogs";
import Questions from './components/questions/Questions';
import ErrorPage from "./components/errorPage/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/home",
          element: <Home></Home>
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/quiz/:quizId",
          element: <Questions></Questions>,
          loader: async({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        }
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
