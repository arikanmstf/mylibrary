import NavbarHeader from '../containers/navbarHeader';

export default class NotFound extends Component {
  render() {
    return (
      <div>
          <NavbarHeader />
          <h1>404</h1>
          <h2>Requested page not found.</h2>
      </div>
    );
  }
}
