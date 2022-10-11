import "./App.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/home/Home";
import Statistics from "./components/statistics/Statistics";
import Blog from "./components/blog/Blog";
import Questions from './components/questions/Questions';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
      errorElement: (
        <div className="text-center">
          <h1>This page not found </h1>
          <Link className="btn" to={"/"}>
            <button>Back to Home</button>
          </Link>
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/blogs",
          element: <Blog></Blog>,
        },
        {
          path: "/quiz",
          element: <Questions></Questions>,
        }
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
