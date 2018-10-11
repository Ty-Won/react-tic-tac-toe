import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Component, tells react what to display and re-render
class ShoppingList extends React.Component { 
    render() {
        return (
            <div className="shopping-list">
                <hi>Shopping List for {this.props.name}</hi>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}
class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }

class Board extends React.Component {
    renderSquare(i){
        return <Square value={i} />;
    }

    render(){
        const status = 'Next Player: X';

        return (
            <div>
                <div className='status'>{status}</div>
                
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
    render(){
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{}</div>
                    <ol>{}</ol>
                </div>

            </div>
        )
    }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

