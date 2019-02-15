/**
 * Native Screen Template By => create-module script
 * @version 1.0.1
 *
 */

import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { reduxForm } from 'redux-form/immutable';
import { connect as connectUi } from 'helpers/connect';
import {
  RowList,
  Screen,
  Header,
  Page,
  TextField,
} from 'ui/native';
import PublicationAddToListScreen from './PublicationAddToList';
import { mapStateToProps, mapDispatchToProps, formConfig } from './publicationAddToListActions';
import PublicationAddToListForm from './publicationAddToListForm';

const mapUiToProps = () => ({
  RowList,
  Screen,
  Header,
  Page,
  PublicationAddToListForm,
  TextField,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm(formConfig)(connectUi(mapUiToProps)(withNavigation(PublicationAddToListScreen)))
);
