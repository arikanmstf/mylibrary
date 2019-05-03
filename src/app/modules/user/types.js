/**
 * Module Types Template By => create-module script
 * @version 1.2.0
 *
 */

// @flow
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
