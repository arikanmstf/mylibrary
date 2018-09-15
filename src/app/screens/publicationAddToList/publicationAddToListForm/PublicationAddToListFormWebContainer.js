// @flow
import { reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { RowDetail } from 'ui/index';
import { onSubmit, mapDispatchToProps } from './publicationAddToListFormActions';

export default reduxForm({
  onSubmit,
})(connect(null, mapDispatchToProps)(RowDetail));
