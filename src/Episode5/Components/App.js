import reactDom from "react-dom/client";
import { Header } from "./Header";
import { Body } from "./Body";
const App=()=>{
    return (
        <>
           <Header/>
           <Body/>
        </>
    )
}
const root=reactDom.createRoot(document.getElementById("root"));
root.render(<App/>)