
// imports
import './App.css'
import NavBar from './components/navBar/navBar.jsx'
import Footer from './components/Footer/Footer.jsx'
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx'
import Products from './components/Products/Products.jsx'


function App() {

  return (
    <div className='fm__main'>
      <NavBar/>
      <ItemListContainer bienvenida ={'Bienvenidos a una nueva experiencia'}/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App
