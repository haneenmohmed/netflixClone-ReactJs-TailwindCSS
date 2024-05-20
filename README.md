# 🎬 Netflix Clone

A Netflix clone web application built using ReactJS, styled with TailwindCSS, and utilizing Firebase for authentication and The Movie Database (TMDb) API for movie data.

## 📖 Description

This project is a clone of Netflix that includes user authentication (sign in and sign up) and displays a list of movies fetched from TMDb API. The frontend is built with ReactJS and TailwindCSS to ensure a responsive and modern design.

## ✨ Features

- 🔐 User authentication using Firebase (sign in and sign up).
- 🎥 Fetch and display movies from TMDb API.
- 📱 Responsive design using TailwindCSS.

## 🛠️ Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/haneenmohmed/netflixClone-ReactJs-TailwindCSS.git
   cd netflixClone
2. Install dependencies:

       ```bash 
        npm install
3. Create a .env file:
Create a .env file in the root directory of the project and add the following environment variables:

   ```bash 
              REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
              REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
              REACT_APP_FIREBASE_PROJECT_ID=your_project_id
              REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
              REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
              REACT_APP_FIREBASE_APP_ID=your_app_id
              REACT_APP_TMDB_API_KEY=your_tmdb_api_key

4. Obtain Firebase Configuration:
   
    ```bash 
    Go to the Firebase Console.
    Create a new project or use an existing one.
    Navigate to Project Settings > General.
    Under "Your apps", add a new web app.
    Copy the Firebase SDK configuration and replace the values in your .env file.

5.Obtain TMDb API Key:

    ```bash 
    Go to the TMDb website.
    Create an account if you don't have one.
    Navigate to the API section in your account settings.
    Request an API key and copy it to the .env file under REACT_APP_TMDB_API_KEY.

6. Start the development server:
   ```bash
        npm start
    
🚀 Usage :
After completing the installation steps, you can start the development server and use the application:
npm start
Navigate to http://localhost:3000 in your web browser to view the application.

🤝 Contributing:
Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

📜 License :
This project is licensed under the MIT License - see the LICENSE file for details.

📬 Contact :
Haneen Mohmed - haneenmohmed0@gmail.com

Project Link: https://github.com/your-username/netflixClone-ReactJs-TailwindCSS
