# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Student Manager

Student Manager is a simple web application designed to create, read, update, and delete (CRUD) user data. This application uses Axios for making HTTP requests and is connected to MockAPI endpoints for data storage and retrieval. The application is built with React and uses Bootstrap for styling.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Vijayadhi/axios-crud.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd axios-crud
    ```

3. **Install the dependencies:**
    ```bash
    npm install
    ```

4. **Run the application:**
    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`. (May be changed as per your system)

## Usage

### Creating a User

1. Fill in the form with user information, including personal details, address, and company info.
2. Click the **Submit** button to create the user.
3. Upon successful creation, a confirmation message will be displayed.

### Reading Users

1. Navigate to the user list page.
2. All users will be fetched from the MockAPI and displayed in a table.

### Updating a User

1. Click on the **Edit** button next to the user you want to update.
2. Modify the user details in the form.
3. Click the **Submit** button to save changes.

### Deleting a User

1. Click on the **Delete** button next to the user you want to delete.
2. Confirm the deletion.

## Features

- **Create User:** Add new users with personal, address, and company information.
- **Read Users:** View all users in a list.
- **Update User:** Edit existing user information.
- **Delete User:** Remove users from the list.

## Configuration

The application is configured to use MockAPI for storing and retrieving user data. No additional configuration is required for development purposes.

## API Endpoints

Change the Endpoints with your own keys.

The following endpoints are used by the application:

- **Create User:** `POST https://66371215288fedf6937f559e.mockapi.io/users`
- **Read Users:** `GET https://66371215288fedf6937f559e.mockapi.io/users`
- **Update User:** `PUT https://66371215288fedf6937f559e.mockapi.io/users/:id`
- **Delete User:** `DELETE https://66371215288fedf6937f559e.mockapi.io/users/:id`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
