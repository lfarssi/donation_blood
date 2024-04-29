import { RouterProvider, createBrowserRouter } from "react-router-dom"
import routes from "./routes/index.jsx"

export default function App() {
 
  return (
    <RouterProvider router={routes}/>
  )
  
}