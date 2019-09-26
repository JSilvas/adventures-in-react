import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square (props) {
  // When we modified the Square to be a function component, 
  // we also changed onClick={() => this.props.onClick()} 
  // to a shorter onClick={props.onClick} (note the lack of 
  // parentheses on both sides).
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  updateSelf() {
    return console.log('arbitrary ref test from board');
  }

  render() {
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   status = `Winnner: ${winner}`;
    // } else {
      //   status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    // }

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {

  static _isMounted = false

  state = {
    history: [{
      squares: Array(9).fill(null),
    }],
    xIsNext: true,
    winner: '',
    stepNumber: 0,
  };

  componentDidMount() {
    // convention is use underscore for private methods to Current component
    this._isMounted = true;
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  // ==============================
  
  handleClick(i) {
    // This variable has been "De-structured" to simplify code
    // const { stepNumber } = this.state;
    // let { history } = this.state;
    // const history = this.state.history.slice(0, this.state.stepNumber + 1);

    // console.log('history', history);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice(); // We use .slice to create a copy of the array
    console.log('current+squares', current, squares);
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    
    // Use this conditional check to validate that the component is 
    // mounted before any statements run
    // if (this._isMounted) {
      this.setState({
        history: history.concat([{
          squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    // };
    // [null,null,null,X,null,null,null,null,null];
    calculateWinner(squares);
    console.log('squares', squares);
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  // calculateWinner(squares) {
  //   const { xIsNext } = this.state;
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let i = 0; i < lines.length; i++) {
  //     const [a, b, c] = lines[i];
  //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //       this.setState({ winner: xIsNext ? 'X' : 'O' });
  //     }
  //   }
  // }

  render() {
    //  here the state has been lifted to the game component
    // in order to pass down props and track board history
    const { history, xIsNext, stepNumber } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        `Go to move # ${move}` :
        `Go to game start`;
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    // This just an example of using a ref
    // if (this.refs.board && this.refs.board.squares) this.refs.board.updateSelf();

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            /* Test Ref property allows you to  */
            // ref="board"
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render( <Game />, document.getElementById('root'));

// ========================================
// Helper Functions - Function declarations are hoisted, expressions are not

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}