import React from 'react';

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New APOD Page</h1>
        <form action="/apods" method="POST">
          <label htmlFor="date">Date: </label>
          <input type="date" id="date" name="date" /><br />
          <label htmlFor="explanation">Explanation: </label>
          <textarea name="explanation" rows="4" cols="50"></textarea><br />
          <label htmlFor="url">Image URL: </label>
          <input type="text" name="url" /><br />
          <input type="submit" name="" value="Create APOD" />
        </form>
      </div>
    );
  }
}

export default New; // Export the New component as the default export
