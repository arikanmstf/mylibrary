import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.table`
width: 100%;
`;

const Table = (props) => (
  <Wrapper {...props} />
);

export default Table;
