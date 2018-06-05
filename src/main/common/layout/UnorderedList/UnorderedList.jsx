import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
list-style: none;
`;

const UnorderedList = (props) => (
  <Wrapper {...props} />
);

export default UnorderedList;
