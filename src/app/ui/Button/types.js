// @flow
export type ButtonProps = {
  onClick?: Function,
  text?: string,
  primary?: boolean,
  raised?: boolean,
  style?: Object,
  to?: string,
  color?: 'inherit' | 'primary' | 'secondary' | 'default',
};
