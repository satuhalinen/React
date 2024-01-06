const UserProfile = ({ user, handleLogOut }) => (
  <div>
    <h1>Welcome, {user}!</h1>
    <button onClick={handleLogOut}>Log out</button>
  </div>
);

export default UserProfile;
