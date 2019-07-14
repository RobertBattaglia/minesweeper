import React, { Component } from 'react';
import Board from './Board';
import GlobalStyle from '../theme';
import styled from 'styled-components';

const Sh1 = styled.h1`
  margin: 0 1rem;
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <header>
          <Sh1>MineSweeper</Sh1>
        </header>
        <main>
          <Board />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
