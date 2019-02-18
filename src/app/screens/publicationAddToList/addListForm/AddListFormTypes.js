/**
 * Screen Types Template By => create-module script
 * @version 1.2.0
 *
 */

// @flow
import type { ComponentType } from 'react';
import type { TextProps } from 'ui/Text/types';
import type { ScreenProps } from 'ui/Screen/types';
import type { HeaderProps } from 'ui/Header/types';
import type { PageProps } from 'ui/Page/types';

export type AddListFormProps = {
  Text: ComponentType<TextProps>,
  Screen: ComponentType<ScreenProps>,
  Header: ComponentType<HeaderProps>,
  Page: ComponentType<PageProps>,
};

export type AddListFormRequest = {|
  name: string,
|}
