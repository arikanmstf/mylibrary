/**
 * Screen Types Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import type { TextProps } from 'ui/Text/types';
import type { TextFieldProps } from 'ui/TextField/types';
import type { ViewProps } from 'ui/View/types';
import type { ButtonProps } from 'ui/Button/types';
import type { RowProps } from 'ui/Row/types';

export type LoginProps = {
  Text: React.ComponentType<TextProps>,
  TextField: React.ComponentType<TextFieldProps>,
  View: React.ComponentType<ViewProps>,
  Button: React.ComponentType<ButtonProps>,
  Row: React.ComponentType<RowProps>,
};
