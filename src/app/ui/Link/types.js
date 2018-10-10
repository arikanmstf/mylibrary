/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */
// @flow
import type { Node } from 'react';
import type { StackNavigator } from 'react-navigation';

export type LinkProps = {
  to: string,
  params: Object,
  children: Node,
  navigation?: StackNavigator,
};
