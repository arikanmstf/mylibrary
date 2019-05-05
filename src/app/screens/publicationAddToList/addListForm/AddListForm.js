/**
 * Screen Template By => create-module script
 * @version 1.2.0
 *
 */

// @flow
import React, { PureComponent } from 'react';
import logger from 'helpers/logger';
import fields from 'constants/forms/addList';
import t from 'helpers/i18n/Translate';

import { submitAddListForm } from './addListFormActions';

import type { AddListFormProps } from './AddListFormTypes';

class AddListForm extends PureComponent<AddListFormProps> {
  render() {
    const {
      Col,
      TextField,
      Button,
      handleSubmit,
    } = this.props;
    logger.log('render: AddListForm');

    return (
      <Col>
        <TextField
          name={fields.NAME}
          label={t.get('ADD_LIST_FORM_ADD_LIST')}
          style={{ marginBottom: 20 }}
        />
        <Button
          primary
          raised
          onClick={() => { handleSubmit(submitAddListForm)(); }}
          text={t.get('ADD_LIST_FORM_SUBMIT')}
        />
      </Col>
    );
  }
}

export default AddListForm;
