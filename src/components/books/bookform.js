import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../../redux/books/booksSlice';

const guId = () => {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const num = Math.floor(Math.random() * 24);
  return `${str[num]}${str[num + 1]}${Date.now()}`;
};

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const onAuthor = (e) => {
    setAuthor(() => e.target.value.toLowerCase());
  };
  const onTitle = (e) => {
    setTitle(() => (e.target.value).toLowerCase());
  };

  const onCategory = (e) => {
    setCategory(() => e.target.value.toLowerCase());
  };

  const onaddbook = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '' && category.trim() !== '') {
      const book = {
        item_id: guId(),
        title: title.toLowerCase(),
        author: author.toLowerCase(),
        category,
      };
      dispatch(addBook(book));
      setAuthor(() => '');
      setTitle(() => '');
      setCategory(() => '');
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
          <option value="Literature">Literature</option>
        </select>
        <button className="primary-button-big" type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};
export default BookForm;
