const { Link } = ReactRouterDOM;

export class Home extends React.Component {
    homeInterval = null
    componentDidMount(){
        this.homeInterval = setInterval(() => {
            console.log('HI');
        },1500)
    }
    componentWillUnmount(){
        clearInterval(this.homeInterval)
    }
  render() {
    return (
      <section>
        <h1>Home Page</h1>
        <p>
          Check our <Link to="/book">books</Link>
        </p>
      </section>
    );
  }
}
