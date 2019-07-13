import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  height: 80vh;
  width: 80vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.2rem solid;
  border-radius: 0.3rem;
  transition: all 200ms;
  box-shadow: -0.25rem -0.5rem 1rem rgba(0, 0, 0, 0.8);

  &:hover {
    transform: translate(-49.5%, -49%);
    box-shadow: -0.5rem -1rem 2rem rgba(0, 0, 0, 0.6);
  }
`;

export default class Board extends Component {
  render() {
    return <Wrapper className="board" />;
  }
}
