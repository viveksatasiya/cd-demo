# Continuous Delivery Demo (cd-demo)

This project demonstrates the process of continuous delivery as recommended by Dave Farley. It's structured using a layered architecture with separate layers for Presentation, Application, Domain, and Infrastructure.

## Technologies Used

- Node.js
- Express
- TypeScript
- Jest
- Cucumber
- Sequelize ORM
- Axios
- Config

## Project Structure

- `src/`: Source code directory
  - `presentation/`: Responsible for handling HTTP requests and responses
  - `application/`: Contains use cases executed by the controllers
  - `domain/`: Consists of business objects or entities
  - `infrastructure/`: External concerns like database connectivity
- `tests/`: Test code directory
  - `unit/`: Unit tests
  - `acceptance/`: Acceptance tests

## Setup

1. **Clone the repository:**
   ```
   git clone https://github.com/viveksatasiya/cd-demo.git
   cd cd-demo
   ```
2. **Install dependencies:**
   ```
   npm install
   ```
3. **Environment Configuration:**

Create a `.env` file at the root of your project and configure your settings, for example:
` PORT=3000 `
Configuration settings are managed by `config`, and environment-specific settings can be found in the `config/` folder.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the application in production mode.

### `npm run start:dev`

Runs the application in development mode.

### `npm run test:unit`

Runs all unit tests using Jest.

### `npm run test:dev:acceptance`

Runs all acceptance tests using Cucumber.

### `npm test`

Runs both unit and acceptance tests.

### `npm run dev`

Runs both the development application and acceptance tests concurrently.
