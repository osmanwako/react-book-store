import BookForm from './books/bookform';
import BookInformation from './books/booklists';

const Home = () => (
  <div className="container">
    <div>
      <BookInformation />
      <div className="horizontal-divider" />
      <BookForm />
    </div>
  </div>
);

export default Home;
