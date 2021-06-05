import "./App.css";
import Box from "./components/box.jsx";
import React from "react";
import Reset from "./components/reset"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      mat: [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
      ],
      scoreA:0,
      scoreB:0,

    };
    this.handleChange = this.handleChange.bind(this);
    this.onClickReset =this.onClickReset.bind(this);
  }

  getMatrix(mat, row, col) {
    mat[row][col] = this.state.count % 2;
    return mat;
  }

  checkHorizontal() {
    for (let i = 0; i < 3; ++i) {
      if (this.state.mat[i][0] != -1) {
        let j = 0;
        for (; j < 3; ++j) {
          if (this.state.mat[i][j] != this.state.mat[i][0]) {
            break;
          }
        }
        if (j == 3) return this.state.mat[i][0];
      }
    }
    return -1;
  }

  checkVertical() {
    for (let j = 0; j < 3; ++j) {
      if (this.state.mat[0][j] != -1) {
        let i = 0;
        for (; i < 3; ++i) {
          if (this.state.mat[i][j] != this.state.mat[0][j]) break;
        }
        if (i == 3) return this.state.mat[0][j];
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
    if (i == 3) {
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
    if (i == 3) {
      return this.state.mat[0][2];
    }

    return -1;
  }

  check() {
    //check for Horizontal
    const h = this.checkHorizontal();
    if (h !== -1) return h;

    const v = this.checkVertical();
    if (v !== -1) return v;

    const d = this.checkDiagonal();
    if (d !== -1) return d;

    return -1;
  }

  checkAndUpdateScore() {
    const c = this.check();
    if (c != -1) {
      if (c == 0){
        console.log("O wins!");
        this.setState({
          scoreA: this.state.scoreA + 1,
        });
      }
        
      else
        this.setState({
          scoreB: this.state.scoreB + 1,
        });
    }
  }

  handleChange(row, col) {
    console.log("table click received", row, col);
    const matrix = this.getMatrix(this.state.mat, row, col);
    this.setState({
      mat: matrix,
      count: this.state.count + 1,
    }, this.checkAndUpdateScore);
  }

  onClickReset(){
    this.setState({
      count: 0,
      mat: [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
      ]
    },)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Tic-Tac-Toe </h1>
          <h2> Scores</h2>

          <div className="score">
            <div className="score-item left">A</div>
            <div className="score-item right">B</div>
            <div className="score-item left points">{this.state.scoreA}</div>
            <div className="score-item right points">{this.state.scoreB}</div>
          </div>
        </header>

        <div className="table">
          <Box
            count={this.state.count}
            row={1}
            col={1}
            value={this.state.mat[0][0]}
            onClick={this.handleChange}
          />
          <Box
            count={this.state.count}
            row={1}
            col={2}
            value={this.state.mat[0][1]}
            onClick={this.handleChange}
          />
          <Box
            count={this.state.count}
            row={1}
            col={3}
            value={this.state.mat[0][2]}
            onClick={this.handleChange}
          />
          <Box
            count={this.state.count}
            row={2}
            col={1}
            value={this.state.mat[1][0]}
            onClick={this.handleChange}
          />
          <Box
            count={this.state.count}
            row={2}
            col={2}
            value={this.state.mat[1][1]}
            onClick={this.handleChange}
          />
          <Box
            count={this.state.count}
            row={2}
            col={3}
            value={this.state.mat[1][2]}
            onClick={this.handleChange}
          />
          <Box
            count={this.state.count}
            row={3}
            col={1}
            value={this.state.mat[2][0]}
            onClick={this.handleChange}
          />
          <Box
            count={this.state.count}
            row={3}
            col={2}
            value={this.state.mat[2][1]}
            onClick={this.handleChange}
          />
          <Box
            count={this.state.count}
            row={3}
            col={3}
            value={this.state.mat[2][2]}
            onClick={this.handleChange}
          />
        </div>
        <Reset  onClick={this.onClickReset}/>
      </div>
    );
  }
}

export default App;
