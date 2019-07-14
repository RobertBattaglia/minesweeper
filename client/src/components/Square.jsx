import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { flipSquare } from '../actions';
import { getRowAndCol } from '../helpers';

const Wrapper = styled.div`
  display: inline-block;
  text-align: center;
  width: 10%;
  height: 100%;
  border: solid;
  background: #aaaaaa;
  transition: 200ms;

  &:hover {
    transform: translate(0.1rem, 0.1rem);
  }

  &:active {
    transform: translate(0);
  }
`;

class Square extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleSquareClick(this.props.id);
  }

  render() {
    const { id, flipped } = this.props;
    return (
      <Wrapper className="board__square" onClick={this.handleClick}>
        {flipped}
      </Wrapper>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  const [row, col] = getRowAndCol(ownProps.id);
  return { flipped: store.board[row][col].flipped };
};

const mapDispatchToProps = dispatch => ({
  handleSquareClick: id => dispatch(flipSquare(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);
