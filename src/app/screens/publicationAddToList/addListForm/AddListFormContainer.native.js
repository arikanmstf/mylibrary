/**
 * Native Screen Template By => create-module script
 * @version 1.2.0
 *
 */

import { connect } from 'react-redux';
import { connect as connectUi } from 'helpers/connect';
import {
  Text,
  Screen,
  Header,
  Page,
} from 'ui/native';
import AddListFormScreen from './AddListForm';
import { mapStateToProps, mapDispatchToProps } from './addListFormActions';

const mapUiToProps = () => ({
  Text,
  Screen,
  Header,
  Page,
});

export default connect(mapStateToProps, mapDispatchToProps)(connectUi(mapUiToProps)(AddListFormScreen));
