export function ResolvedOpenDrawer() {
  return {
    type: 'RESOLVED_DRAWER_ACTIVE',
    data: true
  };
}
export function ResolvedCloseDrawer() {
  return {
    type: 'RESOLVED_DRAWER_INACTIVE',
    data: false
  };
}

export function openDrawer() {
  return (dispatch) => {
    dispatch(ResolvedOpenDrawer());
  };
}

export function closeDrawer() {
  return (dispatch) => {
    dispatch(ResolvedCloseDrawer());
  };
}
