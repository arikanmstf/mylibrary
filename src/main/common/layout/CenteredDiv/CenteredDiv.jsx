import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
max-width: 720px;
margin: 0 auto;
`;

const CenteredDiv = (props) => (
  <Wrapper {...props} />
);

export default CenteredDiv;
