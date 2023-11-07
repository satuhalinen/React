import Card from './Card';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import {useState} from 'react';
import {animals, birds} from './animalsList' 

function App() {

  const [organisms, setOrganisms] = useState(animals.concat(birds)
    
  );

  const removeHandler = (name) => {
    const updatedArray = organisms.filter(animal => animal.name !== name)
    setOrganisms(updatedArray)
  }
  
  return (
    <>
    <Header/>
    <main>
      <h1>Animals</h1>
      <div className="cards">
        {organisms.map((animal) => (
 <Card
 key={animal.name}
 {...animal}
 click = {() => removeHandler(animal.name)}
  
       
       />
         ))}
      </div>
    </main>
    <Footer/>
    </>
  )
}
export default App
