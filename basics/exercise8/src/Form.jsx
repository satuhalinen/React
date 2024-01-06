const Form = ({ handleChange }) => {
  return (
    <>
      <form onChange={handleChange}>
        <label>
          First name
          <input type="text" name="firstname"></input>
        </label>
        <label>
          Last name
          <input type="text" name="lastname"></input>
        </label>
        <label>
          Phone
          <input type="number" name="phone"></input>
        </label>
        <label>
          Email
          <input type="email" name="email"></input>
        </label>
        <label>Role</label>
        <select name="role">
          <option value="select your option" disabled>
            select your option
          </option>
          <option value="student" selected>
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
