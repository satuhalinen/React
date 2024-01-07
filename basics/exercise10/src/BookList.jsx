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
              showDescription={activeBookId === data.id ? true : false}
              key={data.id}
              title={data.title}
              author={data.author}
              description={data.description}
            ></Book>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
