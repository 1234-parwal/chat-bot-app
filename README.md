# chat-bot-app

### Frontend

Reactjs is used for the development of frontend.

- ScrollToBottom - for the Chat Window to be automatically scrolled down when new messages are received.
- UIFX - FX Sound for each Message received by Other Users.
- String-to-Color - Unique Color for each different user (like in Whatsapp).
- Avatars - https://ui-avatars.com/ API to generate Avatar of Initials (like in Google) for each new User.
- RTL Support for messages in RTL languages.

### Backend

The Server is Powered by Nodejs and Express.

To run the server, you will need to use NPM Start. For fast real-time chat messages, the chat application is running under Socket.io.

### Steps to run
- For Backend : Server is running on port 5000
  - npm install (to load the node modules)
  - npm start

-For Frontend : Server is running on port 3000
  - npm install (to load the node modules)
  - npm start
  - go to (http://localhost:3000/) to start with the UI.
### Features
- Currently user can login in a private or public room with room name of his/her choice & further can share the room name to other users he/she wants to chat with.
- Chat is deleted as soon as user logs out of the system.
- Added json web token authentication to authenticate the user.
- Google Login.
