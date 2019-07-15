import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Row from './Row';
import { startGame } from '../actions';

const Wrapper = styled.div`
  position: absolute;
  height: 80vh;
  width: 80vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ff4136;
  border: 0.2rem solid;
  border-radius: 0.3rem;
  transition: all 200ms;
  box-shadow: -0.25rem -0.5rem 1rem rgba(0, 0, 0, 0.8);
  &:hover {
    transform: translate(-49.5%, -49%);
    box-shadow: -0.5rem -1rem 2rem rgba(0, 0, 0, 0.6);
  }
`;

const Button = styled.button`
  display: block;
  text-align: center;
  margin: 5rem auto;
  padding: 0.5rem;
  color: #fff;
  background: linear-gradient(to bottom right, #2de1fc, #214f4b);
  border-radius: 1rem;
  transition: 200ms;

  &:hover {
    background: linear-gradient(to top left, #2de1fc, #214f4b);
    transform: translateY(-0.2rem);
    box-shadow: 0.1rem 0.2rem 1rem rgba(0, 0, 0, 0.6);
  }
  &:active {
    background: linear-gradient(to top left, #2de1fc, #214f4b);
    transform: translateY(-0.1rem);
  }
`;

class Board extends Component {
  render() {
    const { board, status, handleClick } = this.props;
    if (status) {
      return (
        <React.Fragment>
          <Wrapper className="board">
            {board.map(squares => {
              return <Row key={squares[0].id} squares={squares} />;
            })}
          </Wrapper>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Button onClick={handleClick}>Start Game</Button>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = store => ({ board: store.board, status: store.status });

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(startGame());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
