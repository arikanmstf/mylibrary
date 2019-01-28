// @flow
import React from 'react';
import { Button as NativeButton, Text } from 'native-base';
import Link from 'ui/Link/Native';

import type { Node } from 'react';
import type { ButtonProps } from './types';

const ButtonLink = (props: ButtonProps): Node => {
  const { to, ...other } = props;

  return (
    <Link
      to={to}
    >
      <Text {...other} />
    </Link>
  );
};

const Button = (props: ButtonProps): Node => {
  const {
    onClick, text, to, ...other
  } = props;

  const foo = () => {};
  const onPress = onClick || foo;
  const Component = to ? ButtonLink : Text;

  return (
    <NativeButton
      full
      onPress={onPress}
      {...other}
    >
      <Component
        to={to}
        {...other}
      >
        {text}
      </Component>
    </NativeButton>
  );
};

export default Button;
