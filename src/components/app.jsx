import React, {Component} from "react"
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";
import giphy from "giphy-api"

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      gifs: [],
      selectedGifId: "hv53DaYcXWe3nRbR1A/giphy.gif?cid=bb5a1c3a9j92gfm7xtl38y9sj42s76bqtifl3xvtsn0x29he&rid=giphy"
    };
  }

  search = (query) => {
    giphy("exxveongRQi3nEse66I6YCn23AR5qYR0").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  updateState = (id) => {
    // console.log('click');
    this.setState({ selectedGifId: id });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} updateState={this.updateState} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateState={this.updateState}/>
        </div>
      </div>
    );
  }
}

export default App;
