import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import LayoutBase from "./assets/components/LayoutBase"
import Home from "./assets/components/naviPages/Homepage"
import Academic from "./assets/components/naviPages/Academic"
import Price from "./assets/components/naviPages/Price"
import Photos from "./assets/components/naviPages/Photos"
import Location from "./assets/components/naviPages/Location"
import About from "./assets/components/naviPages/About"
import ErrorPage from "./assets/components/ErrorPage"

function App() {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <LayoutBase />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "academic",
          element: <Academic />
        },
        {
          path: "price",
          element: <Price />
        },
        {
          path: "photos",
          element: <Photos />
        },
        {
          path: "location",
          element: <Location />
        },
        {
          path: "about",
          element: <About />
        }

      ],
      errorElement: <ErrorPage />
    }
  ])
  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}

export default App
