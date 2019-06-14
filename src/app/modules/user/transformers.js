// @flow
import { CardTypeSetter } from 'modules/card/helpers/CardTypeSetter';

import type { CardItem } from 'modules/card/types';
import type { UserDetail } from 'helpers/api/types';

export const transformUserToCard = (user: UserDetail): CardItem => {
  if (!user) {
    return user;
  }

  return CardTypeSetter.createFromUser(user);
};
