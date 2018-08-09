/**
 * Native Component Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import React from 'react';

import type { Node } from 'react';
import { Container } from 'native-base';
import type { PageProps } from './types';
import defaultStyle from './style.json';

const Page = (props: PageProps): ?Node => {
  const { style, ...rest } = props;
  const mergedStyle = {
    ...defaultStyle,
    ...style,
  };

  return <Container style={mergedStyle} {...rest} />;
};

export default Page;
