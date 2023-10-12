import React from 'react';
import DefaultLayout from './layout/DefaultLayout';

class Index extends React.Component {
  render() {
    const {apods} = this.props; // Destructure the apodData prop

    return (
      <DefaultLayout title="APOD Viewer">
        <nav>
          <a href="/apods/new">Create a New APOD Entry</a>
        </nav>
        <ul>
          {this.props.apodData.map((apods, i) => (
            <li key={i}>
              <a href={`/apods/${apods.date}`}>{apods.title}</a>
              {/* Additional information about the APOD */}
              <p>{apods.date}</p>
              <p>{apods.explanation}</p>
              {/* Your Delete Form Goes Here (Incomplete) */}
              <form action={`/apods/${apods.date}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE" />
              </form>
              <a href={`/apods/${apods.date}/edit`}>Edit This APOD Entry</a>
            </li>
          ))}
        </ul>
      </DefaultLayout>
    );
  }
}

export default Index;