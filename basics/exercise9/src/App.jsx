import { useState } from "react";
import "./styles.css";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    isLoggedIn: false,
  });

  const handleLogIn = (name) => {
    setUser({ ...user, name: name, isLoggedIn: true });
  };

  const handleLogOut = () => {
    setUser({ ...user, isLoggedIn: false });
  };

  return (
    <main>
      <h1>Conditional rendering</h1>

      <div>
        {/* TODO: Add conditional rendering to display UserProfile component if user.isLoggedIn
  is true, otherwise display the LoginPrompt component */}
      </div>
    </main>
  );
};

export default App;
