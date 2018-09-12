/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
export type TextFieldProps = {
  label?: string,
  name: string,
  type?: string,
  style?: Object,
};

export type ReduxFieldProps = {
  meta: {
    touched?: ?boolean,
    error?: ?string,
  },
  input: {
    name: string,
    value: *,
    onChange: Function,
  },
}
