import { NavLink } from 'react-router-dom'

 const linkData = [
    {
      id: 1,
      path: "/",
      text:"Home"
    },
    {
      id: 2,
      path: "/Product",
      text:"Products"
    },
    {
      id: 3,
      path: "/Addproductpage",
      text:"Add Product"
    },
    {
      id: 4,
      path: "/Edit",
      text:"Edit"
    },
    {
      id: 5,
      path: "/Login",
      text:"Login"
    }
  ]


const Navbar = () => {
  return (
    <div className="navbar">
      {linkData.map(el => (
        <div key={el.id}>
          <NavLink  style={({ isActive })=>(
          isActive ? { color: "black",backgroundColor:"white",borderRadius:"5px", padding:"5px 10px"} : {color: "black"}
         )} to={el.path}>{el.text}</NavLink>
        </div>
      ))}
    </div>
  )
}

export default Navbar
