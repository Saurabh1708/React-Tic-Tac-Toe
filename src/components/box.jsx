import React from "react";


class Box extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {

        if (this.props.value!==-1) {
            //value already provided
            return;
        }

        this.props.onClick((this.props.row - 1), (this.props.col - 1));
        
    }

    render() {
        let val="";
        if(this.props.value===0)
        val="O";
        else if(this.props.value===1)
        val="X";
        return (
            <div className={`row-${this.props.row} col-${this.props.col}`} onClick={this.handleClick}>
                <span> {val} </span>
            </div>
        )
    }
}

export default Box;