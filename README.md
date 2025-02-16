# Dance Academy Website  

## Overview  
Welcome to the **Dance Academy Website**, a beginner-friendly full-stack web development project designed to help developers gain hands-on experience with both front-end and back-end technologies. This project incorporates modern web development tools to create an interactive and engaging platform for dance enthusiasts.  

## Table of Contents  
- [Technologies Used](#technologies-used)  
- [Website Features](#website-features)  
- [How to Run the Project](#how-to-run-the-project)  
  - [Step 1: Clone the Repository](#step-1-clone-the-repository)  
  - [Step 2: Install Dependencies](#step-2-install-dependencies)  
  - [Step 3: Configure Environment Variables (Optional)](#step-3-configure-environment-variables-optional)  
  - [Step 4: Start the MongoDB Server](#step-4-start-the-mongodb-server)  
  - [Step 5: Run the Application](#step-5-run-the-application)  
  - [Step 6: Open in Browser](#step-6-open-in-browser)  
- [Future Enhancements](#future-enhancements)  
- [Contributors](#contributors)  
- [License](#license)  

## Technologies Used  
The project leverages the following technologies:  
- **HTML** – Structuring the web pages  
- **CSS** – Styling and enhancing user experience  
- **JavaScript** – Adding interactivity  
- **MongoDB** – Storing user data and feedback  
- **Express.js** – Handling server-side logic  

## Website Features  

### Login Page  
- A beautifully designed login page with a transparent background.  
- Secure login credentials:  
  - **Username:** `admin`  
  - **Password:** `password`  
- After successful login, users are redirected to the Home page.  

### Home Page  
- A sleek navigation bar for seamless website navigation.  
- Displays the **mottos** and **sponsors** of the academy.  
- Provides an engaging overview of the dance academy's mission.  

### Services Page  
- Showcases the various **dance forms** taught at the academy.  
- Includes **high-quality images** and descriptions of each dance style.  

### Contact Us Page  
- A fully functional form connected to **MongoDB**.  
- Allows users to submit **feedback, inquiries, or complaints**.  
- Stores submitted data securely for further action by the academy.  

## How to Run the Project  

Follow these steps to set up and run the project:  

### Step 1: Clone the Repository  
Run the following command in your terminal to clone the project:  

```sh  
git clone https://github.com/your-repo/dance-academy.git
cd dance-academy
```

### Step 2: Install Dependencies  
Run the following command to install all necessary dependencies:  

```sh
npm install
```

###  Configure Environment Variables (Optional)
If your project requires environment variables (e.g., MongoDB connection string, API keys), create a .env file in the root directory and add your configuration:

```sh
MONGO_URI=your_mongodb_connection_string
PORT=8000
```

###  Step 4: Start the MongoDB Server
Ensure MongoDB is installed and running before starting the backend:

```sh
mongod
```

###  Step 5: Run the Application
Start the Node.js server by running:

```sh
node app.js
```

###  Step 6: Open in Browser
Now, open your web browser and go to:

```sh
http://localhost:8000
```

