# Apod Viewer Frontend

This is the frontend component of the Apod Viewer project, designed to display NASA's Astronomy Picture of the Day (APOD) data fetched from the backend.

## Project Structure

### `ApodList.js`

This component is responsible for rendering a list of APOD entries. It receives an array of APOD entries and displays them with their titles, images, and descriptions.

### `ApodViewer.js`

The `ApodViewer` component fetches the APOD data from the NASA API and provides a user interface for displaying the APOD entry of the specified date. It also allows searching for APOD entries based on a date, creating new APOD entries, and viewing a list of existing entries.

### `DateInput.js`

The `DateInput` component provides a simple input form for users to enter a date (in the format YYYY-MM-DD) to fetch a specific APOD entry for that date.

### `SearchBar.js`

This component, commented out, was intended for implementing a search feature to find APOD entries, but it's not currently used in the project.

### `Layout Components`

These components are used to define the layout structure of your application's HTML pages, such as the title and CSS links.

### `App.js`

The main application file sets up the structure for your frontend. It includes the `ApodViewer` and `DateInput` components, which allow users to view APOD entries based on a selected date.

## Getting Started

To run the frontend locally, follow these steps:

1. Ensure you have Node.js and npm installed.

2. Replace the `apiKey` variable in `App.js` with your NASA API key.

3. Install project dependencies by running:

   ```bash
   npm install
   ```
