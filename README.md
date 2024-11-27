# Cars App

This is a frontend web application built with Angular. The Cars App allows users to manage a list of cars, including adding, editing, and deleting car details. Additionally, services related to each car can be added and modified. The application also includes end-to-end (e2e) tests to ensure its functionality.

## Features

- Manage car details (add, edit, delete).
- Manage car services (add, edit, delete).
- Data is stored using localStorage.
- End-to-end testing using Cypress.

## Technologies Used

- **Angular**: A platform for building web applications.
- **Cypress**: For end-to-end testing of the application.

## Project Structure

- `app/` - Main application source code (components, services).
- `cypress/` - Cypress configuration and test scripts.
  - `e2e/` - Cypress end-to-end tests for the application.
  - `fixtures/` - Test data files.
  - `support/` - Cypress support files.
- `public/` - Static assets for the app (HTML, images).
- `src/` - Angular application's entry point and configuration files.
- `.editorconfig` - Configuration for maintaining consistent coding styles.
- `.gitignore` - Specifies files and folders that Git should ignore.
- `angular.json` - Angular CLI configuration.
- `package.json` - Dependencies and project scripts.
- `README.md` - Project documentation.
- `cypress.config.ts` - Cypress testing configuration.
- `tsconfig.*.json` - TypeScript configurations for the app.

## Installation

1. **Clone the repository**:

    ```bash
    git clone git@github.com:George2Times/cars-app-repo.git
    cd cars-app-repo
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

## Running the Application

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Running End-to-End Tests

To execute end-to-end tests using Cypress:

1. **Open Cypress Test Runner**:

    ```bash
    npx cypress open
    ```

2. **Run Tests in Command Line (Optional)**:

    ```bash
    npx cypress run
    ```

## Contributing

To contribute to this project:

1. **Fork** the repository.
2. **Create** your feature branch (`git checkout -b feature/YourFeature`).
3. **Commit** your changes (`git commit -m 'Add some feature'`).
4. **Push** to the branch (`git push origin feature/YourFeature`).
5. **Open a Pull Request**.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with [Angular](https://angular.io/).
- Testing powered by [Cypress](https://www.cypress.io/).
