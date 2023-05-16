import BookForm from './books/bookform';
import BookList from './books/booklists';

const Home = () => (
  <div className="container">
    <div>
      <BookList />
      <div className="horizontal-divider" />
      <BookForm />
    </div>
  </div>
);

export default Home;
