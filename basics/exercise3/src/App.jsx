import "./styles.css";
import BookInfo from "./BookInfo";

const App = () => {
  return (
    <div className="books">
      <BookInfo
        title="The Little Prince"
        author="Antoine de Saint-Exupéry"
      ></BookInfo>
      <BookInfo
        title="Eloquent Javascript"
        author="Marijn Haverbeke"
      ></BookInfo>
    </div>
  );
};

export default App;
