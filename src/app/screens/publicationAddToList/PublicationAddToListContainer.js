/**
 * Web Screen Template By => create-module script
 * @version 1.0.1
 *
 */

import { connect } from 'react-redux';
import { reduxForm } from 'redux-form/immutable';

import { connect as connectUi } from 'helpers/connect';
import {
  RowList,
  Screen,
  Header,
  Page,
  TextField,
} from 'ui';
import PublicationAddToListScreen from './PublicationAddToList';
import { mapStateToProps, mapDispatchToProps, formConfig } from './publicationAddToListActions';

const mapUiToProps = () => ({
  RowList,
  Screen,
  Header,
  Page,
  TextField,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm(formConfig)(connectUi(mapUiToProps)(PublicationAddToListScreen))
);
