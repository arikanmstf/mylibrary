// @flow
import React, { ComponentType } from 'react';

const connect = (mapUiToProps: Function) => (
  (WrappedComponent: ComponentType<*>) => {
    const uiComponents = mapUiToProps();
    return ({
      location, navigation, match, ...other
    }: Object) => (
      <WrappedComponent
        {...uiComponents}
        {...other}
        navigation={navigation}
        location={location || { pathname: navigation ? navigation.state.routeName : null }}
        match={match || { params: { id: navigation ? navigation.getParam('id') : undefined } }}
      />
    );
  }
);

export default connect;
