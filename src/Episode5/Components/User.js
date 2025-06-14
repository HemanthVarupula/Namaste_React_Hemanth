import React from "react"
import Dummy from "./Dummy";
export class User extends React.Component{
    constructor(props){
        console.log("parent constructor called")
        super(props)
         this.state={
        count:0,
        age:21,
        userinfo:{
            name:"Loading....",
            bio:"will update",
            avatar_url:null
        }
    };
    }

    incAge=()=>{
        this.setState(
            {
                age:this.state.age+3
            }
        )
    };
   increment=()=>{
    this.setState({
        count:this.state.count+1
    }
    )
    }
    async componentDidMount(){
        // this.gitdata()
        const data=await fetch("  https://api.github.com/users/HemanthVarupula");
        const json=await data.json();
        this.setState(
            {
                userinfo:json
            }
        )
    }
    componentDidUpdate(){
        console.log("UPDATE")
    }
    // gitdata=async ()=>{
    //     const data=await fetch("  https://api.github.com/users/HemanthVarupula");
    //     // console.log(await data.json());
    // }
    render(){
        console.log("parent render called")
        // const {name,Position}=this.props;
        const {name,bio,avatar_url}=this.state.userinfo;
               return (
              <>
              <img src={avatar_url}></img>
            <h1>{name}</h1>
            <h2>{bio}</h2>
            <button onClick={this.increment}><h2>you click me </h2>{this.state.count}</button>
            {/* <h3>{count}</h3> */}
            <h3>Tech stack- Html,Css,Js,React js,Node Js,Express Js,MongoDb,Sql</h3>
            <button onClick={this.incAge}>Age+3</button><h2>{this.state.age}</h2>
            {/* a new instances of class is created , these clases are bind together  */}
            <Dummy name={"hemanth"}/>
            <Dummy name={"Deepak"}/>
        </>
        )
      
    }
    componentWillUnmount(){
        console.log("parent component unmount")
    }
}