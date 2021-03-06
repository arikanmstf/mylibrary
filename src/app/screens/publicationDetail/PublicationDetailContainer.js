/**
 * Web Screen Template By => create-module script
 * @version 1.0.1
 *
 */

import { connect } from 'react-redux';

import { connect as connectUi } from 'helpers/connect';
import {
  Text,
  Screen,
  Header,
  Page,
  CardDetail,
} from 'ui';
import PublicationDetailScreen from './PublicationDetail';
import { mapStateToProps, mapDispatchToProps } from './publicationDetailActions';

const mapUiToProps = () => ({
  Text,
  Screen,
  Header,
  Page,
  CardDetail,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  connectUi(mapUiToProps)(PublicationDetailScreen)
);
