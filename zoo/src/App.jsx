import Card from './Card';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <>
    <Header/>
    <main>
      <h1>Animals</h1>
      <div className="cards">
        <Card/>
      </div>
    </main>
    <Footer/>
    </>
  )
}
export default App
