
## Simple todo list application with CRUD (Create, Read, Update, Delete) operations using JavaScript.


The application will be displayed, showing the list of existing todos (if any) or an empty message

### Procedure

- To add a new todo, enter the text in the "Add a new todo" input field and click the "Add" button. The new todo item will be added to the list.
- Each todo item is displayed with the text, along with options to mark it as complete/incomplete, update the text, or delete the item.
- To mark a todo as complete or incomplete, click the corresponding "Mark Completed" or "Mark Incomplete" button.
- To update the text of a todo item, click the "Update" button for that item. Enter the new text in the prompt dialog, and click "OK". The todo item will be updated with the new text.
- To delete a todo item, click the "Delete" button for that item. The todo item will be removed from the list.
- The application automatically updates the todo list display after each action.
### File Structure
- index.html: The main HTML file that contains the structure and layout of the application.
- styles.css: The CSS file that defines the styles and appearance of the application.
- crud.js: The JavaScript file that implements the functionality of the Todo List Management application.

### JavaScript Functions

The crud.js file contains the following JavaScript functions:

- renderTodoList(): Renders the todo list by dynamically creating the HTML elements for each todo item and updating the display.

- addTodoItem(): Adds a new todo item to the list by taking input from the user and handling error cases.

- markCompleteIncomplete(index): Toggles the completion status of a todo item (marked as complete/incomplete).

- updateTodoText(index, newText): Updates the text of a todo item at the specified index.

- updateTodoItem(index): Allows the user to manually update the text of a todo item through a prompt dialog.

- deleteTodoItem(index): Deletes a todo item from the list.

- Event listeners: The code sets event listeners for the "Add" button to call the addTodoItem() function and for each mark/update/delete button to perform the corresponding action.

- Initial rendering: The code initially renders the todo list by calling renderTodoList().


### Run the Application
- Open index.html in browser



