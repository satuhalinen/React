import { useState } from "react";
import Book from "./Book";
import { books } from "./books";

const BookList = () => {
  const [activeBookId, setActiveBookId] = useState(null);

  const visibilityHandler = (id) => {
    if (activeBookId === id) {
      setActiveBookId(null);
    } else {
      setActiveBookId(id);
    }
  };

  return (
    <div className="card-grid">
      {books.map(function (data) {
        return (
          <div>
            <Book
              visibilityHandler={() => visibilityHandler(data.id)}
              showDescription={activeBookId === data.id ? false : true}
              key={data.id}
              title={data.title}
              author={data.author}
              description={data.description}
            ></Book>
          </div>
        );
      })}
      {/* TODO: Implement mapping of the books array from books.js to render each book using the Book component. 
      Ensure each Book component receives the necessary props, including a showDescription prop to determine 
      if the current book's description should be displayed based on its ID comparison with activeBookId. */}
    </div>
  );
};

export default BookList;
