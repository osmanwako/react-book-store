import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../../redux/books/booksSlice';
import BookInformation from './bookinfo';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => () => dispatch(fetchBooks()), []);
  const book = useSelector((state) => state.bookstore.books);
  const lists = Object.entries(book);
  return (
    <ul className="books">
      {
        lists.map((list) => <BookInformation key={list[0]} list={list} />)
      }
      <li>
        <div className="book">
          Data has no valid pattern
        </div>
      </li>
    </ul>
  );
};

export default BookList;
