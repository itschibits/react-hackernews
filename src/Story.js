import React from "react";

/** Displays a story title as a link to the story 
 * 
 * props: {title, url} - of a story
*/
class Story extends React.Component {

  render() {
    return (
      <div>
        <a href={this.props.url}>{this.props.title}</a>
      </div>
    );
  }
}

export default Story;