import React from 'react';

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      explanation: '',
      url: '',
      submitted: false, // A flag to track form submission
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    // You can submit the data to your API or perform other actions here
  };

  render() {
    return (
      <div>
        <h1>New APOD Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            id="date"
            name="date"
            value={this.state.date}
            onChange={this.handleInputChange}
          /><br />
          <label htmlFor="explanation">Explanation: </label>
          <textarea
            name="explanation"
            rows="4"
            cols="50"
            value={this.state.explanation}
            onChange={this.handleInputChange}
          ></textarea><br />
          <label htmlFor="url">Image URL: </label>
          <input
            type="text"
            name="url"
            value={this.state.url}
            onChange={this.handleInputChange}
          /><br />
          <input type="submit" value="Create APOD" />
        </form>

        {this.state.submitted && (
          <div>
            <h2>Submitted Data:</h2>
            <p>Date: {this.state.date}</p>
            <p>Explanation: {this.state.explanation}</p>
            <p>Image URL: {this.state.url}</p>
          </div>
        )}
      </div>
    );
  }
}

export default New;
