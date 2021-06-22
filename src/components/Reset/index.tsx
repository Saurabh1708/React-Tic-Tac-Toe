import React from "react"
import "./reset.css"

type myProps = {
    onClick: () => void;
}

class Reset extends React.Component<myProps>{
    constructor(props: myProps ){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.props.onClick();
    }

    render(){
        return (
            <button className="reset122btn" onClick={this.clickHandler}>
                Reset
            </button>
        )
    }
}

export default Reset;