import { useState } from "react";
import "./styles.css";
import Form from "./Form";
import View from "./View";

const App = () => {
  const [details, setDetails] = useState();
  function handleChange(event) {
    let name = event.target.name;
    let input = event.target.value;
    let newDetails = { ...details };
    newDetails[name] = input;
    setDetails(newDetails);
  }
  return (
    <main>
      <h1>Forms and User Input</h1>
      <Form handleChange={handleChange}></Form>
      <View details={details}></View>
    </main>
  );
};

export default App;
