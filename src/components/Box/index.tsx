import React from "react";
// use type
type myProps={
    value: number;
    count: number;
    row: number;
    col: number;
    onClick: (row: number, col: number)=> void
}


class Box extends React.Component<myProps> {

    constructor(props: myProps) {
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
        let val:string ="";
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