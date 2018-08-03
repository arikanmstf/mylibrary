class Store {
  constructor(props) {
    this.props = props;
  }

  toJS() {
    return this.props;
  }
}

class FakeStore {
  constructor(props) {
    this.props = props;
  }

  getState() {
    return new Store(this.props);
  }

  subscribe() {}
}

export const createFakeStore = (data) => {
  return new FakeStore(data);
};

export const dispatch = (action) => (action && typeof action === 'function' ? action() : undefined);
