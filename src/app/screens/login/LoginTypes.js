/**
 * Screen Types Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import type { TextProps } from 'ui/Text/types';
import type { ViewProps } from 'ui/View/types';

export type LoginProps = {
  Text: React.ComponentType<TextProps>,
  View: React.ComponentType<ViewProps>,
  initialize: Function,
};
