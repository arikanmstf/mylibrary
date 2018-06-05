import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
list-style: none;
`;

const ListItem = (props) => (
  <Wrapper {...props} />
);

export default ListItem;
