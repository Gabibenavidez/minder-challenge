<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To do list Application README</title>
</head>
<body>
    <h1>To Do list Application</h1>

    <p>This project is a to do list management application built with React, Material-UI, and React Hook Form. It allows users to create, update, and manage their tasks efficiently, categorized by different categories.</p>

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#api-integration">API Integration</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <h2 id="features">Features</h2>
    <ul>
        <li>Create, update tasks.</li>
        <li>Categorize tasks based on predefined categories.</li>
        <li>Mark tasks as completed or pending.</li>
        <li>Responsive design for desktop and mobile devices.</li>
        <li>Form validation using Yup and React Hook Form.</li>
        <li>User-friendly interface with Material-UI components.</li>
    </ul>

    <h2 id="technologies-used">Technologies Used</h2>
    <ul>
        <li><strong>React</strong>: A JavaScript library for building user interfaces.</li>
        <li><strong>Material-UI</strong>: A popular React UI framework that provides pre-built components.</li>
        <li><strong>React Hook Form</strong>: A library for managing forms in React applications.</li>
        <li><strong>Yup</strong>: A JavaScript schema builder for value parsing and validation.</li>
        <li><strong>Axios</strong>: For making HTTP requests to the backend API.</li>
        <li><strong>React Context API</strong>: For managing global loading state.</li>
    </ul>

    <h2 id="installation">Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/gabibenavidez/minder-challenge.git</code></pre>
        </li>
        <li>Navigate into the project directory:
            <pre><code>cd minder-challenge</code></pre>
        </li>
        <li>Install the dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Start the development server:
            <pre><code>npm run dev</code></pre>
        </li>
        <li>Open your browser and go to <code>http://localhost:5173</code>.</li>
        <li>To run the db execute:
            <pre><code>npm run db</code></pre>
        </li>
    </ol>

    <h2 id="usage">Usage</h2>
    <ul>
        <li>To create a new task, click on the "Add" button at the bottom right corner.</li>
        <li>Fill out the form with the task title, description, and select a category.</li>
        <li>Click "Create" to add the task to your list.</li>
        <li>Tasks can be marked as completed by clicking the checkbox next to each task.</li>
    </ul>

    <h2 id="api-integration">API Integration</h2>
    <p>This project is integrated with a backend API for managing tasks and categories. Ensure that the API is up and running. You may need to adjust the API endpoints in the <code>services/tasksService.jsx</code> file based on your backend setup.</p>
</body>
</html>
