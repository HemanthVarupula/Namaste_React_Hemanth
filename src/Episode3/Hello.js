// import React from 'react'
import ReactDOM from "react-dom/client"

const number=999;
function Greet(props){
    const {name}=props;
    return(
        <>
            <h1>{name}</h1>
            <h3>Bagunara , antha kulasa nee naaa</h3>
        </>
    )
}
const title=(
    <div>
        <h4>Namaste React</h4>
    </div>
)
const Hello = () => {
  return (
    <>
    <Greet name={"harry"}/>
    {title}
    {/* {Greet()} */}
      <h2>{number+1}</h2> 
        <h1>hello</h1>
    <Greet name={"Sruthi"}/>
    </>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root1"));

root.render(<Hello/>)

