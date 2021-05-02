import { LongText } from './LongText.jsx';

export class BookDetails extends React.Component {
  state = {
    isFullDesc: false,
  };
  componentDidMount() {
    const bookDesc = this.props.book.description.length;
    if (bookDesc > 100) {
      this.setState({ isFullDesc: true });
    }
  }
  getPageCount = () => {
    const amount = this.props.book.pageCount;
    if (amount <= 100) return 'Light reading';
    if (amount <= 200) return 'Decent reading';
    else return 'Long reading';
  };
  getHowOld = () => {
    const year = new Date(Date.now()).getFullYear();
    const bookRealeseYear = this.props.book.publishedDate;
    if (year - bookRealeseYear <= 1) return 'New publish!';
    if (year - bookRealeseYear >= 10) return 'Vetren Book';
  };
  getBookCategories = () => {
    return this.props.book.categories.join(', ');
  };
  render() {
    const { book, goBack } = this.props;
    if(!book) return <div ><img className='loader' src="../assets/img/loader_files/tail-spin.svg" alt=""/></div>
    return (
      <div className='modal'>
        <div className='book-container'>
          <h2>{book.title}</h2>
          <small>{book.subtitle}</small>
          <h3 className='authors-names'>
            {book.authors.map((author) => (
              <span key={author}>{author}</span>
            ))}
          </h3>
          <img className='img-details' src={book.thumbnail} alt='' />
          <div className='book-desc'>
            <hr />
            <label htmlFor='bookDesc'>About this book:</label>
            <LongText
              bookDesc={book.description}
              isLong={this.state.isFullDesc}
            />
            <hr />
          </div>
          <div className='page-count'>{this.getPageCount()}</div>
          <div className='boo-age'>{this.getHowOld()}</div>
          <div className='book-categories'>
            <small>categories: {this.getBookCategories()}</small>
          </div>
          <button onClick={goBack}>Close</button>
        </div>
      </div>
    );
  }
}
