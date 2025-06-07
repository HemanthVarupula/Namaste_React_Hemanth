import React from "react";

class Dummy extends  React.Component{
    constructor(props){
        super(props)
        console.log(this.props.name+"child constructor called")
    }
     componentDidMount(){
        console.log(this.props.name+"child component mount")
    }
    render(){
        console.log(this.props.name+"child render called")
        const {name}=this.props;
        return(
            <>
                <h1>You are indise dummy!</h1>
                <h2>{name}</h2>
            </>
        )
    }
    componentWillUnmount(){
        console.log(this.props.name+"child component unmount")
    }
}


export default Dummy;