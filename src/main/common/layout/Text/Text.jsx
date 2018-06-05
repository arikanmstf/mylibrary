import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span``;

const Table = (props) => (
  <Wrapper {...props}>{props.value}</Wrapper>
);

Table.propTypes = {
  value: PropTypes.string
};

Table.defaultProps = {
  value: ''
};

export default Table;
