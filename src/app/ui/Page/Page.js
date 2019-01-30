/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';
import styled from 'styled-components';
import type { Node } from 'react';
import defaultStyle from './style.json';
import type { PageProps } from './types';

const PageContainer = styled.div`
position: absolute;
top: 62px;
padding: 16px;
width: 100%;
height: auto;
box-sizing: border-box;
`;

const Page = (props: PageProps): ?Node => {
  const { style, ...rest } = props;
  const mergedStyle = {
    ...defaultStyle,
    ...style,
  };

  return <PageContainer style={mergedStyle} {...rest} />;
};

export default Page;
