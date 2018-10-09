/**
 * Screen Types Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import type { ComponentType } from 'react';
import type { TextProps } from 'ui/Text/types';
import type { TextFieldProps } from 'ui/forms/TextField/types';
import type { ScreenProps } from 'ui/Screen/types';
import type { ButtonProps } from 'ui/Button/types';
import type { DivProps } from 'ui/Div/types';
import type { ColProps } from 'ui/Col/types';
import type { FormProps } from 'ui/Form/types';
import type { ImageProps } from 'ui/Image/types';

export type SubmitLoginFormRequest = {
  email: string,
  password: string,
};

export type SubmitLoginFormResponse = {
  token: string,
  user: {
    name: string,
    permissions: Array<string>,
  },
};

export type LoginProps = {
  Text: ComponentType<TextProps>,
  TextField: ComponentType<TextFieldProps>,
  Screen: ComponentType<ScreenProps>,
  Button: ComponentType<ButtonProps>,
  Div: ComponentType<DivProps>,
  Col: ComponentType<ColProps>,
  Image: ComponentType<ImageProps>,
  Form: ComponentType<FormProps>,
  Link: ComponentType<*>,
  handleSubmit: Function,
};
