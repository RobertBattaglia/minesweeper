import React, { Component } from 'react';
import Board from './Board';
import GlobalStyle from '../theme';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Board />
      </React.Fragment>
    );
  }
}

export default App;
