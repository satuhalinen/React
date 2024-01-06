const UserProfile = ({ user }) => (
  <div>
    <h1>Welcome, {user}!</h1>
    {/* TODO: Include handleLogOut function in the onClick event to log the user out */}
    <button>Log out</button>
  </div>
);

export default UserProfile;
