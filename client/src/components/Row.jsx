import React from 'react';
import styled from 'styled-components';
import Square from './Square';

const Wrapper = styled.div`
  height: 10%;
`;

const Row = props => {
  return (
    <Wrapper className="board__row">
      {props.squares.map(square => {
        return <Square key={square.id} square={square} />;
      })}
    </Wrapper>
  );
};

export default Row;
