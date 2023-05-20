import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../../redux/books/booksSlice';
import BookInformation from './bookinfo';

const BookList = () => {
  const load = useSelector((state) => state.bookstore.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [load]);
  const {
    status, message, book,
  } = useSelector((state) => state.bookstore);

  if (status === 'pending') {
    return (
      <div className="book">
        Loading ....
      </div>
    );
  }
  if (status === 'rejected') {
    return (
      <div className="book">
        {message}
      </div>
    );
  }

  const lists = Object.entries(book);
  return (
    <ul className="books">
      {
        lists.map((list) => <BookInformation key={list[0]} list={list} />)
      }
    </ul>
  );
};

export default BookList;
