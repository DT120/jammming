# Jammming - A Spotify Playlist Manager

## Purpose of the Project

Jammming is a web application that allows users to search for music tracks on Spotify and create custom playlists. The primary purpose of this project is to demonstrate the integration of the Spotify Web API for searching and managing music tracks, user authentication using the Implicit Grant Flow, and playlist creation.

## Technologies Used

The project utilizes the following technologies and libraries:

- **React**: The front-end of the application is built using the React JavaScript library for creating user interfaces.
- **HTML/CSS**: Basic HTML and CSS are used for structuring the web page and applying styles.
- **Spotify Web API**: To search for music tracks, create custom playlists, and manage user playlists.
- **localStorage**: Used to store and manage the access token and token expiration timestamp for user authentication.
- **CORS Anywhere**: A CORS proxy server is employed to handle cross-origin requests to the Spotify Web API.

## Features

### User Authentication

Users can sign in with their Spotify accounts using the Implicit Grant Flow for secure authentication.

### Search for Music

Users can search for music tracks on Spotify by entering search queries in the search bar.

### View Search Results

The application displays search results, including track names, artists, albums, and a button to add tracks to the playlist.

### Create Custom Playlists

Users can create custom playlists by entering a playlist name and adding tracks from the search results.

### Remove Tracks from Playlist

Tracks can be removed from the playlist by clicking the '-' button.

### Save to Spotify

Users can save their custom playlist to their Spotify account by clicking the "Save to Spotify" button.

### Error Handling

The application handles errors related to missing or expired access tokens and provides feedback to the user.

## Usage

### Searching for Music

1. Sign in with your Spotify account.
2. Enter a search query in the search bar and press "Enter" or click "Search."
3. View the search results and click the "+" button to add tracks to your playlist.

### Creating and Saving Playlists

1. Enter a name for your playlist in the input field.
2. Add tracks from the search results to your playlist.
3. Click "Save to Spotify" to save your playlist to your Spotify account.

## Troubleshooting

### Access Token Issues

If you encounter issues related to the access token, such as being redirected to Spotify's login page repeatedly, try the following:

- Check your internet connection.
- Make sure your Spotify account is active and you are logged in.
- Clear your browser's cache and cookies, or try using an incognito/private browsing window.
- Ensure your application's redirect URI matches the one specified in your Spotify Developer Dashboard.
- Reauthorize your account with Spotify

## Future Work

While the current version of Jammming offers a basic set of features, there is room for improvement and expansion. Some future work could include:

- Playlist Management: Enhance the playlist management capabilities, such as reordering tracks, renaming playlists, and deleting playlists.
- User Profile Information: Display additional user profile information retrieved from Spotify, such as profile pictures and display names.
- Custom Playlists: Allow users to create more personalized playlists with features like custom cover images and descriptions.
- Advanced Search Filters: Implement advanced search filters, such as sorting by popularity, filtering by release date, and more.
- Mobile Responsiveness: Optimize the application for a better user experience on mobile devices.
- Collaborative Playlists: Enable collaborative playlist creation, allowing multiple users to add and edit tracks in the same playlist.
- User Playlist Library: Display the user's existing playlists and offer the option to add tracks to those playlists.
- User Feedback: Provide user feedback, such as success messages upon creating or saving playlists and improved error handling.

Feel free to contribute to the project, report issues, or suggest additional features to make Jammming even better.