// Your goal is to change the title, author, genre and reading status when the button in the App component is pressed
// You DON'T need to fetch the values entered into the <input /> fields
import "./styles.css";

export const book = {
  title: "",
  author: "",
  genre: "",
  isRead: true,
};

// Please note: The Add book does not actually work!
// This exercise is just about practicing event handling
// Ignore the inputs; you'll learn to handle user input later.

function App() {
  /* Implement an event handler function, handleClick, 
  that is triggered when the "Add book" button is clicked. */
  return (
    <div id="app">
      <h1>Add book</h1>
      <div>
        <label>Title</label>
        <input type="text" />
      </div>

      <div>
        <label>Author</label>
        <input type="text" />
      </div>

      <div>
        <label>Genre</label>
        <select name="genre">
          <option value="mystery">Mystery</option>
          <option value="science_fiction">Science Fiction</option>
          <option value="history_fiction">Historical Fiction</option>
        </select>
      </div>

      <button>Add book</button>
    </div>
  );
}

export default App;
