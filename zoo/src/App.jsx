import Card from './Card';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import {useState} from 'react';
import {animals, birds} from './animalsList' 

function App() {

  const [organisms, setOrganisms] = useState(animals.concat(birds)
    
  );

  const [search, setSearch] = useState('');


  const removeHandler = (name) => {
    const updatedArray = organisms.filter(animal => animal.name !== name)
    setOrganisms(updatedArray)
  }
  
  const searchHandler = (e) =>{
    setSearch(e.target.value);
  }
  const likesHandler = (name, action) => {
    const updatedArray = organisms.map((animal) => {
      if (animal.name === name){
        if (action === 'add'){
          return {...animal, likes: animal.likes + 1}
        }
        if (action === 'away') {
          return {...animal, likes: animal.likes - 1}
        }
      } else {
        return animal;
      }

    })






setOrganisms(updatedArray);

  }

  return (
    <>
    <Header/>
    <main>
      <h1>Animals</h1>
      <input type="text" onChange={searchHandler} />
      <div className="cards">
        {organisms.filter(organism => organism.name.toLowerCase().includes(search.toLowerCase())).map((animal) => (
 <Card
 key={animal.name}
 {...animal}
 onRemove = {() => removeHandler(animal.name, 'remove')}

 addLikes={() => likesHandler(animal.name, 'add')}
removeLikes={() => likesHandler(animal.name, 'away')}
       
       />
         ))}
      </div>
      
    </main>
    <Footer/>
    </>
  )
}
export default App



