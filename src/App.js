import React, { Component } from 'react'
export default class App extends Component {
  state = {
      squares: Array(9).fill(null),
       count: 0
  }

  handleClick = e => {
    let data = e.target.getAttribute('data-index');
    if(this.state.squares[data] !== ('X' || 'O'))
    {
      let list = this.state.squares;
      list[data] = (this.state.count % 2 === 0  ) ? 'X' : 'O';

      this.setState({
        squares: list,
        count: this.state.count + 1
      })
    }
  };

   divStyle = {
    maxWidth: '300px',
    display: 'flex',
    flexWrap: 'wrap'
  };

  itemStyle = {
    minWidth: '84px',
    minHeight: '84px',
    margin: '1px',
    border: '1px solid black',
    display: 'flex',
    placeContent: 'center',
  }
  
  render() {
    const {squares} = this.state
    return (
      <div 
        style={
          this.divStyle
      }>
        {squares.map((square, index)=> {
          return (
            <div key={index} 
              style={this.itemStyle}
              onClick={this.handleClick}
              data-index={index}
              className=''>
              {square}
            </div>
          )
        })}
      </div>
    )
  }
}
