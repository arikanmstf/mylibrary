/**
 * Native Screen Template By => create-module script
 * @version 1.0.1
 *
 */

import { connect } from 'react-redux';
import { connect as connectUi } from 'helpers/connect';
import {
  RowList,
  Screen,
  Header,
  Page,
} from 'ui/native';
import PublicationAddToListScreen from './PublicationAddToList';
import { mapStateToProps, mapDispatchToProps } from './publicationAddToListActions';
import PublicationAddToListForm from './publicationAddToListForm/PublicationAddToListFormNativeContainer';

const mapUiToProps = () => ({
  RowList,
  Screen,
  Header,
  Page,
  PublicationAddToListForm,
});

export default connect(mapStateToProps, mapDispatchToProps)(connectUi(mapUiToProps)(PublicationAddToListScreen));
