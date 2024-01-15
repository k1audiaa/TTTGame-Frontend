[![JavaScript CI with npm](https://github.com/k1audiaa/TTTGame-Frontend/actions/workflows/npm.yml/badge.svg)](https://github.com/k1audiaa/TTTGame-Frontend/actions/workflows/npm.yml)
# TicTacToe Game Frontend

## Overview

This Vue.js frontend is part of the Tic Tac Toe (TTT) game project. It provides a simple user interface for the game, including login functionality and a logout. The frontend is designed to work best with Chrome, and the username for login must be a string containing at least 5 letters.

## Features

- Login functionality with validation
- Buttons with sound effects
- Navigation through different views (Home, Login, Overview, Game, Win, Lost, Draw)

## Technologies Used

- Vue.js 3
- TypeScript
- Vue Router

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/k1audiaa/TTTGame-Frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the frontend application:

    ```bash
    npm run dev
    ```

4. **Important Note:** Start the backend separately. Ensure that the backend is running, especially for user management. If the backend is not running, the login functionality will not work. You will find the backend repository here: https://github.com/k1audiaa/TTTgame


5. Access the application at [http://localhost:5173](http://localhost:5173)

## Views

- **Home:** Displays the TTTgame logo and title.
- **Login:** Allows users to enter a username and log in to the game.
- **Overview:** Shows the user's information and provides a button to log out.
- **Game:** Displays the Tic Tac Toe game.
- **Win, Lost, Draw:** Views for different game outcomes.

## Additional Notes

- The application is optimized for Chrome; Safari compatibility is not guaranteed.
- Username for login must be a string containing at least 5 letters.
- Your Username and your achieved points and levels are saved in the database and can be used to log in again.

## Contributors

- [k1audiaa](https://github.com/k1audiaa)
- [MeraGebreyes](https://github.com/MeraGebreyes)

## License

This project is licensed under the [MIT License](LICENSE).

```
