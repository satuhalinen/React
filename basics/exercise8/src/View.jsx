const View = ({ details }) => {
  if (details) {
    const { firstname, lastname, role, phone, email } = details;
    return (
      <div>
        <h2>Your form inputs</h2>
        <div>
          <p>
            {firstname} {lastname} {phone} {email} {role}
          </p>
        </div>
      </div>
    );
  }
};

export default View;
