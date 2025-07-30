import Home from './Home'
import Product from './Product'
import AddProductPage from './AddProductPage'
import Edit from './Edit'
import Login from './Login'
import { Route,Routes } from 'react-router-dom'
import Description from './Description'
import Privateroutes from './Privateroutes'


const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Product" element={
        <Privateroutes>
        <Product />
        </Privateroutes>
        
        }></Route>
      <Route path="/Addproductpage" element={
        <Privateroutes>
        <AddProductPage />
        </Privateroutes>
        
        }></Route>
      <Route path="/Edit" element={<Edit />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Description/:id" element={<Description />}></Route>
      <Route path="*" element={
        <h1 style={{ textAlign: "center", marginTop: "37px", color: "blue" }}>404 Not Found</h1>
      }></Route>
    </Routes>
  )
}

export default Allroutes
