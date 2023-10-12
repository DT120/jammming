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
- Reauthorize your account with Spotify.

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
- Dynamic or Animated Background: Implement a dynamic or animated background that changes over time or reacts to user interactions, enhancing the visual appeal of the website.
- CSS Animations: Use CSS animations to create subtle background effects, such as a gradient that shifts slowly, providing a visually engaging experience.
- Background Image or Video: Add a background image or video that complements the theme of your website, further enhancing the aesthetics.
- User Authentication and Personalization: Allow users to save their playlists and preferences, creating a personalized experience.
- Social Sharing Functionality: Implement social sharing buttons for playlists, enabling users to share their playlists on social media.
- Music Playback Controls: Integrate music playback controls, allowing users to listen to tracks directly on your website for a seamless music experience.
- Search History or Recent Searches: Implement a feature that keeps track of users' search history, making it easy for users to revisit their previous queries.
- Reordering and Customizing Playlists: Allow users to reorder tracks in their playlist with drag-and-drop functionality, providing a more interactive playlist management experience.
- Dark Mode/Light Mode Toggle: Add a dark mode/light mode toggle for users to choose the website's appearance based on their preference.
- Tooltips or Pop-up Information: Implement tooltips or pop-up information for tracks or artists to display additional details when users hover over them, enhancing user interaction.
- Keyboard Shortcuts: Provide keyboard shortcuts for common actions like adding/removing tracks or playing/pausing music, improving accessibility and user convenience.
- Local Storage or Cookies: Use local storage or cookies to remember user settings and preferences, creating a more user-friendly and personalized experience.

Feel free to contribute to the project, report issues, or suggest additional features to make Jammming even better.