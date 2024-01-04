import "./styles.css";

export const userData = {
  firstName: "Satu",
  lastName: "Halinen",
  title: "Software Development student",
};

export function User() {
  return (
    <div className="card">
      <h2>
        {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>Time to Practice</h1>
      <User />
    </div>
  );
}

export default App;
