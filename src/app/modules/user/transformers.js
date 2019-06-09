// @flow
import { CARD_TYPE_USER } from 'modules/card/constants';

import type { CardItem } from 'modules/card/types';
import type { UserDetail } from 'helpers/api/types';

export const transformUserToCard = (user: UserDetail): CardItem => {
  if (!user) {
    return user;
  }

  return {
    title: user.display_name,
    titleFromId: user.id,
    id: user.id,
    description: user.email,
    type: CARD_TYPE_USER,
  };
};
