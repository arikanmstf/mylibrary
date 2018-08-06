/**
 * Screen Types Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import type { TextProps } from 'ui/Text/types';
import type { ScreenProps } from 'ui/Screen/types';
import type { HeaderProps } from 'ui/Header/types';

export type HomeProps = {
  Text: React.ComponentType<TextProps>,
  Screen: React.ComponentType<ScreenProps>,
  Header: React.ComponentType<HeaderProps>,
};
