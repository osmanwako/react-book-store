import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addbook } from '../../redux/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const onAuthor = (e) => {
    setAuthor(() => e.target.value);
  };
  const onTitle = (e) => {
    setTitle(() => e.target.value);
  };

  const onCategory = (e) => {
    setCategory(() => e.target.value);
  };

  const onaddbook = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '' && category.trim() !== '') {
      const book = {
        title,
        author,
        category,
      };
      dispatch(addbook(book));
    }
  };

  return (
    <section>
      <h2 className="form-title"> ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={onaddbook}>
        <input name="inptitle" id="titleid" className="input title-input" placeholder="Book title" required="" value={title} onChange={onTitle} />
        <input name="inpauthor" id="authorid" className="input title-input" placeholder="Author name" required="" value={author} onChange={onAuthor} />
        <select name="inpcategory" id="categoryid" className="input category-input" onChange={onCategory} required="" value={category}>
          <option value=""> Select category</option>
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button className="primary-button-big" type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};
export default BookForm;
