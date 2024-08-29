// Importing React and the useState hook from the React library.
import React, { useState } from "react"; 

function ToDoList() {
  // Initializing state with useState hook
  // `tasks` is the state variable that holds the current list of tasks.
  // `setTasks` is the function that updates the `tasks` state.
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a shower",
    "Walk the dog",
  ]);

  // `newTask` is a state variable to manage the input value for a new task.
  // `setNewTask` is the function to update `newTask`.
  const [newTask, setNewTask] = useState();

  // Function to handle changes in the input field.
  // Updates the `newTask` state whenever the user types in the input field.
  function handleInputChange(event) {
    // `event.target.value` contains the current text in the input field.
    setNewTask(event.target.value); 
  }

  // Function to add a new task to the list.
  function addTask() {
    // Check if `newTask` is not empty or only spaces.
    if (newTask.trim() !== "") {
      // Update the `tasks` state to include the new task.
      // Using the spread operator to copy the existing tasks and add the new one.
      setTasks((t) => [...t, newTask]);
      // Clear the input field after adding the task.
      setNewTask("");
    }
  }

  // Function to delete a task from the list.
  // `index` is the position of the task in the array.
  function deleteTask(index) {
    // `filter` method creates a new array without the item at the specified index.
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks); // Update the state with the new array.
  }

  // Function to move a task up in the list.
  function moveTaskUp(index) {
    // Check if the task is not already the first one.
    if (index > 0) {
      // Create a copy of the `tasks` array to modify.
      const updatedTasks = [...tasks];
      // Swap the current task with the one above it.
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1],updatedTasks[index]];
      // Update the state with the modified array.
      setTasks(updatedTasks); 
    }
  }

  // Function to move a task down in the list.
  function moveTaskDown(index) {
    // Check if the task is not already the last one.
    if (index < tasks.length - 1) {
      // Create a copy of the `tasks` array to modify.
      const updatedTasks = [...tasks];
      // Swap the current task with the one below it.
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1],updatedTasks[index]];
      // Update the state with the modified array.
      setTasks(updatedTasks); 
    }
  }

  return (
    <div className="to-do-list">
      <h1> To-Do-List</h1>

      <div>
        <input
          // Input type for text.
          type="text" 
          // Placeholder text displayed when input is empty.
          placeholder="Enter a task..." 
          // The current value of the input field.
          value={newTask} 
          // Event handler for input change.
          onChange={handleInputChange} 
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      {/* Render an ordered list of tasks */}
      <ol>
        {/* Loop through each task in the `tasks` array to display them */}
        {tasks.map((task, index) => (
          <li key={index}>
            {/* Display the task text */}
            <span className="text">{task}</span>
            {/* Button to delete the task */}
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            {/* Button to move the task up */}
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            {/* Button to move the task down */}
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

// Exporting the ToDoList component to be used in other parts of the application.
export default ToDoList; 
