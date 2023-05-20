import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/booksSlice';

const BookInformation = (bookitem) => {
  const dispatch = useDispatch();
  const { list } = bookitem;
  if (list.length !== 2) {
    return (
      <li>
        <div className="book">
          Data has no valid pattern
        </div>
      </li>
    );
  }

  const data = { id: list[0], ...list[1][0] };
  const {
    id, title, author, category,
  } = data;
  return (
    <li>
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="book-category">
              {category}
            </h4>
            <h2 className="book-title">{title}</h2>
            <h6 className="book-author">{author}</h6>
            <div className="action-buttons">
              <button className="button-outline" type="button">Comments</button>
              <div className="vertical-divider" />
              <button className="button-outline" type="button" onClick={() => dispatch(deleteBook(id))}>Remove</button>
              <div className="vertical-divider" />
              <button className="button-outline" type="button">Edit</button>
            </div>
          </div>
          <div className="progress-container">
            <div className="circular-progress-container">
              <div className="circular-progress" />
            </div>
            <div className="progress-stat">
              <p className="percent-complete">64%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="current-chapter-container">
              <div>
                <p className="current-chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">Chapter 17</p>
              </div>
              <div><button className="primary-button" type="button">UPDATE PROGRESS</button></div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default BookInformation;
