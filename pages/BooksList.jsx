import { BookPreview } from "../cmps/BookPreview.jsx";


export function BooksList({ books }) {
  
  return (
    <div className={`books-list container`}>
      {books.map((book) => (
        <BookPreview key={book.id} book={book} />
      ))}
    </div>
  );
}
