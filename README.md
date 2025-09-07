# To-Do App

A simple and modern To-Do application built with React and Vite. This app allows users to add, edit, and delete tasks, with all data persisted in the browser's local storage. The UI is styled using Tailwind CSS for a clean and responsive experience.

## Live Demo

[View the deployed app here](https://tutedude-task-todo-app.netlify.app/)

## Features

- **Add Tasks:** Quickly add new tasks to your to-do list.
- **Edit Tasks:** Update any existing task with a single click.
- **Delete Tasks:** Remove tasks instantly.
- **Persistent Storage:** Tasks are saved in local storage and persist across browser refreshes.
- **Responsive UI:** Clean and responsive design using Tailwind CSS.
- **Icons:** Edit and delete actions are represented with intuitive icons.
- **Checkboxes:** Mark tasks as done (visual only, does not affect state yet).
- **Notes Section:** Helpful notes and usage instructions included in the UI.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd todo-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Project Structure

```
todo-app/
├── public/
├── src/
│   ├── Components/
│   │   └── Todo-app.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

- Main logic is in [`src/Components/Todo-app.jsx`](todo-app/src/Components/Todo-app.jsx).
- App entry point is [`src/App.jsx`](todo-app/src/App.jsx).

## Usage

- Enter a task in the input field and click **ADD** to add it to your list.
- Click the **edit** icon (✏️) to update a task.
- Click the **delete** icon (🗑️) to remove a task.
- Tasks are saved automatically and will remain after refreshing the page.

## Customization

- You can easily modify the UI by editing the Tailwind CSS classes in the component files.
- To extend functionality (e.g., mark tasks as completed), update the state logic in [`Todo-app.jsx`](todo-app/src/Components/Todo-app.jsx).

## License

This project is for educational purposes.

---

Built with ❤️ using React, Vite, and Tailwind