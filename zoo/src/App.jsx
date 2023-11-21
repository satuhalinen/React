import "./App.css";
import { useState } from "react";
import { animals, birds } from "./animalsList";
import Home from "./routes/Home";
import Root from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AnimalsBirds from "./routes/AnimalsBirds";
import Birds from "./routes/Birds";
import Animals from "./routes/Animals";
import About from "./routes/About";

function App() {
  const [organisms, setOrganisms] = useState(animals.concat(birds));

  const [search, setSearch] = useState("");

  const removeHandler = (name) => {
    const updatedArray = organisms.filter((animal) => animal.name !== name);
    setOrganisms(updatedArray);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  const likesHandler = (name, action) => {
    const updatedArray = organisms.map((animal) => {
      if (animal.name === name) {
        if (action === "add") {
          return { ...animal, likes: animal.likes + 1 };
        }
        if (action === "away") {
          return { ...animal, likes: animal.likes - 1 };
        }
      } else {
        return animal;
      }
    });

    setOrganisms(updatedArray);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/animalsbirds",
          element: (
            <AnimalsBirds
              searchHandler={searchHandler}
              removeHandler={removeHandler}
              likesHandler={likesHandler}
              search={search}
              organisms={organisms}
            />
          ),
        },
        {
          path: "/animals",
          element: (
            <Animals
              searchHandler={searchHandler}
              removeHandler={removeHandler}
              likesHandler={likesHandler}
              search={search}
              animals={animals}
            />
          ),
        },
        {
          path: "/birds",
          element: (
            <Birds
              searchHandler={searchHandler}
              removeHandler={removeHandler}
              likesHandler={likesHandler}
              search={search}
              birds={birds}
            />
          ),
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
