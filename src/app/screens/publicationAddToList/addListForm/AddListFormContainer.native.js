/**
 * Native Screen Template By => create-module script
 * @version 1.2.0
 *
 */

import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';
import { connect as connectUi } from 'helpers/connect';
import {
  Col,
  TextField,
  Button,
} from 'ui';
import AddListFormScreen from './AddListForm';
import { mapStateToProps, mapDispatchToProps, formConfig } from './addListFormActions';

const mapUiToProps = () => ({
  Col,
  TextField,
  Button,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm(formConfig)(connectUi(mapUiToProps)(AddListFormScreen))
);
