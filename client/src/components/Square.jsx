import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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
  render() {
    const { row, square } = this.props;
    return <Wrapper className="board__square" />;
  }
}

const mapStateToProps = store => ({ board: store.board });

export default connect(mapStateToProps)(Square);
