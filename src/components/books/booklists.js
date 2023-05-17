import { useSelector } from 'react-redux';
import BookInformation from './bookinfo';

const BookList = () => {
  const lists = useSelector((state) => state.bookstore.books);
  return (
    <ul className="books">
      {
        lists.map((list) => <BookInformation key={list.id} list={list} />)
      }
    </ul>
  );
};

export default BookList;
