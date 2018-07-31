// @flow
export type State = {|
  login: {|
    isLoggedIn: boolean,
    isInitialized: boolean,
  |},
  loader: {|
    isVisible: boolean,
  |},
  form: Object,
|};
