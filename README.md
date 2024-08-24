### Music Player Application
It is a small music player web app using the MERN stack (MongoDB, Express, React, Node.js). The app should allow users to sign up, sign in, select songs from a library, create playlists, play songs, and resume songs from where they left off.

**Here's a breakdown of the technologies used, functionality, and how to set it up locally:**

### Technologies Used:
1. **Frontend**:
   - **React.js**: For building the user interface.
   - **Redux**: For state management, especially for managing the state of the music player and user authentication.
   - **Material-UI (MUI)**: For styling the components and creating a responsive design.
   - **Axios**: For making HTTP requests to the backend.

2. **Backend**:
   - **Node.js**: As the runtime environment for the server-side code.
   - **Express.js**: For building the RESTful API that interacts with the frontend.
   - **MongoDB**: As the database for storing user data, playlists, and music information.
   - **Mongoose**: For object data modeling (ODM) to work with MongoDB.

3. **Authentication**:
   - **JWT (JSON Web Tokens)**: For user authentication, allowing secure login and session management.

4. **Music Management**:
   - **Spotify API**: For fetching music data, including tracks, albums, and artist information.

### Functionality:
- **User Authentication**: Users can sign up and log in using JWT-based authentication.
- **Music Library**: Users can browse and search for music tracks and albums using the Spotify API.
- **Playlist Management**: Users can create, view, and manage their playlists.
- **Music Player**: Users can play music, with features like play, pause, skip, and volume control.
- **Responsive Design**: The app is designed to be responsive, working well on both desktop and mobile devices.

### How to Set Up Locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/manni2000/Music-app.git
   cd Music-player-app
   ```

2. **Install Dependencies**:
   - Navigate to the frontend directory and install dependencies:
     ```bash
     npm install
     ```
   - Navigate to the backend directory and install dependencies:
     ```bash
     cd ../backend
     npm install
     ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the `server` directory and configure the following environment variables:
     ```env
     MONGO_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     SPOTIFY_CLIENT_ID=your_spotify_client_id
     SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
     ```

4. **Start the Development Server**:
   - Start the backend server:
     ```bash
     npm start
     ```
   - Start the frontend development server:
     ```bash
     cd ../backend
     npm start
     ```

5. **Access the Application**:
   - Once both servers are running, you can access the application by navigating to `http://localhost:3000` in your web browser.
  
## Preview


This setup will allow you to run the music app locally and explore its features.
