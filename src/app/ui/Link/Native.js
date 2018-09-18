/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { Node } from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import type { LinkProps } from './types';

const Link = (
  {
    to,
    params,
    navigation,
    children,
  }: LinkProps
): ?Node => {
  return (
    <TouchableOpacity
      onPress={() => { navigation.navigate(to, params); }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default withNavigation(Link);
