# React To-Do List App

*Deployed on Netlify 😉*\
[![Netlify Status](https://api.netlify.com/api/v1/badges/4069b20f-b191-4865-9b0a-35289e0d39a5/deploy-status)](https://app.netlify.com/sites/to-do-app-reactjs-ahmmmyoo/deploys)
[Live Link](https://to-do-app-reactjs-ahmmmyoo.netlify.app/)


A simple To-Do List application built with React. This app allows users to add, delete, and rearrange tasks using the `useState` hook for state management. It's a great example of how to handle dynamic lists and user interactions in React.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Component Details](#component-details)
- [Detailed Code Explanation](#detailed-code-explanation)
- [Contributing](#contributing)
- [License](#license)

## Overview

The To-Do List app is designed to help users manage their tasks. It provides functionality to:

- Add new tasks.
- Delete existing tasks.
- Move tasks up or down in the list to prioritize them.

This project demonstrates fundamental React concepts, such as using the `useState` hook for managing component state and handling user input.

## Features

- **Add Tasks**: Users can add new tasks to their to-do list.
- **Delete Tasks**: Users can remove tasks from the list.
- **Reorder Tasks**: Users can move tasks up or down to change their priority.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ahmmmyoo/todoApp_reactjs
   ```
2. **Navigate into the project directory**:
   ```bash
   cd ./todoApp_reactjs/todoApp
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

## Usage

Once the app is running, you can:

- **Add a task**: Type a task into the input field and click the "Add" button.
- **Delete a task**: Click the "Delete" button next to a task to remove it.
- **Move a task**: Use the up ("👆") and down ("👇") buttons to reorder the tasks.

## Component Details

**ToDoList Component**\
This is the main component of the application that handles all task-related functionality.

**State Management**
- **tasks**: An array of tasks that the user wants to manage. Initialized with a few default tasks.
- **newTask**: A string that holds the value of the new task input field.

### Functions

- `handleInputChange(event)`: Updates the `newTask` state whenever the user types into the input field.
```jsx
function handleInputChange(event) {
  setNewTask(event.target.value);
}
```

- `addTask()`: Adds a new task to the `tasks` list if the input is not empty, then clears the input field.
```jsx
function addTask() {
  if (newTask.trim() !== "") {
    setTasks((t) => [...t, newTask]);
    setNewTask("");
  }
}
```

- `deleteTask(index)`: Removes a task from the list based on its index.
```jsx
function deleteTask(index) {
  const updatedTasks = tasks.filter((_, i) => i !== index);
  setTasks(updatedTasks);
}
```

- `moveTaskUp(index)`: Moves a task up in the list if it is not the first task.
```jsx
function moveTaskUp(index) {
  if (index > 0) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = 
    [updatedTasks[index - 1], updatedTasks[index]];
    setTasks(updatedTasks);
  }
}
```

- `moveTaskDown(index)`: Moves a task down in the list if it is not the last task.
```jsx
function moveTaskDown(index) {
  if (index < tasks.length - 1) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = 
    [updatedTasks[index + 1], updatedTasks[index]];
    setTasks(updatedTasks);
  }
}
```

### Rendering

The component renders an input field, an "Add" button, and an ordered list (`<ol>`) of tasks. Each task has buttons for deletion and moving up or down in the list.

```jsx
return (
  <div className="to-do-list">
    <h1> To-Do-List</h1>
    <div>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={addTask}>
        Add
      </button>
    </div>
    <ol>
      {tasks.map((task, index) => (
        <li key={index}>
          <span className="text">{task}</span>
          <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
          <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
          <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
        </li>
      ))}
    </ol>
  </div>
);
```

## Detailed Code Explanation

For a detailed explanation of the code and how it works, please refer to the [toDoList.jsx](./todoApp/src/ToDoList.jsx) file in the repository. This file includes in-depth comments explaining each function and how the state is managed within the component.

Alternatively, you can view the [ReadMe](./todoApp/src/README.md) file for code explanation directly in the [src](./todoApp/src/) folder.

## Contributing

Contributions are welcome! 🤓\
Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
