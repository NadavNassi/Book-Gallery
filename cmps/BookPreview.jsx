export class BookPreview extends React.Component {
  state = {
    isOnSale: false,
  };
  componentDidMount() {
    if (this.props.book.listPrice.isOnSale) {
      setInterval(() => {
        this.setState({ isOnSale: !this.state.isOnSale });
      }, 1500);
    }
  }

  getCurrencySymbole = () => {
    let symbol = '';
    switch (this.props.book.listPrice.currencyCode) {
      case 'EUR':
        symbol = '€';
        break;
      case 'ILS':
        symbol = '₪';
        break;
      case 'USD':
        symbol = '$';
        break;
    }
    return symbol;
  };

  markPrice = () => {
    const bookPrice = this.props.book.listPrice.amount;
    if (bookPrice > 150) return 'over-priced';
    if (bookPrice < 20) return 'cheap';
  };

  render() {
    const book = this.props.book;
    if(!book) return <div ><img className='loader' src="../assets/img/loader_files/tail-spin.svg" alt=""/></div>
    return (
      <div className='container'>
        <article onClick={() => this.props.setSelectedBook(book)}>
          <div className={`card`}>
            <div className='card-img'>
              <img src={book.thumbnail} alt='' />
            </div>
            <div className='card-details'>
              <p>{book.title}</p>
              <p className={this.markPrice()}>
                {this.state.isOnSale ? (
                  <span className='sale'>SALE!!!</span>
                ) : (
                  `${book.listPrice.amount} ${this.getCurrencySymbole()}`
                )}
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
