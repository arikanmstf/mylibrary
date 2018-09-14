// @flow
import React, { ComponentType } from 'react';

const connect = (mapUiToProps: Function) => (
  (WrappedComponent: ComponentType<*>) => {
    const uiComponents = mapUiToProps();
    return (props: Object) => (
      <WrappedComponent
        {...uiComponents}
        {...props}
      />
    );
  }
);

export default connect;
