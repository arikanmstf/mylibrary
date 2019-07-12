/**
 * Screen Template By => create-module script
 * @version 1.0.2
 *
 */

// @flow
import { CARD_TYPES } from 'modules/card/constants';
import { CardDetailPageCreator } from 'modules/card/helpers/CardDetailPageCreator';

export default CardDetailPageCreator.create(CARD_TYPES.BOOK);
