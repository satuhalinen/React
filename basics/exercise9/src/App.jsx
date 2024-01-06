import { useState } from "react";
import "./styles.css";
import UserProfile from "./UserProfile";
import LoginPrompt from "./LoginPrompt";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    isLoggedIn: false,
  });

  const handleLogIn = (name) => {
    setUser({ ...user, name: name, isLoggedIn: true });
  };
  console.log(user);
  const handleLogOut = () => {
    setUser({ ...user, isLoggedIn: false });
  };

  return (
    <main>
      <h1>Conditional rendering</h1>

      <div>
        {user.isLoggedIn ? (
          <UserProfile
            user={user.name}
            handleLogOut={handleLogOut}
          ></UserProfile>
        ) : (
          <LoginPrompt handleLogIn={handleLogIn}></LoginPrompt>
        )}
      </div>
    </main>
  );
};

export default App;
