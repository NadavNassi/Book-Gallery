export class LongText extends React.Component {
  state = {
    isReadMore: false,
    shortTxt: '',
  };
  componentDidMount() {
    if (this.props.bookDesc.length > 100) {
      let txt = '';
      for (let i = 0; i < 100; i++) {
        txt += this.props.bookDesc.charAt(i);
      }
      let counter = 100;
      while (this.props.bookDesc.charAt(counter) !== ' ') {
        txt += this.props.bookDesc.charAt(counter);
        counter++;
      }
      this.setState({ shortTxt: txt });
    }
  }

  onToggleText = () => {
    const isReadMore = !this.state.isReadMore;
    this.setState({ isReadMore });
  };

  render() {
    const { isLong, bookDesc } = this.props;
    const { shortTxt, isReadMore } = this.state;
    return (
      <div className='book-desc'>
        {!isLong && <p>{bookDesc}</p>}
        {isLong && !isReadMore && (
          <p>
            {shortTxt}{' '}
            <a className='read-btn' onClick={this.onToggleText}>
              read more
            </a>
          </p>
        )}
        {isLong && isReadMore && (
          <p>
            {bookDesc}{' '}
            <a className='read-btn' onClick={this.onToggleText}>
              read less
            </a>
          </p>
        )}
      </div>
    );
  }
}
