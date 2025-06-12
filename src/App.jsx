import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import { Home, ErrorPage, LayoutBase, Academic, Price, Photos, About, Location } from "./assets/components"

function App() {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <LayoutBase />,
      children: [
        {
          index: true,
          element: <Home />
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
