import React from "react";

/** Search form 
 * 
 * props: search
 * 
 * state: searchTerm
*/
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /** updates state to search bar's value when it is changed */
  handleChange(evt) {
    const { value } = evt.target;
    this.setState({ searchTerm: value });
  }

  /** sends search term to story list to run search */
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.search(this.state.searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          name="search"
          value={this.state.searchTerm}
          placeholder="What are you looking for?">
        </input>
        <button type="submit">Search!</button>
      </form>
    );
  }
}

export default SearchForm;