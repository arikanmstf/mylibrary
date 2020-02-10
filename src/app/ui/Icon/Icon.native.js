/**
 * Native Component Template By => create-module script
 * @version 1.2.0
 *
 */

// @flow
import React from 'react';
import { SimpleLineIcons as Icon } from '@expo/vector-icons';
import platform from 'native-base-theme/variables/platform';
import { DEFAULT_SIZE_OF_ICON } from 'constants/theme/icons';
import type { Node } from 'react';
import type { IconProps } from './types';

const CustomIcon = ({ active, style, ...other }: IconProps): ?Node => {
  return (
    <Icon
      style={{
        color: active ? platform.brandSuccess : undefined,
        fontSize: DEFAULT_SIZE_OF_ICON,
        ...style,
      }}
      {...other}
    />
  );
};

export default CustomIcon;
