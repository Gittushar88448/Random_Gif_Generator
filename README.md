## Overview

This application is a simple random GIF generator built using React and the API Axioms. It allows users to generate a random GIF directly or specify a tag to get a GIF related to that tag. The application also leverages the concept of custom hooks in React for managing stateful logic.

## Features

* Generate a random GIF with a single click.
* Input a tag to get a GIF related to that tag.
* View the generated GIF instantly.

## Installation

1. Clone the repository: git clone https://github.com/Gittushar88448/Random_Gif_Generator.git

2. Navigate into the project directory: cd random_gif

3. Install dependencies using npm or yarn: npm install or yarn install

4. Start the development server: npm run start

5. Open your web browser and visit http://localhost:3000 to view the application.

## Usage

1. Upon opening the application, you will see a button labeled "Generate Random GIF".
2. Clicking on this button will fetch and display a random GIF.
3. Alternatively, you can input a tag in the provided field and click on the "Generate GIF by Tag" button to get a GIF related to that tag.

## Technologies Used

* React: A JavaScript library for building user interfaces.
* API Axioms: A service providing access to a vast collection of GIFs.
* Tailwind CSS: A CSS framework

## Custom Hooks

The application utilizes custom hooks in React for managing stateful logic. Custom hooks help in encapsulating logic that can be reused across components. In this application, the custom hook useGif is responsible for handling the logic related to fetching random GIFs based on the provided tag.

## Contributing

Contributions are welcome! If you have any ideas, bug fixes, or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.