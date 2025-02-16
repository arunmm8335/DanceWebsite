<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dance Academy Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .container {
            max-width: 800px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2 {
            text-align: center;
            color: #333;
        }
        ul, ol {
            padding-left: 20px;
        }
        code {
            background: #e9ecef;
            padding: 2px 5px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Dance Academy Website</h1>
        <h2>Overview</h2>
        <p>Welcome to the Dance Academy Website, a beginner-friendly full-stack web development project designed to gain hands-on experience with both front-end and back-end technologies. This project incorporates modern web development tools to create an interactive and engaging platform for dance enthusiasts.</p>
        
<h2>Technologies Used</h2>
        <ul>
            <li><strong>HTML</strong> – Structuring the web pages</li>
            <li><strong>CSS</strong> – Styling and enhancing user experience</li>
            <li><strong>JavaScript</strong> – Adding interactivity</li>
            <li><strong>MongoDB</strong> – Storing user data and feedback</li>
            <li><strong>Express.js</strong> – Handling server-side logic</li>
        </ul>
                <h2>Website Features</h2>
        <ol>
            <li><strong>Login Page</strong>
                <ul>
                    <li>A beautifully designed login page with a transparent background.</li>
                    <li>Secure login credentials:<br>
                        <code>Username: admin</code><br>
                        <code>Password: password</code></li>
                    <li>After successful login, users are redirected to the Home page.</li>
                </ul>
            </li>
            <li><strong>Home Page</strong>
                <ul>
                    <li>A sleek navigation bar for seamless website navigation.</li>
                    <li>Displays the mottos and sponsors of the academy.</li>
                    <li>Provides an engaging overview of the dance academy's mission.</li>
                </ul>
            </li>
            <li><strong>Services Page</strong>
                <ul>
                    <li>Showcases the various dance forms taught at the academy.</li>
                    <li>Includes high-quality images and descriptions of each dance style.</li>
                </ul>
            </li>
            <li><strong>Contact Us Page</strong>
                <ul>
                    <li>A fully functional form connected to MongoDB.</li>
                    <li>Allows users to submit feedback, inquiries, or complaints.</li>
                    <li>Stores submitted data securely for further action by the academy.</li>
                </ul>
            </li>
        </ol>
        
<h2>How to Run the Project</h2>
        <ol>
            <li>Clone this repository or download the project files.
                <pre><code>git clone https://github.com/your-repo/dance-academy.git
cd dance-academy</code></pre>
            </li>
            <li>Install the necessary dependencies:
                <pre><code>npm install</code></pre>
            </li>
            <li>Start the MongoDB server (ensure MongoDB is installed and running):
                <pre><code>mongod</code></pre>
            </li>
            <li>Launch the application:
                <pre><code>node app.js</code></pre>
            </li>
            <li>Open your browser and navigate to:
                <pre><code>http://localhost:8000</code></pre>
            </li>
        </ol>
             <h2>Future Enhancements</h2>
        <ul>
            <li>Implement user authentication with encrypted passwords.</li>
            <li>Add real-time chat support for inquiries.</li>
            <li>Improve the UI/UX with animations and modern design elements.</li>
            <li>Integrate a payment gateway for dance class subscriptions.</li>
        </ul>
    </div>
</body>
</html>
