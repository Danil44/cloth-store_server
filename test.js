const number = publications.length;

const getItemFromLocation = props =>
  queryString.parse(props.location.search).item;

export default class ReaderPage extends Component {
  state = {};

  componentDidMount() {
    const location = this.props.location.search;
    const qs = getItemFromLocation(this.props);

    if (!qs) {
      return this.props.history.replace({
        pathname: this.props.location.pathname,
        search: `item=1`
      });
    }
  }

  handleIncrement = () => {
    const index = Number(getItemFromLocation(this.props));
    const number = index + 1;

    this.props.history.push({
      ...this.props.location,
      search: `item=${number}`
    });
  };

  handleDecrement = () => {
    const index = Number(getItemFromLocation(this.props));
    const number = index - 1;

    this.props.history.push({
      ...this.props.location,
      search: `item=${number}`
    });
  };

  render() {
    const page = getItemFromLocation(this.props);
    const item = publications[page];

    return (
      <div>
        {article && <Publication item={item} />}
        <Counter number={page} idx={idx} />

        <Controls
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          idx={idx}
        />
      </div>
    );
  }
}
