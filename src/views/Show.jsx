import React from 'react';
import DefaultLayout from './layout/DefaultLayout';

class Show extends React.Component {
  render() {
    const { apods } = this.props;

    if (!apods) {
      return (
        <DefaultLayout title="APOD Show Page">
          <p>Invalid APOD ID</p>
          <a href="/apods">Back to APOD Index</a>
        </DefaultLayout>
      );
    }

    return (
      <DefaultLayout title={`APOD: ${apods.title}`}>
        <h1>{apods.title}</h1>
        <p>{apods.description}</p>
        <img src={apods.imageURL} alt={apods.title} />
        <p>Date: {new Date(apods.date).toDateString()}</p>
        <a href="/apods">Back to APOD Index</a>
      </DefaultLayout>
    );
  }
}

export default Show;
