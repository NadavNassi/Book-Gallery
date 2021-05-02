import { booksService } from '../services/books.service.js';
import { BooksList } from '../cmps/BooksList.jsx';
import { BookDetails } from '../cmps/BookDetails.jsx';
import { BookFilter } from '../cmps/BookFilter.jsx';

export class BookApp extends React.Component {
  state = {
    books: null,
    selectedBook: null,
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

  setSelectedBook = (book) => {
    this.setState({ selectedBook: book });
  };

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadBooks);
  };

  render() {
    const { books, selectedBook } = this.state;
    if(!books) return <div ><img className='loader' src="../assets/img/loader_files/tail-spin.svg" alt=""/></div>
    return (
      <section className={`main ${this.state.selectedBook && 'modal-open'}`}>
        <div
          className='modal-screen'
          onClick={() => this.setSelectedBook(null)}
        ></div>
        {books && <BookFilter onSetFilter={this.onSetFilter} />}
        {books && (
          <BooksList books={books} setSelectedBook={this.setSelectedBook} />
        )}
        {selectedBook && (
          <BookDetails
            book={selectedBook}
            goBack={() => this.setSelectedBook(null)}
          />
        )}
      </section>
    );
  }
}
