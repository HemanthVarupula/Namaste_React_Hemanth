import React from "react";
import ReactDom from "react-dom/client";

const Greet=()=>{
    return (
        <h1>hello world</h1>
    )
}

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<Greet/>)