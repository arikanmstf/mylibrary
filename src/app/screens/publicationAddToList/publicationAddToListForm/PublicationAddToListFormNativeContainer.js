// @flow
import { reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { RowDetail } from 'ui/native';
import { onSubmit, mapDispatchToProps } from './publicationAddToListFormActions';

export default reduxForm({
  onSubmit,
})(connect(null, mapDispatchToProps)(RowDetail));
