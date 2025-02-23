WuWaMap

WuWaMap is a web application designed to display the most optimized path between echoes on the map of the game Wuthering Waves.
Features

    Optimized Pathfinding: Calculates and displays the shortest route between selected echoes on the game map.
    Interactive Map Interface: Allows users to interact with the map to select echoes and visualize paths.

Installation

To set up WuWaMap locally, follow these steps:

    Clone the Repository:

git clone https://github.com/EwennAnsquer/WuWaMap.git
cd WuWaMap

Install Dependencies:

npm install

Start the Development Server:

    npm run dev

    This will launch the application, and you can view it in your browser at http://localhost:3000.

Usage

    Selecting Echoes: Click on the echoes on the map to select them. The application will automatically calculate and display the most efficient path connecting the selected echoes.
    Reset Selection: Use the reset button to clear all selections and start a new path.

Technologies Used

    Frontend: React with TypeScript
    Build Tool: Vite
    Pathfinding Algorithm: Traveling Salesman Problem (TSP) solver implemented in Python

Contributing

Contributions are welcome! To contribute:

    Fork the repository.
    Create a new branch (git checkout -b feature-branch).
    Make your changes and commit them (git commit -m 'Add new feature').
    Push to the branch (git push origin feature-branch).
    Open a Pull Request.

License

This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgements

Special thanks to the Wuthering Waves community for their support and feedback during the development of this tool.

Note: WuWaMap is an independent project and is not affiliated with the official Wuthering Waves game or its developers.
