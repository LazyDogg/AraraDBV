# AraraDBV

![Tauri](https://img.shields.io/badge/tauri-^1.3.0-green.svg)
![Rust](https://img.shields.io/badge/rust-^1.70.0-orange.svg)
![Node.js](https://img.shields.io/badge/node.js-^18.0.0-brightgreen.svg)
![JavaScript](https://img.shields.io/badge/javascript-es6-yellow.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 📖 About

**AraraDBV** is a database visualizer created with Tauri. It uses Rust for the backend and JavaScript/Node.js for the frontend to provide an intuitive interface for viewing and managing databases. AraraDBV allows users to explore tables, relationships, logs, and the flow of data within the database.

### Features

- **Table Visualization**: Display tables with details about columns and data types.
- **Relationships**: See connections between tables via foreign keys and other relationships.
- **Logs**: Monitor database operations in real-time.
- **Data Flow**: Visualize how data moves and transforms.
- **Export**: Generate reports in Excel and PDF formats.
- **Performance Reports**: Get insights into database performance, including response times and resource usage.
- **Intuitive Interface**: User-friendly navigation and clear presentation.
- **Multi-Database Support**: Connect to various databases such as MySQL, PostgreSQL, SQLite, and more.

## 🚀 Technologies

- **[Tauri](https://tauri.app/)**: Framework for building lightweight, secure desktop applications using web technologies.
- **[Rust](https://www.rust-lang.org/)**: Programming language used for backend performance and security.
- **[Node.js](https://nodejs.org/)**: JavaScript runtime for scripts and frontend functionalities.
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: Primary language for building the user interface.

## 📦 Installation

1. **Clone the repository**

   ```
   git clone https://github.com/LazyDogg/AraraDBV.git
   cd AraraDBV
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Set up the environment**

   Install Rust following the instructions on the [official site](https://www.rust-lang.org/tools/install).

4. **Run the application**

   ```
   npm run tauri dev
   ```

   This will start the application in development mode.

## 🛠️ Usage

- **Connect to the Database**: Choose and connect to your desired database.
- **Explore Tables**: Navigate through tables and view data.
- **View Relationships**: Understand how tables are connected.
- **Monitor Logs**: Track real-time logs for insights into the database.

## 📜 License

Licensed under the [MIT License](LICENSE).