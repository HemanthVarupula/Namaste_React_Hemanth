import reactDom from "react-dom/client";
import { Header } from "./Header";
import { Body } from "./Body";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import { About } from "./About";
import { Error } from "./Error";
import { Contact } from "./Contact";
import { Restaurentamenu } from "./RestaurentMenu";
import { lazy,Suspense } from "react";
import { Provider } from "react-redux";
import { appstore } from "../util/appstore.js";
import { Cart } from "./Cart.js";
// import Greet from "./Greet";

//loads only when it called 
const Greet=lazy(()=>import("./Greet.js"))
const App=()=>{
    return (
        <Provider store={appstore}>
        <>
           <Header/>
           <Outlet/>
        </>
        </Provider>
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
        },
        {
            path:"/greet",
            element:<Suspense fallback={"Loading"}><Greet/></Suspense>
        },
        {
            path:"/cart",
            element:<Cart/>
        }
        ],
        errorElement:<Error/>
    },
    
])

const root=reactDom.createRoot(document.getElementById("root"));
root.render( <RouterProvider router= {appRouter}/>)