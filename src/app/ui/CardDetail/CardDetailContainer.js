import { connect } from 'react-redux';
import { CARD_DETAIL_FORM_KEY } from 'constants/forms/card';
import { reduxForm } from 'redux-form/immutable';
import { withRouter } from 'react-router-dom';
import { submitCardDetailForm, mapDispatchToProps } from './cardDetailActions';
import CardDetail from './CardDetail';
import validate from './cardDetailValidations';

export default connect(null, mapDispatchToProps)(reduxForm({
  form: CARD_DETAIL_FORM_KEY,
  onSubmit: submitCardDetailForm,
  validate,
})(withRouter(CardDetail)));
