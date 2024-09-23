# Currency Converter

This project is a simple currency converter application built with React and TypeScript. It allows users to convert between Toman and Dollar using real-time exchange rates fetched from an external API.

## Features

- Convert between Toman and Dollar
- Real-time exchange rates
- Error handling with default conversion rate
- Responsive design using Bootstrap

### Prerequisites

- Node.js and npm installed on your machine
- A valid API key from Navasan

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```

2. Install the dependencies:
   npm install

3. Create a .env file in the root directory and add your API key:

   REACT_APP_API_KEY=your_api_key_here

### Running the Application

to start the application, run:
npm start

The application will be available at http://localhost:3000.

### Usage

- Enter the amount you want to convert.
- Click the toggle button to switch between Toman to Dollar and Dollar to Toman.
- Click the “Convert” button to see the result.

### API Key

To use this application, you need to obtain an API key from Navasan. Follow these steps:

- Go to [Navasan](https://www.navasan.tech/api/).
- Sign up for an account.
- Generate a free API key.
- Add the API key to your .env file as described in the installation steps.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for details.
