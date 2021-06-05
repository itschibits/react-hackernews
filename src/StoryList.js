import React from "react";
import axios from "axios";
import Story from "./Story";
import SearchForm from "./SearchForm";

/** Shows a list of all stories and the search bar 
 * 
 * state: hits: [{story}, ...]
 * 
 * App --> StoryList --> SearchForm
 * App --> StoryList --> Story
*/
class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hits: [] }
    this.search = this.search.bind(this);
  }

  /** After first mount, will do a default request and sets state to those stories*/
  // TODO: Have componentDidMount call search
  async componentDidMount() {
    try {
      await this.search("react");
    } catch (err) {
      console.log("error!", err);
    }
  }

  /** Request stories based on search term and sets state to those stories*/
  async search(searchTerm) {
    try {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`)
      const stories = response.data;
      this.setState(stories);
    } catch (err) {
      console.log("oh no errors", err);
    }
  }

  // TODO: what if no stories exist for search term
  render() {
    return (
      <div>
        <SearchForm search={this.search}/>
        {
          (this.state.hits.length !== 0)
            ?
            <div>
              {this.state.hits.map((story, idx) => <Story key={idx} title={story.title} url={story.url} />)}
            </div>
            :
            <h3>Wait a moment</h3>
        }
      </div>
    );
  }
}

export default StoryList;

