import "./App.css";
import Box from "../Box";
import React from "react";
import Reset from "../Reset"


interface myState{
  count: number;
  mat: number[][];
  scoreA: number;
  scoreB: number;
}
interface myProps{

}


class App extends React.Component<myProps,myState> {

  state:myState = {
    count: 0,
    mat: [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ],
    scoreA: 0,
    scoreB: 0,

  };
  constructor(props: myProps) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.onClickReset = this.onClickReset.bind(this);
    this.getBoxes = this.getBoxes.bind(this);

  }

  getMatrix(mat:number[][], row:number, col:number) {
    mat[row][col] = this.state.count % 2;
    return mat;
  }

  checkHorizontal() {
    for (let i = 0; i < 3; ++i) {
      if (this.state.mat[i][0] !== -1) {
        let j = 0;
        for (; j < 3; ++j) {
          if (this.state.mat[i][j] !== this.state.mat[i][0]) {
            break;
          }
        }
        if (j === 3) return this.state.mat[i][0];
      }
    }
    return -1;
  }

  checkVertical() {
    for (let j = 0; j < 3; ++j) {
      if (this.state.mat[0][j] !== -1) {
        let i = 0;
        for (; i < 3; ++i) {
          if (this.state.mat[i][j] !== this.state.mat[0][j]) break;
        }
        if (i === 3) return this.state.mat[0][j];
      }
    }
    return -1;
  }

  checkDiagonal() {
    let i = 1;
    for (; i < 3; ++i) {
      if (
        this.state.mat[i][i] === -1 ||
        this.state.mat[i][i] !== this.state.mat[0][0]
      )
        break;
    }
    if (i === 3) {
      return this.state.mat[0][0];
    }
    i = 1;
    for (; i < 3; ++i) {
      if (
        this.state.mat[i][2 - i] === -1 ||
        this.state.mat[i][2 - i] !== this.state.mat[0][2]
      )
        break;
    }
    if (i === 3) {
      return this.state.mat[0][2];
    }

    return -1;
  }

  check() {
    //check for Horizontal
    const h:number = this.checkHorizontal();
    if (h !== -1) return h;

    const v = this.checkVertical();
    if (v !== -1) return v;

    const d = this.checkDiagonal();
    if (d !== -1) return d;

    return -1;
  }

  checkAndUpdateScore() {
    const c:number = this.check();
    if (c !== -1) {
      if (c === 0) {
        console.log("O wins!");

        this.setState({
          scoreA: this.state.scoreA + 1,
        });
      }

      else {
        console.log("X wins!");
        this.setState({
          scoreB: this.state.scoreB + 1,
        });
      }
      if (c === 0)
        alert("O wins")
      else
        alert("X wins")
      this.onClickReset();
    }
  }

  handleChange(row:number, col:number) {
    const matrix = this.getMatrix(this.state.mat, row, col);
    this.setState({
      mat: matrix,
      count: this.state.count + 1,
    }, this.checkAndUpdateScore);
  }

  onClickReset() {
    this.setState({
      count: 0,
      mat: [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
      ]
    })
  }

  getBoxes=():JSX.Element[]=> {
    let output:JSX.Element[] = [];
    for (let i = 1; i <= 3; ++i) {
      for (let j = 1; j <= 3; ++j) {
        output.push(
          <Box
            count={this.state.count}
            row={i}
            col={j}
            value={this.state.mat[i - 1][j - 1]}
            onClick={this.handleChange}
          >

          </Box>
        )
      }

    }
    return (
      output
    )
  }

  render() {
    return (
      <div className="app22Container">
        <header className="app47Header">
          <h1> Tic-Tac-Toe </h1>
          <h2> Scores</h2>

          <div className="app90Score">
            <div className="app99ScoreItem app29Left">A</div>
            <div className="app99ScoreItem app29Right">B</div>
            <div className="app99ScoreItem app29Left app67Points">{this.state.scoreA}</div>
            <div className="app99ScoreItem app29Right app67Points">{this.state.scoreB}</div>
          </div>
        </header>

        <div className="app87Table">
          {this.getBoxes()}
        </div>

        <Reset onClick={this.onClickReset} />
      </div>
    );
  }
}

export default App;
