import './App.css';
import { Button, SplitButton } from 'react-bootstrap'

import { BrowserRouter ,Routes,Route} from 'react-router-dom'

import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Login from './Login'
import Regiter from './Regiter'
import  Protected from './Protected'
import ProducList from './ProductList'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Jai Shree Gurudev datta</h1>
        <h5>E - Commers Project</h5>
   
        <Routes>
          <Route  path="/add" element={<Protected cmp={AddProduct}/>}/>
          <Route  path="/update" element={<Protected cmp={UpdateProduct}/>}/>
          <Route  path="/login" element={<Protected cmp={Login}/>}/>
          <Route  path="/regiter" element={<Protected cmp={Regiter}/>}/>
          <Route  path="/" element={<Protected cmp={ProducList}/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
