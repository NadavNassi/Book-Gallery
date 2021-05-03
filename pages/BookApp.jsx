import { booksService } from '../services/books.service.js';
import { BooksList } from './BooksList.jsx';
import { BookFilter } from '../cmps/BookFilter.jsx';
import { Loader } from '../cmps/Loader.jsx';

export class BookApp extends React.Component {
  state = {
    books: null,
    filterBy: null,
  };
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
    booksService.query(this.state.filterBy).then((books) => {
      this.setState({ books });
    });
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadBooks);
  };

  render() {
    const { books } = this.state;
    if(!books) return <Loader />
    return (
      <section className={`book-app`}>
        
        <BookFilter onSetFilter={this.onSetFilter} />
        
          <BooksList books={books} />
      </section>
    );
  }
}
