import React from 'react';
import DefaultLayout from './layout/DefaultLayout';

class Edit extends React.Component {
  render() {
    const { apods } = this.props;

    if (!apods) {
      return (
        <DefaultLayout title="Edit APOD">
          <p>Invalid APOD ID</p>
          <a href="/apods">Back to APOD Index</a>
        </DefaultLayout>
      );
    }

    return (
      <DefaultLayout title={`Edit APOD: ${apods.title}`}>
        <h1>Edit APOD: {apods.title}</h1>
        <form action={`/apods/${apods._id}?_method=PUT`} method="POST">
          <label>Title: <input type="text" name="title" defaultValue={apods.title} /></label><br />
          <label>Description: <textarea name="description" defaultValue={apods.description}></textarea></label><br />
          <label>Image URL: <input type="text" name="imageURL" defaultValue={apods.imageURL} /></label><br />
          <label>Date: <input type="text" name="date" defaultValue={new Date(apods.date).toDateString()} /></label><br />
          <input type="submit" value="Update APOD" />
        </form>
        <a href={`/apods/${apods._id}`}>Back to APOD</a>
        <a href="/apods">Back to APOD Index</a>
      </DefaultLayout>
    );
  }
}

export default Edit; // Export the Edit component as the default export
