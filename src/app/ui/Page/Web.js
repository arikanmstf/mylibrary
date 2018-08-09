/**
 * Web Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import styled from 'styled-components';
import defaultStyle from './style.json';
import type { PageProps } from './types';

const PageContainer = styled.div`
position: absolute;
top: 62px;
padding: 16px;
width: 100%;
height: 100%;
box-sizing: border-box;
`;

const Page = (props: PageProps): ?React.Node => {
  const { style, ...rest } = props;
  const mergedStyle = {
    ...defaultStyle,
    ...style,
  };

  return <PageContainer style={mergedStyle} {...rest} />;
};

export default Page;
