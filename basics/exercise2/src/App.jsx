import "./styles.css";

export const userData = {
  firstName: "Margit", // replace with your first name
  lastName: "Tennosaar", // replace with your last name
  title: "Teacher", // replace with your title
};

// Edit the User component code to output the userData data
export function User() {
  return (
    <div className="card">
      <h2>TODO: FIRST NAME LAST NAME</h2>
      <p>TODO: TITLE</p>
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>Time to Practice</h1>
      <User />
    </div>
  );
}

export default App;
