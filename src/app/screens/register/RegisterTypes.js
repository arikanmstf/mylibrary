/**
 * Screen Types Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import * as React from 'react';
import type { TextProps } from 'ui/Text/types';
import type { TextFieldProps } from 'ui/forms/TextField/types';
import type { ScreenProps } from 'ui/Screen/types';
import type { ButtonProps } from 'ui/Button/types';
import type { RowProps } from 'ui/Row/types';
import type { ColProps } from 'ui/Col/types';
import type { FormProps } from 'ui/Form/types';
import type { ImageProps } from 'ui/Image/types';

export type RegisterProps = {
  Text: React.ComponentType<TextProps>,
  TextField: React.ComponentType<TextFieldProps>,
  Screen: React.ComponentType<ScreenProps>,
  Button: React.ComponentType<ButtonProps>,
  Row: React.ComponentType<RowProps>,
  Col: React.ComponentType<ColProps>,
  Image: React.ComponentType<ImageProps>,
  Form: React.ComponentType<FormProps>,
  Link: React.ComponentType<*>,
  handleSubmit: Function,
};

export type SubmitRegisterFormRequest = {
  name: string,
  displayName: string,
  email: string,
  password: string,
  passwordRepeat: string,
};

export type SubmitRegisterFormResponse = {
  success: {
    token: string,
    user: {
      name: string,
      permissions: Array<string>,
    },
  }
};
