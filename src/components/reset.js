import React from "react"
import "./reset.css"

class Reset extends React.Component{

    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    
    }

    clickHandler(){
        this.props.onClick();
    }


    render(){
        return (
            <button className="btn" onClick={this.clickHandler}>
                Reset
            </button>
           
        )
    }
}

export default Reset;