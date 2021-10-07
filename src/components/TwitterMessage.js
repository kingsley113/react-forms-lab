import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
			tweetContent: "",
			charactersRemaining: props.maxChars,
		};
  }

	handleChange = (event) => {
		this.setState({
			tweetContent: event.target.value,
		});
		this.updateRemainingChars(event.target.value.length);
	}

	updateRemainingChars = (charCount) => {
		const maxChars = this.props.maxChars;
		this.setState({
			charactersRemaining: maxChars - charCount, 
		})
	}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} value={this.state.tweetContent} type="text" name="message" id="message" />
				<h1>Characters Remaining: {this.state.charactersRemaining}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
