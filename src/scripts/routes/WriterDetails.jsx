import NavbarHeader from '../containers/navbarHeader';
import WriterDetailsPage from '../containers/WriterDetailsPage';

const WriterDetails = ({ match }) => (
  <div>
    <NavbarHeader />
    <WriterDetailsPage writerId={ match.params.writerId }/>
  </div>
)
export default WriterDetails;
