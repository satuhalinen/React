import { useState } from "react";
import Book from "./Book";

const BookList = () => {
  const [activeBookId, setActiveBookId] = useState(null);

  const visibilityHandler = (id) => {
    setActiveBookId(activeBookId === id ? null : id);
  };

  return (
    <div className="card-grid">
      {/* TODO: Implement mapping of the books array from books.js to render each book using the Book component. 
      Ensure each Book component receives the necessary props, including a showDescription prop to determine 
      if the current book's description should be displayed based on its ID comparison with activeBookId. */}
    </div>
  );
};

export default BookList;
