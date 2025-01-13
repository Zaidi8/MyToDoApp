#React Native To-Do Application

=> Project Setup

- Clone the branch ExpoToDoApp from github run the following command
  git clone -b ExpoToDoApp https://github.com/Zaidi8/MyToDoApp.git

- install dependencies
  npm install

- run the following command on terminal after navigating to the project and install if it requires any package
  npx expo start
  if using a MacBook and it reuires permision
  sudo npx expo start

=>Description
This is a simple To-Do application built with React Native. It allows users to add, edit, complete, and delete tasks. The application persists data using AsyncStorage, ensuring that tasks are saved between sessions.

=>Features

- Add new tasks
- Edit existing tasks
- Mark tasks as completed or incomplete
- Delete tasks
- Persistent storage with AsyncStorage

=>Usage

### Adding a Task:

- Enter the task description in the input field at the bottom of the screen.
- Press the "+" button to add the task to the list.

### Editing a Task:

- Tap on the three dots button next to the task you wish to edit.
- Select the "Edit" option.
- Modify the task description in the modal that appears.
- Press "Save" to update the task.

### Completing a Task:

- Tap "Mark Complete" when the menu appears after clicking the three dots button next to the task to mark it as completed or incomplete.

### Deleting a Task:

- Tap "Delete" when the menu appears after clicking the three dots button next to the task to delete it.

=>Project Setup

### Prerequisites:

- [Node.js](https://nodejs.org/) installed
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed

### Navigate to project Directory

- cd react-native-todo-app

### Install Dependencies

- npm install

=Project Structure
project-root/

├── app/
│ └── index.tsx
├── node_modules
├── src/
│ ├── components/
│ │ ├── Common/
| │ │ |── Header.tsx
| | | └── Footer.d.ts
| | ├── Specific/
| | | └── TaskItem.tsx
│ │ ├── Modal/
│ │ | └── EditModal.tsx
│ │ ├── Styles/
| | | └── Styles.tsx
│ │ └── Toast/
│ │ └── Toast.tsx
│ ├──types/
│ │ └── index.d.ts
│ └── utils/
│ ├── updateAsyncStorage.ts
│ └── loadFromAsyncStorage.ts
├── package.json
├── package-lock.json
├── app.json
├── eas.json
├── expo-env.d.ts
└── README.md

=>Components

- **Header**: Displays the application title.
- **TaskItem**: Represents an individual task with options to edit, complete, or delete.
- **Footer**: Contains the input field and button for adding new tasks.
- **EditModal**: Modal component for editing existing tasks.

=>State Management

- The application uses React's useState and useEffect hooks for state management and side effects. The toDoList state holds the list of tasks, and changes are persisted using AsyncStorage.

=>AsyncStorage

- AsyncStorage is used to persist tasks between sessions. The loadFromAsyncStorage and updateAsyncStorage utility functions handle loading and saving data, respectively.

=>Error Handling
The application uses react-native-toast-message to display error messages, such as when attempting to add an empty task.

=>Dependencies

- [React Native](https://reactnative.dev/docs/getting-started)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [React Native Toast Message](https://github.com/calintamas/react-native-toast-message)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/install/)
