import reactDom from "react-dom/client";
import { Header } from "./Header";
import { Body } from "./Body";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import { About } from "./About";
import { Error } from "./Error";
import { Contact } from "./Contact";
import { Restaurentamenu } from "./RestaurentMenu";
const App=()=>{
    return (
        <>
           <Header/>
           <Outlet/>
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
               {
        path:"/",
        element:<Body/>
        },
            {
        path:"/about",
        element:<About/>
          },
        {
        path:"/contact",
        element:<Contact/>
        },
        {
            path:"/restaurent/:resId",
            element:<Restaurentamenu/>
        }
        ],
        errorElement:<Error/>
    },
    
])

const root=reactDom.createRoot(document.getElementById("root"));
root.render( <RouterProvider router= {appRouter}/>)