const Form = ({ handleChange }) => {
  return (
    <>
      <form onChange={handleChange}>
        <label>First name</label>
        <input type="text" name="firstname"></input>
        <label>Last name</label>
        <input type="text" name="lastname"></input>
        <label>Phone</label>
        <input type="number" name="phone"></input>
        <label>Email</label>
        <input type="email" name="email"></input>
        <label>Role</label>
        <select name="role">
          <option value="select your option" disabled>
            select your option
          </option>
          <option value="student" defaultValue>
            student
          </option>
          <option value="teacher">teacher</option>
          <option value="other">other</option>
        </select>
      </form>
    </>
  );
};

export default Form;
