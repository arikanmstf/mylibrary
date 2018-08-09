// @flow
import React from 'react';
import { Button as NativeButton, Text } from 'native-base';

import type { Node } from 'react';
import type { ButtonProps } from './types';

const Button = (props: ButtonProps): Node => {
  const {
    onClick, text, ...other
  } = props;

  const foo = () => {};
  const onPress = onClick || foo;

  return (
    <NativeButton
      full
      onPress={onPress}
      {...other}
    >
      <Text>{text}</Text>
    </NativeButton>
  );
};

export default Button;
