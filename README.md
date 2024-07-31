# Todo List Application

## Overview

This is a simple Todo List application built with React and styled using Tailwind CSS. The application allows users to add, update, delete, and mark tasks as completed. Additionally, users can search for specific tasks and see tasks in an expandable list format, displaying the task description and the timestamp of the last update.

## System Design

### Components
1. **TaskList**: Manages the list of tasks, including adding, updating, deleting, and searching tasks.
2. **Task**: Represents an individual task with functionality to edit, delete, and mark the task as completed.
3. **TaskForm**: A form component for adding new tasks.

### Data Storage
- A dummy JSON file (`tasks.json`) is used as a data repository to initialize the list of tasks.

### State Management
- React's `useState` and `useEffect` hooks are used for managing the state of tasks.

## Implementation

### Key Features
- **Create Task**: Users can add new tasks with a title and description.
- **Update Task**: Users can edit the title and description of existing tasks.
- **Mark as Done**: Users can mark tasks as completed or undo the completion.
- **Search Tasks**: Users can search for tasks by their title.
- **Expandable List**: Each task can be expanded to show the description and timestamp of the last update.

### Styling
- Tailwind CSS is used for styling the application, providing a modern and responsive design.

## Setup and Run the Application

### Prerequisites
- Node.js (>= 12.x)
- npm (>= 6.x)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Lokesh-Bijarniya/Todo-List.git
   cd todo-list-app

2. **Install dependencies:**
      ```bash
      npm install

3. **Set up Tailwind CSS:**
   The Tailwind CSS configuration and initial setup are already included in the project. Ensure that you have the necessary files:

- **tailwind.config.js**
- **postcss.config.js**
- **src/index.css** with Tailwind directives **(@tailwind base; @tailwind components; @tailwind utilities;)**

## Running the Application
1. **Start the development server:**
     ```bash
      npm install

2. **Open your browser:**
    Visit http://localhost:3000 to see the application running.


## Folder Structure
 src/
|-- components/
|   |-- TaskList.js
|   |-- Task.js
|   |-- TaskForm.js
|-- data/
|   |-- tasks.json
|-- App.js
|-- index.js
|-- index.css

## Components Overview
* **TaskList.js:** Manages the overall task list, including adding, updating, and filtering tasks.
* **Task.js:** Represents an individual task, allowing users to edit, delete, and mark the task as completed.
* **TaskForm.js:** A form for adding new tasks.


## Tailwind CSS Configuration
Tailwind CSS is configured with the following files:

* **tailwind.config.js:** Tailwind configuration file for setting up purge options and theme customization.
* **postcss.config.js:** PostCSS configuration file for processing Tailwind CSS.

## Future Improvements
* Implement persistent data storage (e.g., using a backend API or localStorage).
* Add user authentication for personal task management.
* Improve accessibility and add more comprehensive error handling.
# Todo-List
