import "./styles/global.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Menu from "./component/Menu/Menu";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import Suser from "./pages/suser/Suser";
import Sproduct from "./pages/sproduct/Sproduct";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient()
function App() {
  const Layout=()=>{
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
           <Menu/>
          </div>
          <div className="contentContainer">
          <QueryClientProvider client={queryClient}>
             <Outlet/>
          </QueryClientProvider>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/users',
          element:<User/>
        },
        {
          path:'/products',
          element:<Product/>
        },
        {
          path:'/product/:id',
          element:<Sproduct/>
        },
        {
          path:'/user/:id',
          element:<Suser/>
        },
      ]
    },
    {
      path:'/login',
      element:<Login/>
    }
  ]);
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
