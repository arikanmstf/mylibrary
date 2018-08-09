/**
 * Component Types By => create-module script
 * @version 1.0.0
 *
 */

// @flow
export type HeaderProps = {
  style?: Object,
  back?: ?boolean,
  classes?: {
    container: string,
    image: string,
    search: string,
    flex: string,
    list: string,
  },
};

export type HeaderState = {
  isDrawerOpen?: ?boolean,
};
