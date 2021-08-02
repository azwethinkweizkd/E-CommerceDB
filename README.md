# E-CommerceDB [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description

Creating a functional database that the user can view, create, update, or delete table information.

## Table of Contents

- ### [Installation](#installation)
- ### [Usage](#usage)
- ### [Contribution](#contribution)
- ### [Test Instructions](#testInstructions)
- ### [License](#License)

## Installation

Installation of this application will require one to transfer all files to a working directory on their computer. As well as the ability to acces the computers terminal, either through GitBash or VSCode. This applcation can be found on this GitHub repository:

[MySQL Database ECommerce Refactor - Kevin Devlin](https://github.com/azwethinkweizkd/E-CommerceDB)

Once files have been save into a working directory a one more step will need to take place, and that is to install node_modules. The node_modules will include: dotenv, express, mysql12, sequelize.

To install the node_modules properly one will need to type in the terminal under the current working directory for the application:

```bash
npm i
```

Make sure that you are in the directory that these files have been saved to. Otherwise you will be intalling the node_modules to the wrong directory, and thus will not allow the appliation to work.

## Usage

To use this program effectively the actions must be completed on Postman or Insomnia and accessed through a server on a localhost. The user must also have MySQL installed on their computer for this code to work (MySQL Workbench is optional). After files have been cloned from the repository and node*modules have been installed you will need to create a *.env\_ file to store your password, user of SQL, and the DB you plan to use (which in this case is ecommerce_db). To create and seed the database type the following into the command line in Bash or Powershell:

```bash
mysql -u root -p
```

You will then be asked for the sql password that you created. MySQL in the command line after entering your pass word correctly, from there you can copy and paste the code in _schema.sql_ or type what is below:

```bash
DROP DATABASE IF EXISTS ecommerce_db;

CREATE DATABASE ecommerce_db;
```

After you can close out of MySQL by typing:

```bash
\q
```

The final step you will need to take is to seed your database, to do that a script was created already in the _package.json_. Simply type in the command line:

```bash
npm run seed
```

From there start your server by typing in the command line:

```bash
nodemon server
```

You can no access Postman or Isomniac to perform a GET, POST, UPDATE, and DELETE on each of the apis. Make sure to use the URLs of http://localhost:3001/api/categories/ , http://localhost:3001/api/products/ , http://localhost:3001/api/tags/ . You may also enter a number after the last forward slash to access a certain id of the api.

Below are a couple GIFs demostrating the functionality of the application:

VSCode step:

![ECommerce VSCode Usage Screenshot](public/assets/gif/screenshot.gif)

Postman/Insomniac step:

![Ecommerce Postman Usage Screenshot](public/assets/gif/screenshot.gif)

## Contribution

Kevin Devlin - Main Contributor

GitHub Username:

[azwethinkweizkd](https://github.com/azwethinkweizkd)

## Test Instructions

There are currently no test instructions implemented at this time.

## License

This project was created using GNU GPL v3
