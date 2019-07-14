import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { flipSquare } from '../actions';
import { getRowAndCol } from '../helpers';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
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
  span {
    position: absolute;
    text-align: center;
    vertical-align: middle;
    width: 100%;
    margin-top: 20%;
    font-size: 1.5rem;
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
    const { id, flipped, val } = this.props;
    return (
      <Wrapper className="board__square" onClick={this.handleClick}>
        {flipped ? <span>{val}</span> : null}
      </Wrapper>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  const [row, col] = getRowAndCol(ownProps.id);
  const { flipped, val } = store.board[row][col];
  return { flipped, val };
};

const mapDispatchToProps = dispatch => ({
  handleSquareClick: id => dispatch(flipSquare(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Square);
