import { connect } from 'react-redux';
import { CARD_DETAIL_FORM_KEY } from 'constants/forms/card';
import { reduxForm } from 'redux-form/immutable';
import { submitCardDetailForm, mapStateToProps, mapDispatchToProps } from './cardDetailActions';
import CardDetail from './CardDetail';
import validate from './cardDetailValidations';

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: CARD_DETAIL_FORM_KEY,
  onSubmit: submitCardDetailForm,
  validate,
})(CardDetail));
