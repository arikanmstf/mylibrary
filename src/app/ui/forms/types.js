// @flow

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
  label: string,
  type?: string,
}
