import { BookPreview } from './BookPreview.jsx';

export function BooksList({ books, setSelectedBook }) {
  if(!books) return <div ><img className='loader' src="../assets/img/loader_files/tail-spin.svg" alt=""/></div>
  return (
    <div className={`books-list container`}>
      {books.map((book) => (
        <BookPreview
          key={book.id}
          book={book}
          setSelectedBook={setSelectedBook}
        />
      ))}
    </div>
  );
}
