import NavbarHeader from '../containers/navbarHeader';
import BookDetailsPage from '../containers/BookDetailsPage';

const BookDetails = ({ match }) => (
  <div>
    <NavbarHeader />
    <BookDetailsPage bookId={ match.params.bookId }/>
  </div>
)
