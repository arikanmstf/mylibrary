/**
 * Native Component Template By => create-module script
 * @version 1.2.0
 *
 */

// @flow
import React from 'react';
import { Icon } from 'native-base';
import platform from 'native-base-theme/variables/platform';

import type { Node } from 'react';
import type { IconProps } from './types';

const CustomIcon = ({ active, style, ...other }: IconProps): ?Node => {
  return <Icon style={{ color: active ? platform.brandSuccess : platform.brandPrimary, ...style }} {...other} />;
};

export default CustomIcon;
