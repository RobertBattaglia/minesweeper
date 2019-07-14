import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Row from './Row';

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

class Board extends Component {
  render() {
    console.log(this.props);
    return (
      <Wrapper className="board">
        {this.props.board.map(squares => {
          return <Row key={squares[0].id} squares={squares} />;
        })}
      </Wrapper>
    );
  }
}

const mapStateToProps = store => ({ board: store.board });

export default connect(mapStateToProps)(Board);
