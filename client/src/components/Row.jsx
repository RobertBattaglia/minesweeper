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
        return <Square key={square.id} id={square.id} />;
      })}
    </Wrapper>
  );
};

export default Row;
