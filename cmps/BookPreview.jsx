const { Link } = ReactRouterDOM;

export function BookPreview({ book }) {

  return (
    <Link className="clean-text" to={`/book/${book.id}`}>
      <article className="container clean-text">
        <div className="card">
          <div className="card-img">
            <img src={book.thumbnail} alt="" />
          </div>
          <div className="card-details">
            <p>{book.title}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
