/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import { createAction } from 'redux-actions';
import { UPDATE_ROWS } from 'constants/actions/actionNames';

export const updateRows = createAction(UPDATE_ROWS);
